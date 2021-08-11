import { request } from './request';


export function submit(data) {
    return request({
        url: "/postClassInfo",
        method: "post",
        // headers: { "Content-Type": "application/json;Charset=utf-8" },
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data
            // data: {
            //     userInfo
            // }

    })
}