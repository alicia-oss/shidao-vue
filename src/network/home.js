import { request } from "./request";

export function GetData() {
    return request({
        url: '/home',
        method: 'get',
    })
}

export function CheckLogin() {
    return request({
        url: '/checkLogin',
        method: 'get'
    })
}