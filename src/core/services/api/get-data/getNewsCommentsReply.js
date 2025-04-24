import { htttp } from "../../interceptor";

const myPromise = (endUrl, dataMap) => {  
  return getNewsCommentsReplay(endUrl, dataMap);  
}  

export const getCommentsReplay = async (endUrl, dataMap) => {  
  try {  
      let result = await myPromise(endUrl, dataMap);
      // console.log(result);
      return result;  
  } catch (error) {  
      console.error("خطا:", error);  
  }  
}  

export const getNewsCommentsReplay = async (endUrl, dataMap) => {  
  if (!dataMap) return [];  
  
  // create a array from promises
  const promises = dataMap.map(async (item) => {  
    const response = await htttp.get(`${endUrl}${item.id}`);  
    return { ...item, commentReplay: response.data };  
  });  

  const commentDataArray = await Promise.all(promises);  
  return commentDataArray;  
};  