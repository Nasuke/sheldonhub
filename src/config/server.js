// 常量抽取
// const SERVER_PORT = 8000
const dotenv = require('dotenv')
dotenv.config()

// 从process.env解构出.env中的变量后导出
module.exports = {
    SERVER_PORT,
    SERVER_HOST
} = process.env