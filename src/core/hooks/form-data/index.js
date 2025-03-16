export const formDataFileTypeHook = (key, value) => {
    const formData = new FormData()
    formData.append(key, value)
    return formData
}