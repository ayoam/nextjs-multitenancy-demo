import nextIntlMiddleware from "./middlewares/nextIntlMiddleware";
import {multiTenancyMiddleware} from "./middlewares/multiTenancyMiddleware";
import {stackMiddlewares} from "./middlewares/stackHandler";

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

const middlewares = [nextIntlMiddleware,multiTenancyMiddleware];
export default stackMiddlewares(middlewares);