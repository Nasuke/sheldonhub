const KoaRouter = require('@koa/router')

const labelRouter = new KoaRouter({ prefix: '/label' })
const { create } = require('../controller/label.controller')
const { verifyAuth } = require('../middleware/login.middleware')


// 1. 新建标签
labelRouter.post('/', verifyAuth, create)

module.exports = labelRouter