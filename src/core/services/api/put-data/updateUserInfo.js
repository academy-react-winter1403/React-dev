import { useMutation } from "react-query";
import { htttp } from "../../interceptor";

const putData = async (endUrl, dataObj, config) => {
  try {
    const data = await htttp.put(endUrl, dataObj, config);
    return data;
  } catch (error) {
    return error;
  }
};

export const updateUserInformation = (mutationKey) => {
  return useMutation({
    mutationKey: mutationKey,
    mutationFn: (data) => {
      const [postUrl, getUrl, dataObj, config] = data;
      return (data = putData(postUrl, dataObj, config));
    },
    onSuccess: async (data) => {
      console.log("onSuccess ==>", data);
      return data;
    },
    onError: (error) => {
      return error;
    },
  });
};
