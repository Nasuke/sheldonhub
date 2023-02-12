const KoaRouter = require('@koa/router')

const { create, reply, remove } = require('../controller/comment.controller')
const { verifyAuth } = require('../middleware/login.middleware')
const { verifyPermission } = require('../middleware/permission.middleware')

const commentRouter = new KoaRouter({ prefix: '/comment' })

// 1. 新增评论
commentRouter.post('/', verifyAuth, create)
// 2. 回复评论
commentRouter.post('/reply', verifyAuth, reply)
// 3. 删除评论
commentRouter.delete('/:commentId', verifyAuth, verifyPermission, remove);
module.exports = commentRouter