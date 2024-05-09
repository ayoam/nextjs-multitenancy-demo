import React from 'react'
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import Home from "@/src/components/home/home";
import GetUsersList from "@/src/service/userRequests/getUsersList";
import {getQueryClient} from "@/src/lib/queryClient";
import {queryKeys} from "@/src/constants/reactQueryConstants";

const Page = async()=>{
    const queryClient = getQueryClient();

    await queryClient.fetchQuery({
        queryKey: [queryKeys.USERS_LIST],
        queryFn: GetUsersList
    })

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Home />
        </HydrationBoundary>
    )
}

export default Page
