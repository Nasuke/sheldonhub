const userService = require('../service/user.service')

class UserController {
    async create(ctx, next) {
        // 1. 接受信息
        const user = ctx.request.body
        // 2. 将user信息存储到数据库中
        const res = await userService.create(user)
        // 3. 查看存储结果 告知前端
        ctx.body = {
            message: '创建成功~',
            data: res
        }
    }
}

module.exports = new UserController()