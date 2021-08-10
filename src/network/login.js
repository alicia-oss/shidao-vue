import { request } from "./request";

export function Login(name, password) {
    return request({
        url: '/login',
        method: 'get',
        params: {
            name,
            password
        }

    })
}


export function Logout() {
    return request({
        url: '/logout',
        method: 'get',
    })
}