import { userService } from "@/services/user.service"
import { useQuery } from "@tanstack/react-query"

export function useProfile(){
    const {data, isLoading, isSuccess} = useQuery({
        queryKey: ['profile'],
        queryFn: ()=> userService.getProfile(),
        refetchInterval: 1800000 // within 30 min cache status will be fresh
    })

    return {
        profile: data?.data,
        isLoading,
        isSuccess
    }
}