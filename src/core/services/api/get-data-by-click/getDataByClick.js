import { useMutation } from "react-query";
import { htttp } from "../../interceptor";

export const getDataByClick = () => {  
    return useMutation({  
        mutationKey: "product",  
        mutationFn: async (endUrl) => {  
            const response = await htttp.get(endUrl);
            return response.data
        },  
        onSuccess: (data) => {  
            return data.data
        },  
        onError: (error) => {  
            return error
        }  
    });  
}; 