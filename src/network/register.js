import { request } from "./request";
import qs from "qs"

export function submit(data) {
    return request({
        url: "/register",
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