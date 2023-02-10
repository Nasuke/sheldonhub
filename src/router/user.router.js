
const KoaRouter = require('@koa/router')

// 1. 路由对象
const userRouter = new KoaRouter({
    prefix: '/users' 
})
// 2. 定义映射
    // 2.1 
userRouter.get('/list', (ctx, next) => {
    ctx.body = '访问成功'
})

module.exports = userRouter