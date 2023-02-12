const { create, reply, remove } = require("../service/comment.service")

class CommentController {
    async create(ctx, next) {
        // 1. 获取评论内容|动态Id|用户Id
        const { content, momentId } = ctx.request.body
        const { id } = ctx.user
        // 2. 数据库操作
        const result = await create(content, momentId, id)

        ctx.body = {
            code: 0,
            message: '键盘侠功力见长',
            data: result
        }

    }
    async reply(ctx, next) {
        // 1.获取内容|动态id|评论id|用户id
        const {content, momentId, commentId} = ctx.request.body
        const { id } = ctx.user
        // 2.数据库操作
        const result = await reply(content, momentId, commentId, id)

        ctx.body = {
            code: 0,
            message: '键盘侠功力见长',
            data: result
        }
    }
    async remove(ctx, next) {
        const { commentId } = ctx.params;
        const result = await remove(commentId);
        ctx.body = {
            code: 0,
            message: '撤回了 言多必失~',
            data: result
        }
    }
}

module.exports = new CommentController()