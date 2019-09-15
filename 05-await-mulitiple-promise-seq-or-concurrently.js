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

// 串行的
/* const showColumnInfo = async (id) => {
    console.time('showColumnInfo')
    const column = await getZhihuColumn('feweekly')
    const toolingtips = await getZhihuColumn('toolingtips')

    console.log(`name: ${column.title}`)
    console.log(`intro: ${column.intro}`)

    
    console.log(`name: ${toolingtips.title}`)
    console.log(`intro: ${toolingtips.intro}`)
    console.timeEnd('showColumnInfo')
} */

const showColumnInfo = async () => {
    console.time('showColumnInfo')
    const feweeklyPromise = getZhihuColumn('feweekly')
    const toolingtipsPromise = getZhihuColumn('toolingtips')

    const feweekly = await feweeklyPromise;
    const toolingtips = await toolingtipsPromise;

    console.log(`name: ${feweekly.title}`)
    console.log(`intro: ${feweekly.intro}`)
    
    console.log(`name: ${toolingtips.title}`)
    console.log(`intro: ${toolingtips.intro}`)
    console.timeEnd('showColumnInfo')
}
 
showColumnInfo()



