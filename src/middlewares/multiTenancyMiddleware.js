export const multiTenancyMiddleware = (next) => {
    return async(req,_next) => {
        const response = req;
        let hostname;
            let path;
            let url;
            // case : request have locale
            if(response.headers.get("x-middleware-request-x-forwarded-host")){
                hostname = response.headers.get("x-middleware-request-x-forwarded-host");
                url = new URL(response.headers.get("x-middleware-rewrite"));
                path = url.pathname;
            }
            // case : request have no locale in path or cookies
            else {
                url = new URL(response.headers.get("location"));
                hostname = url.hostname;
                path = url.pathname;
            }

            //replace localhost with domain name
            hostname = hostname.replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
            //remove locale from pathname
            path = path.split('/').slice(2).join('/');

            //get locale from headers
            const locale = response.headers.get('x-middleware-request-x-next-intl-locale');
            const newUrl = new URL(`/${locale}/${hostname}/${path}`, url.origin);
            response.headers.set('x-middleware-rewrite', newUrl.toString());
            return response;
    };
};