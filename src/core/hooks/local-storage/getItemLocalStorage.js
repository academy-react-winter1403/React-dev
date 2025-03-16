export const getItemLocalStorage = (key) => {
    let item = JSON.parse(localStorage.getItem(key))
    return item
}