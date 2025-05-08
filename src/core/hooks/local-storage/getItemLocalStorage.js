// export const getItemLocalStorage = (key) => {
//     let item = JSON.parse(localStorage.getItem(key))
//     return item
// }

export const getItemLocalStorage = (key) => {
    try {
      const item = localStorage.getItem(key);
      return JSON.parse(item);
    } catch (error) {
      // If JSON.parse fails, just return the raw string
      return localStorage.getItem(key);
    }
  };
  