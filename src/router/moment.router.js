const KoaRouter = require('@koa/router')
const { create, list, detail, update, remove, addLabels } = require('../controller/moment.controller')
const verifyLabelExists = require('../middleware/label.middleware')
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
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)

// 5.添加标签
/**
 * 1. 是否登录
 * 2. 是否有操作这个动态的权限
 * 3. 所选标签是否存在
 * 4. 将标签和动态关系添加到关系表中
 */
momentRouter.post('/:momentId/label', verifyAuth, verifyPermission, verifyLabelExists, addLabels)


module.exports = momentRouter