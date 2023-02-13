const { create } = require("../service/label.service")

class LabelController {
    async create(ctx, next) {
        // 1. 获取内容
        const { name } = ctx.request.body
        const result = await create(name)

        ctx.body = {
            code: 0,
            message: '打标签行动成功~',
            data: result
        }
    }
}

module.exports = new LabelController()