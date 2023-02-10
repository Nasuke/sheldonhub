const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')
const userService = require('../service/user.service')
const md5crypted = require('../utils/md5-password')

const verifyUser = async (ctx, next) => {
    // 1. 对客户端传来的信息进行验证
    // 1.1 用户名密码是否为空
    const { name, password } = ctx.request.body

    if (!name || !password) {
        // 利用错误处理统一完成
        return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
    }
    // 1.2 用户名是否存在 
    const userExist = await userService.findUserByName(name)
    if (userExist) {
        return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
    }
    // 2. 验证完毕执行下一个中间件(异步)
    await next()
}

const handlePwd = async (ctx, next) => {
    const { password } = ctx.request.body
    // 将用户密码替换成加密后的
    ctx.request.body.password = md5crypted(password)
    await next()
}

module.exports = {
    verifyUser,
    handlePwd
}