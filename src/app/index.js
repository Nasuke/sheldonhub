const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const userRouter = require('../router/user.router')
const loginRouter = require('../router/login.router')
const registerRouter = require('../router')

// 创建app
const app = new Koa()

// 使用中间件
app.use(bodyParser())
// 自动注册路由
registerRouter(app)
//     // 用户注册
// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())
//     // 用户登录
// app.use(loginRouter.routes())
// app.use(loginRouter.allowedMethods())

// 导出app 
module.exports = app