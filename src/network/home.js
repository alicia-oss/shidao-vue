import { request } from "./request";

export function GetData() {
    return request({
        url: '/home',
        method: 'get',
    })
}