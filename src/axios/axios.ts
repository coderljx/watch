import axios, {AxiosInstance, AxiosPromise, AxiosResponse} from "axios";
import {MessageBox} from "@/utils/uutils"

// const pro = "192.12.17.113"
const pro = "localhost"

const axiosInstall : AxiosInstance  = axios.create({
    timeout : 19999,
    baseURL : `http://${pro}:19999`
});


/**
 * 所有请求的响应拦截器，处理逻辑接口返回值的问题
 */
axiosInstall.interceptors.response.use( (res) : AxiosResponse => {

    const data = res.data;
    if (data.status != 200) {
        MessageBox(data.msg,"error");
    }
    return res;
});


export const httpGet = (url : string,params : object) : AxiosPromise => {
    return axiosInstall.get(url,{
        params
    });
}

// export const httpPost = (url : string,params : any) : AxiosPromise => {
//     url = userInfo(url);
//    return  axiosInstall.post(url,params);
// }

export type res = {
    data : any,
    status : number,
    msg : string
}

export type User = {
    id? : string,
    name? : string,
    phone? : string
}

// 接口地址 用于访问后台接口
export abstract class apiUrl {

    public static publicApiUrl = "/searchPhone/public";

    public static esipApiUrl = "/searchPhone/esip";
    public static ElbApiUrl = "/searchPhone/elb";
}