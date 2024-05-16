import createMiddleware from "next-intl/middleware";

const defaultLocale = 'de';
const locales =  [defaultLocale, 'fr', 'en'];

const nextIntlMiddleware = (next) => {
    return async(req, _next) => {
        return next(createMiddleware({
            locales,
            defaultLocale
        })(req), _next);
    };
};

export default nextIntlMiddleware