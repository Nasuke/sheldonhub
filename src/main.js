
// 导入
const app = require('./app')
const { SERVER_PORT } = require('./config/server')

// 启动服务器 监听8000端口
app.listen(SERVER_PORT, () => {
    console.log('服务器启动成功');
})