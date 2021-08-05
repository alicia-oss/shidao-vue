import axios from 'axios'
import Qs from 'qs'

export function request(config) {
    const instance = axios.create({
        baseURL: "http://localhost:8080",
        timeout: 5000,
        transformRequest: [
            (data) => {
                return data instanceof FormData ? data : Qs.stringify({ //此处的data类型判断为重要点，
                    ...data
                });
            }
        ]
    })

    // instance.interceptors.request.use(config => {
    //     return config
    // }), err => {

    // }

    // instance.interceptors.response.use(res => {
    //     return res.data
    // }, err => {
    //     console.log(err);
    // })

    return instance(config)
}