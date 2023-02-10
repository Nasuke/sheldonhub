const Koa = require('koa')
const userRouter = require('../router/user.router')

// 创建app
const app = new Koa()

// 使用中间件
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 导出app 
module.exports = app