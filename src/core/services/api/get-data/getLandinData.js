import { useQuery } from "react-query"
import { htttp } from "../../interceptor"

export const getLandinData = (key, endUrl, params, enabledFlag) => {
    return useQuery({
        queryKey: key,
        queryFn: async () => {
            console.log("function api", endUrl)
            const data = await htttp.get(endUrl, {
                params: params
            })
            return data
        },
        enabled: enabledFlag,
        refetchOnReconnect: true
    })
}