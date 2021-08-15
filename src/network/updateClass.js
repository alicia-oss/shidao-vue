export function getPageData(class_id) {
    return request({
        url: "/editClassPage",
        method: "get",
        params: {
            class_id
        }
    })
}

export function submitUpdate(data) {
    return request({
        url: "/editClass",
        method: "post",
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data
    })
}