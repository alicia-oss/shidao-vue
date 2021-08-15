import { request } from './request';

export function GetClassData(classInfo_id) {
    return request({
        url: "/showClassInfo",
        method: "get",
        params: {
            classInfo_id
        }
    })
}