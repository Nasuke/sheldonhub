const KoaRouter = require('@koa/router')
const { create, list, detail, update, remove } = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/login.middleware')
const { verifyPermission } = require('../middleware/permission.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })

// 1.增(需要身份验证)
momentRouter.post('/', verifyAuth, create)
// 2.删(需要身份验证)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)
// 3.查
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)

// 4.改(需要身份验证)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission,update)

module.exports = momentRouter