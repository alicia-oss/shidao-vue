import { request } from './request';

export function CollectClass(class_id) {
    return request({
        url: '/CollectClass',
        method: 'get',
        params: { class_id }
    })
}

export function CancelCollectClass(id) {
    return request({
        url: '/cancelCollectClass',
        method: 'get',
        params: {
            id
        }
    })
}


export function CollectQuestion(id) {
    return request({
        url: '/CollectQuestion',
        method: 'get',
        params: id
    })
}

export function CancelCollectQuestion(id) {
    return request({
        url: '/cancelCollectQuestion',
        method: 'get',
        params: id
    })
}