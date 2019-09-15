var bluebird = require('bluebird')

const main = async () => {
    console.log('waiting ...')
    await bluebird.delay(2000)
    console.log('done!')

}
 
main()


