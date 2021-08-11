export function UpdataById(classInfo_id) {
    return request({
        url: "/showClassInfo",
        method: "post",
        params: {
            classInfo_id
        }
    })
}