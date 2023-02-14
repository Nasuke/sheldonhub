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
 *      用一个对象存储{name: '', id: xx} 以便后续存到moment_label
 *      存在则直接放入id
 *      不存在则创建成功后放入insertId
 * 4. 将不存在关系的标签和动态添加到关系表中 存在则跳过
 *      
 */
momentRouter.post('/:momentId/label', verifyAuth, verifyPermission, verifyLabelExists, addLabels)


module.exports = momentRouter