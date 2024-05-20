import nextIntlMiddleware from "./middlewares/nextIntlMiddleware";
import {multiTenancyMiddleware} from "./middlewares/multiTenancyMiddleware";
import {stackMiddlewares} from "./middlewares/stackHandler";
import NextAuth from "next-auth";
import {authConfig} from "@/src/auth.config";

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export const { auth } = NextAuth(authConfig)

// Ensure that the middleware list maintains the same order.
// You should return response directly from the last middleware without using next(req,_next) function.
const middlewares = [nextIntlMiddleware,multiTenancyMiddleware];
export default stackMiddlewares(middlewares);