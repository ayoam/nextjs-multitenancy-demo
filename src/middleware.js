import { NextResponse, NextRequest } from 'next/server';
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

/**
 * @param {NextRequest} req
 */
function middleware(req) {
    const { pathname } = req.nextUrl;
    const hostname = req.headers.get('host').replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
    const url = req.nextUrl;
    const path = url.pathname.replace(/^\/[a-z]{2}\//, '/');

    if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
    let lng
    if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng

    //check if locale is valid
    if(!languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`))){
        return NextResponse.redirect(new URL('/404', req.url));
    }

    if (
        !pathname.includes('.') && // exclude all files in the public folder
        !pathname.startsWith('/api') // exclude all API routes
    ) {
        const response = NextResponse.rewrite(new URL(`/${lng}/${hostname}${path}`, req.url));
        if (req.headers.has('referer')) {
            const refererUrl = new URL(req.headers.get('referer'))
            const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
            if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
        }
        return response
    }
}

export default middleware;
