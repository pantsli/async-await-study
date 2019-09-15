var fetch = require('node-fetch')

function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  fetch(url)
    .then(response => response.json())
    .then(column => {
      console.log(`name: ${column.title}`)
      console.log(`intro: ${column.intro}`)
    })
}

getZhihuColumn('feweekly')
