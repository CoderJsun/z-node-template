class UserService {
    async queryUserById() {
        console.log('queryUserById')
        return '创建用户成功~'
    }
}
module.exports = new UserService()