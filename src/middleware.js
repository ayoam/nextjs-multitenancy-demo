import nextIntlMiddleware from "./middlewares/nextIntlMiddleware";
import {multiTenancyMiddleware} from "./middlewares/multiTenancyMiddleware";
import {stackMiddlewares} from "./middlewares/stackHandler";

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

// Ensure that the middleware list maintains the same order.
// You should return response directly from the last middleware without using next(req,_next) function.
const middlewares = [nextIntlMiddleware,multiTenancyMiddleware];
export default stackMiddlewares(middlewares);