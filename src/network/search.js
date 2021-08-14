import { request } from './request';

export function ClassSearch(keyword, pageNum) {
    return request({
        url: '/searchClassInfo',
        method: 'get',
        params: {
            keyword,
            pageNum,
        }
    })
}

export function HelpSearch(keyword, pageNum) {
    return request({
        url: '/searchQuestionInfo',
        method: 'get',
        params: {
            keyword,
            pageNum
        }
    })
}

export function UserSearch(keyword, pageNum) {
    return request({
        url: '/searchUserInfo',
        method: 'get',
        params: {
            keyword,
            pageNum
        }
    })
}