var fetch = require('node-fetch')

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  console.log(response.status)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

const showColumnInfo = async (id) => {
  try {
    const column = await getZhihuColumn(id)
    console.log(`name: ${column.title}`)
    console.log(`intro: ${column.intro}`)
  } catch (err) {
    console.error(err)
  }

}

showColumnInfo('feweekly123')
