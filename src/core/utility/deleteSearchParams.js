export const deleteSearchParamsItem = (paramsArray, setSearchParams) => {
    return paramsArray.map((item) => {
        return setSearchParams((params) => {
            params.delete(item)
            return params
        })
    })
}