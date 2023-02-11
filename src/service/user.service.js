
const connection = require('../app/database')


class UserServer {
    async create(user) {
        // 1. user中解构出数据
        const { name, password } = user
        // 2. 创建statement
        const statement = 'INSERT INTO `user` (name, password) VALUES (?, ?);'
        // 3. 执行sql语句
        const [result] = await connection.execute(statement, [name, password])
        return result
    }
    async findUserByName(name) {
        const statement = 'SELECT * FROM `user` WHERE name = ?;'
        // 解构出values field不需要 如果length不为0 则说明存在
        const [values] = await connection.execute(statement, [name])
        return values
    }
}

module.exports = new UserServer()