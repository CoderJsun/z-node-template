const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const routers = require('../router')

// 对参数进行解析
app.use(bodyParser())

routers(app)


module.exports = app