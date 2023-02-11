const jwt = require('jsonwebtoken')

const { PRIVATE_KEY, PUBLIC_KEY } = require('../config/secret')

class LoginController {
    sign(ctx, next) {
        // 颁发证书
        //1. 获取user信息
        const { id, name } = ctx.user
        //2. 颁发令牌
        const token = jwt.sign({ id, name }, PRIVATE_KEY, {
            expiresIn: 24 * 60 * 30,
            algorithm: 'RS256'
        })
        //3. 返回用户信息
        ctx.body = { code: 0, data: { id, name, token } }
    }
}

module.exports = new LoginController()