export const deleteAllParams = (paramsArray, setSearchParams) => {
    paramsArray.map((item) => {
        setSearchParams((params) => {
            params.delete(item)
            return params
        })
    })
}