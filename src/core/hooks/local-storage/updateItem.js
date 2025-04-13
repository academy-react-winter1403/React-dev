export const locStorageUpdateItem = (key, value) => {
    let getItem = JSON.parse(localStorage.getItem(key))

    if (getItem) {
        const finde = getItem.find(el => el === value)
        if (!finde) {
            localStorage.setItem(key ,JSON.stringify([...getItem, value]))
        }
    }
    let newData = JSON.parse(localStorage.getItem(key))
    return newData
}

export const localStorageDeleteOneItem = (key, value) => {
    const getItem = JSON.parse(localStorage.getItem(key))

    console.log(value)
    let filteredData = getItem.filter(elem => elem !== value)
    console.log("filteredData ==>", filteredData)
    localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(filteredData))

    const newData = JSON.parse(localStorage.getItem(key))
    return newData
}