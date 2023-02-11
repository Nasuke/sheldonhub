
const fs = require('fs')

function registerRouter(app) {
    // 1.读取目录下所有文件
    const files = fs.readdirSync(__dirname)
    // 2.遍历
    for (const file of files) {
        // 2.1忽略index
        if (!file.endsWith('.router.js')) continue
        const router = require(`./${file}`)
        app.use(router.routes())
        app.use(router.allowedMethods())
    }
}

module.exports = registerRouter