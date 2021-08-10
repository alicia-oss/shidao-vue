import { request } from './request';

export function ClassSearch(keyword) {
    return request({
        url: '/searchClassInfo',
        method: 'get',
        params: {
            keyword
        }
    })
}

export function HelpSearch(keyword) {
    return request({
        url: '/searchQuestionInfo',
        method: 'get',
        params: {
            keyword
        }
    })
}

export function UserSearch(keyword) {
  return request({
      url: '/searchUserInfo',
      method: 'get',
      params: {
          keyword
      }
  })
}