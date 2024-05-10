import { NextResponse, NextRequest } from 'next/server';
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

/**
 * @param {NextRequest} req
 */
function middleware(req) {
    const { pathname } = req.nextUrl;
    const hostname = req.headers.get('host').replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
    const url = req.nextUrl;
    const path = url.pathname.concat("/").replace(/^\/[a-z]{2}\//, '/');
    const loc = url.pathname.split('/')[1];

    if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
    let lng
    if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng

    // Show not found if lng in path is not supported
    if (
        !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !req.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
    }

    const response = NextResponse.rewrite(new URL(`/${loc}/${hostname}${path}`, req.url));
    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer'))
        const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    }
    return response
}

export default middleware;
