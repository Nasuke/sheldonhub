const KoaRouter = require('@koa/router')

const handleAvatar = require('../middleware/file.middleware')
const { upload } = require('../controller/file.controller')
const { verifyAuth } = require('../middleware/login.middleware')
const fileRouter = new KoaRouter({ prefix: '/file' })

fileRouter.post('/avatar', verifyAuth, handleAvatar, upload)

module.exports = fileRouter