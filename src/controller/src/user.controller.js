const {
    queryUserById
} = require('../../service/src/user.service')
class UserController {
    async create(ctx, next) {
        const result = await queryUserById()
        return ctx.body = result
    }
}

module.exports = new UserController()