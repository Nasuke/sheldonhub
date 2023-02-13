
const KoaRouter = require('@koa/router')
const { showAvatarImage } = require('../controller/user.controller')
const userController = require('../controller/user.controller')
const { verifyUser, handlePwd } = require('../middleware/user.middleware')

// 1. 路由对象
const userRouter = new KoaRouter({
    prefix: '/users' 
})
// 2. 定义映射
    // 2.1 用户注册接口
userRouter.post('/', verifyUser, handlePwd, userController.create)

    // 2.2 展示用户头像
userRouter.get('/avatar/:userId', showAvatarImage)

module.exports = userRouter