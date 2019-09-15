var fetch = require('node-fetch')

const sleep = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

async function getZhihuColumn(id) {
    await sleep(2000)
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    return await response.json()
}

const showColumnInfo = async () => {
    console.time('showColumnInfo')
    const [feweekly, toolingtips] = await Promise.all([
        getZhihuColumn('feweekly'),
        getZhihuColumn('toolingtips')
    ])

    console.log(`name: ${feweekly.title}`)
    console.log(`intro: ${feweekly.intro}`)
    
    console.log(`name: ${toolingtips.title}`)
    console.log(`intro: ${toolingtips.intro}`)
    console.timeEnd('showColumnInfo')
}
 
showColumnInfo()



