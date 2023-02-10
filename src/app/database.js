
const mysql = require('mysql2')

// 1. 创建连接池
const connectionPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'sheldonhub',
    user: 'root',
    password: '123456',
    connectionLimit: 5
})

// 2. 测试连接
connectionPool.getConnection((err, connection) => {
    if (err) {
        console.log('获取连接失败', err);
        return
    }

    connection.connect(err => {
        if (err) {
            console.log('与数据库连接失败了', err);
        } else {
            console.log('欢迎来到one piece~');
        }
    })
})

// 3. 获取连接池中连接对象(promise)
const connection = connectionPool.promise()

module.exports = connection