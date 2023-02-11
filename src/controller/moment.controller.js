const { create, querylist, queryById, updateById, remove } = require("../service/moment.service")

class MomentController {
    async create(ctx, next) {
        // 1.获取动态内容与用户id
        const { content } = ctx.request.body
        const { id } = ctx.user
        // 2.保存动态至数据库
        const result = await create(content, id)
        // 3.响应
        ctx.body = {
            code: 0,
            message: '言论自由亦有度噢~',
            data: result
        }
    }
    async list(ctx, next) {
        // 1.获取query
        const { offset, size } = ctx.query
        // 2.查询结果
        const result = await querylist(offset, size)

        ctx.body = {
            code: 0,
            data: result
        }
    }
    async detail(ctx, next) {
        // 1.获取id
        const { momentId } = ctx.params
        // 2.根据id查询动态详情
        const result = await queryById(momentId)
        ctx.body = {
            code: 0,
            data: result[0]
        }
    }
    async update(ctx, next) {
        // 1.获取修改的内容以及id
        const { content } = ctx.request.body
        const { momentId } = ctx.params
        // 2.根据id查找然后修改
        const result = await updateById(content, momentId)
        console.log(result);
        ctx.body = {
            code: 0,
            message: '改一下假装无事发生',
            data: result
        }
    }
    async remove(ctx, next) {
        const { momentId } = ctx.params
        const result = await remove(momentId)
        ctx.body = {
            code: 0,
            message: '抹除黑历史成功~',
            data: result
        }

    }
}

module.exports = new MomentController()