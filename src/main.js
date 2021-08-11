const app = require('./app')
const {
  APP_PORT
} = require('./app/src/config')

app.listen(APP_PORT, () => {
  console.log(`服务器 ${APP_PORT} 端口 启动成功~`);
});