import { deleteItemLocalStorage } from "./deleteItemLocalStorage"

export const deleteAllItemLocalStorage = (itemArray) => {
    itemArray.map((itemKey) => {
        deleteItemLocalStorage(itemKey)
    })
}