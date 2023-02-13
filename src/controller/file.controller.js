const { upload } = require("../service/file.service")
const { updateUserAvatar } = require("../service/user.service")

const { SERVER_PORT, SERVER_HOST } = require("../config/server")

class FileController {
    async upload(ctx, next) {
        const { filename, mimetype, size } = ctx.request.file
        const { id } = ctx.user
        const result = await upload(filename, mimetype, size, id)
        const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`
        const userAvatarInfo = await updateUserAvatar(avatarUrl, id)

        ctx.body = {
            code: 0,
            message: '有头像咯',
            data: avatarUrl
        }
    }
}

module.exports = new FileController() 