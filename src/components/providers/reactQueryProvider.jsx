import React, {useState} from 'react'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const ReactQueryProvider = ({children})=>{
    const [queryClient] = useState(() =>new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            },
        },
    }));

    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export default ReactQueryProvider
