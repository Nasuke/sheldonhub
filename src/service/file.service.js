const connection = require('../app/database')

class FileService {
    async upload(filename, mimetype, size, userId) {
        const statement = 'INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);'
        const [result] = await connection.execute(statement, [filename, mimetype, size, userId])
        return result
    }
    async getAvatarByID(userId) {
        const statement = 'SELECT * FROM avatar WHERE user_id = ?;'
        const [result] = await connection.execute(statement, [userId])
        // 选最后一张图片(喜新厌旧的用户!!!)
        return result.pop()
    }
}

module.exports = new FileService()