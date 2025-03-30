export const setItemLocalStorage = (key, value) => {
    // if (typeof(value) !== "string") {
        localStorage.setItem(key, JSON.stringify(value))
    // }else {
        // localStorage.setItem(key, value)
    // }
}