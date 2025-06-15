import { useQuery } from "react-query"
import { htttp } from "../../interceptor"

export const getArticleCommentData = (key, endUrl) => {
    return useQuery({
        queryKey: key,
        queryFn: async () => {
            const data = await htttp.get(endUrl)
            return data.data
        },
        refetchOnReconnect: true
    })
}

export const gteArtCommentData = (key, commentUrl, commentParams, replayUrl, enabledFlag) => {
    return useQuery({
        queryKey: key,
        queryFn: async () => {
            let commentFulldata = []
            let dataObj = {}
            const commentData = await htttp.get(commentUrl, {
                params: commentParams
            })
            const fullData = await Promise.all(commentData.data.map( async (item) => {
                const getReplayData = await htttp.get(replayUrl, {
                    params: {
                        Id: item.id
                    }
                })
                dataObj = {...item, commentReplay: getReplayData.data}
                commentFulldata.push(dataObj)
                return dataObj
            }))
            return fullData
        },
        enabled: enabledFlag
    })
}