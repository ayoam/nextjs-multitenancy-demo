import { QueryClient } from '@tanstack/react-query';

const STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const queryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: STALE_TIME
        },
        mutations: {
            onError: (error) => {
                /** You can use toast or notification here */
                console.error(error.message);
            }
        }
    }
};

export const getQueryClient = () => new QueryClient(queryClientConfig);