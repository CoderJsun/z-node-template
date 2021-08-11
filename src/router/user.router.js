const Router = require('koa-router')
const {
    create
} = require('../controller/src/user.controller')
// 用户接口集合

// 创建用户Api
const user = new Router({
    prefix: '/users'
})
user.post('/', create)

module.exports = user