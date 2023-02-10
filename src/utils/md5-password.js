
const crypto = require('crypto')

function md5crypted(password) {
    const md5 = crypto.createHash('md5')
    // 以16进制方式加密
    return md5.update(password).digest('hex')
}

module.exports = md5crypted