export const localItemValidation = (key) => {
    let validation = localStorage.getItem(key)
    return !validation ? false : true
}

export const localItemValueValidation = (arrayKey, value) => {
    let getItem = JSON.parse(localStorage.getItem(arrayKey))

    const finde = getItem.find(el => el === value)
    return !finde ? false : true
}