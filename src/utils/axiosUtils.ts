import { isAxiosError } from "axios";

export function getApiErrorMessage(error :any,fallback :string){
    let mess = fallback;
    if(isAxiosError(error)){
        mess = error?.response?.data?.message
    }
    return mess
}

export function getApiSuccessMessage(data:any){
    return data?.message
}