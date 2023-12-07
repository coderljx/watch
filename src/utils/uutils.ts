import { ElMessage } from 'element-plus'

export type Type = "success" | "warning" | "error";

export const ApiReturn = (data : any) : boolean => {
    return data.data.status == 200
}

export const MessageBox = (message : string, type : Type) => {
    ElMessage({
        message: message,
        type: type,
        zIndex : 1999998
    })
}


/**
 * 验证字段是否 未定义的
 * @param data
 */
export const fieldIsUndefined = (data : any) : boolean => {
    return data == undefined || data == "";
}


/**
 * 时间转换字符串
 * @param timestamp
 */
export function timestampToTime(timestamp : string) : string {
    // 时间戳为10位需*1000，时间戳为13位不需乘1000
    const date = new Date(window.parseInt(timestamp));
    const Y = date.getFullYear() + "-";
    const M =
        (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
    const D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    const h = date.getHours() + ":";
    const m = date.getMinutes() + ":";
    const s = date.getSeconds();
    return Y + M + D + h + m + s;
}



// 统一配置的系统消息提示
export abstract class Message {

}

