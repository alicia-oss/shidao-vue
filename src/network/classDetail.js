import { request } from './request';

export function GetData(classInfo_id) {
    return request({
        url: "/showClassInfo",
        method: "get",
        params: {
            classInfo_id
        }
    })
}