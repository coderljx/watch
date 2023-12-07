import {httpGet, apiUrl} from "@/axios/axios"

// esip的服务类
export class Isftp {
    constructor() {
    }

    // 加载有esip程序的机器
    public loadEsip() {
        const url = apiUrl.publicApiUrl + "/getAllIp/isftp";
        return httpGet(url, {});
    }

    public getFileContent(ip : string,fileName : string) {
        const url = apiUrl.publicApiUrl + "/getName/isftp/" + ip;
        return httpGet(url, {fileName});
    }

}