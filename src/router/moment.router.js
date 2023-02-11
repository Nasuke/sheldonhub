const KoaRouter = require('@koa/router')
const { create, list, detail, update } = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/login.middleware')
const { verifyMomentPermission } = require('../middleware/permission.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })

// 1.增(需要身份验证)
momentRouter.post('/', verifyAuth, create)
// 2.删(需要身份验证)
momentRouter.delete('/:momentId', verifyAuth, verifyMomentPermission, )
// 3.查
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)

// 4.改(需要身份验证)
momentRouter.patch('/:momentId', verifyAuth, verifyMomentPermission,update)

module.exports = momentRouter