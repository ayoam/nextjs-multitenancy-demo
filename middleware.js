import { NextResponse, NextRequest } from 'next/server';

/**
 * @param {NextRequest} req
 */
function middleware(req) {
    const { pathname, origin, locale } = req.nextUrl;
    const hostname = req.headers.get('host').replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
    const url = req.nextUrl;
    const searchParams = req.nextUrl.searchParams.toString();
    const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

    if (
        !pathname.includes('.') && // exclude all files in the public folder
        !pathname.startsWith('/api') // exclude all API routes
    ) {
        const response = NextResponse.next();
        return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
    }
}

export default middleware;
