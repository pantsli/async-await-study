var fetch = require('node-fetch')

/* async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}

(async () => {
  const column = await getZhihuColumn('feweekly')
  console.log(`name: ${column.title}`)
  console.log(`intro: ${column.intro}`)
})() */

// 在类上声明async
class APIClient {
  async getColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    return await response.json()
  }
}

(async () => {
  const client = new APIClient()

  const column = await client.getColumn('feweekly')
  console.log(`name: ${column.title}`)
  console.log(`intro: ${column.intro}`)
})()