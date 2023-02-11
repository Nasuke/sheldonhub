const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS, PASSWORD_IS_INCORRECT, NAME_IS_NOT_EXISTS, UNAUTHORIZATION, OPERATION_IS_NOT_ALLOWED } = require('../config/error');
const app = require('../app');

app.on('error', (error, ctx) => {
    let code = 0
    let message = ''
    switch (error) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            code = -1001
            message =  '用户名或者密码不能忘填哟~'
            break
        case NAME_IS_ALREADY_EXISTS:
            code = -1002
            message = '大名被人抢走啦~'
            break
        case NAME_IS_NOT_EXISTS:
            code = -1003
            message = '用户名不存在 不要偷跑哟~'
            break
        case PASSWORD_IS_INCORRECT:
            code = -1004
            message = '你小子是不是觊觎别人的号很久了~'
            break
        case UNAUTHORIZATION:
            code = -1005
            message = 'Token过期了 请氪金~'
            break
        case OPERATION_IS_NOT_ALLOWED:
            code = -1006
            message = '你小子想造谣是吧~'
            break
    }
    ctx.body = { code, message }
})