const fs = require('fs')

const userService = require('../service/user.service')
const { getAvatarByID } = require('../service/file.service')
const UPLOAD_PATH = require('../config/path')

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
    async showAvatarImage(ctx, next) {
        // 1. 获取用户id
        const { userId } = ctx.params
        // 2. 获取id对应头像信息
        const avatarInfo = await getAvatarByID(userId)
        console.log(avatarInfo);
        // 3. 读取头像所在文件
        const { filename, mimetype } = avatarInfo
        // 4. 创建一个可读流
        ctx.type = mimetype
        ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`)
    }
}

module.exports = new UserController()