const {
    queryUserById
} = require('../service/user.service')
class UserController {
    async create(ctx, next) {
        const result = await queryUserById()
        return ctx.body = result
    }
}

module.exports = new UserController()