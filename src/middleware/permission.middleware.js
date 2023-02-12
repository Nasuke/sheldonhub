const { OPERATION_IS_NOT_ALLOWED } = require("../config/error")
const { checkResource} = require("../service/permission.service")


const verifyPermission = async (ctx, next) => {
    // 1.获取登录的用户momentId与传来的id
    const { id } = ctx.user
    const keyName = Object.keys(ctx.params)[0]
    const resoureId = ctx.params[keyName]
    const resourceName = keyName.replace('Id', '')

    // 2.如果id与user_id对应才能说明是该用户发的动态 不能修改他人动态
    const isPermisson = await checkResource(resourceName, resoureId, id)
    if (!isPermisson) {
        return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
    }

    await next()
}

module.exports = {
    verifyPermission
}