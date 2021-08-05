import { request } from './request';


export function submitForm(file) {
    // for (let [key, val] of formData.entries()) {
    //     console.log([key, val])
    // }
    return request({
        url: '/pic',
        method: 'post',
        headers: {
            'Content-Type': "multipart/form-data;boundary=----WebKitFormBoundaryn8D9asOnAnEU4Js0"
                // "Content-Type": "multipart/form-data;"
        },
        transformRequest: [function() {
            return file;
        }],
        data: {
            file: file
        }
    })
}

export function submitJson(data) {
    return request({
        url: '/json',
        method: 'post',
        data: data
    })
}