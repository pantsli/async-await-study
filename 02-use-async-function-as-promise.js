var fetch = require('node-fetch')

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  const column = await response.json()
  return column
}

getZhihuColumn('feweekly').then(column => {
  console.log(`name: ${column.title}`)
  console.log(`intro: ${column.intro}`)
})
