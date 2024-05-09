import {useQuery} from "@tanstack/react-query";
import GetUsersList from "@/src/service/userRequests/getUsersList";
import {queryKeys} from "@/src/constants/reactQueryConstants";

export const useGetUser = () => {
    return useQuery({
        queryKey:[queryKeys.USERS_LIST],
        queryFn: GetUsersList
    });
}