// domain字典 （待完成 和 后端要一致）

export function getdomainMapper(obj) {
    let domainMapper = [{
            "id": 1,
            "domain": "数学"
        },
        {
            "id": 2,
            "domain": "计算机科学"
        },
        {
            "id": 3,
            "domain": "信息工程"
        },
        {
            "id": 4,
            "domain": "经管"
        },
        {
            "id": 5,
            "domain": "物理"
        },
        {
            "id": 6,
            "domain": "英语"
        },
        {
            "id": 7,
            "domain": "地理"
        },
        {
            "id": 8,
            "domain": "历史"
        },
    ]
    for (let i = 0; i < domainMapper.length; i++) {
        obj.push(domainMapper[i]);
    }
}