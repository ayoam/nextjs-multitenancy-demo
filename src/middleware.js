import { NextResponse, NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

/**
 * @param {NextRequest} req
 */

const defaultLocale = 'fr';
const locales =  [defaultLocale, 'en']


// export const config = {
//     // Match only internationalized pathnames
//     matcher: ['/', '/(fr|en)/:path*']
// };

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}


function middleware(req) {
    const { pathname } = req.nextUrl;
    const hostname = req.headers.get('host').replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
    const url = req.nextUrl;
    const path = url.pathname.concat("/").replace(/^\/[a-z]{2}\//, '/').replace("//", "/");
    const extractedLoc = url.pathname.split('/')[1].toLowerCase();
    let loc =  locales.includes(extractedLoc) ?  extractedLoc : null;
    if(!loc) loc = defaultLocale

    //check if loc is valid
    if(!locales.includes(extractedLoc) && extractedLoc.length===2){
        req.nextUrl.pathname = `/404`;
    } else if (
        !pathname.includes('.') && // exclude all files in the public folder
        !pathname.startsWith('/api') // exclude all API routes
    ) {
        req.nextUrl.pathname = `/${loc}/${hostname}${path}`;
    }

    console.log('req.nextUrl.pathname', req.nextUrl.pathname);
    const handleI18nRouting = createMiddleware({
        locales,
        defaultLocale
    });
    return handleI18nRouting(req);
}

export default middleware;
