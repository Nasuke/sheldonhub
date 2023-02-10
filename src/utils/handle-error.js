const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error');
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
    }
    ctx.body = { code, message }
})