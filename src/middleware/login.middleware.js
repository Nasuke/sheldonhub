const jwt = require('jsonwebtoken')

const userService = require('../service/user.service')
const md5crypted = require('../utils/md5-password')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRECT, UNAUTHORIZATION } = require('../config/error')
const { PUBLIC_KEY } = require('../config/secret')

const verifyLogin = async (ctx, next) => {
    const { name, password } = ctx.request.body
    // 1. 验证是否漏填
    if (!name || !password) {
        return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
    }
    // 2. 验证用户名是否存在
    const users = await userService.findUserByName(name)
    const user = users[0]
    if (!user) {
        return ctx.app.emit('error', NAME_IS_NOT_EXISTS, ctx)
    }
    // 3. 验证密码
    if (user.password !== md5crypted(password)) {
        return ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx)
    }
    // 4. 保存user对象到ctx
    ctx.user = user
    // 验证完毕才执行下一个中间件
    await next()
}

const verifyAuth = async (ctx, next) => {
    // 1.获取token
    const authorization = ctx.headers.authorization
    if (!authorization) {
        return ctx.app.emit('error', UNAUTHORIZATION, ctx)
    }
    const token = authorization.replace('Bearer ', '')
    // 2.验证有效性
    try {
        // 2.1获取token信息
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        // 2.2保存token信息
        ctx.user = result
        await next()
    } catch (error) {
        return ctx.app.emit('error', UNAUTHORIZATION, ctx)
    }
}

module.exports = {
    verifyLogin,
    verifyAuth
}