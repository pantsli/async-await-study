var fetch = require('node-fetch')
var bluebird = require('bluebird')

async function getZhihuColumn(id) {
    await bluebird.delay(2000)
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    return await response.json()
}

const showColumnInfo = async () => {
    console.time('showColumnInfo')
    // 串行
    // const names = ['feweekly', 'toolingtips']
    // for (const name of names) {
    //     const column = await getZhihuColumn(name)
    //     console.log(`name: ${column.title}`)
    //     console.log(`intro: ${column.intro}`)
    // }

    // 并行处理
    const names = ['feweekly', 'toolingtips']
    const promises = names.map(x => getZhihuColumn(x))
    for (const promise of promises) {
        const column = await promise
        console.log(`name: ${column.title}`)
        console.log(`intro: ${column.intro}`)
    }

    console.timeEnd('showColumnInfo')
}

showColumnInfo()



