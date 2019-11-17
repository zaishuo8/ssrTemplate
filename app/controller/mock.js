const Controller = require('egg').Controller;

class MockController extends Controller {
    async index () {
        const { ctx } = this;

        console.log('==== userInfo api ====');

        console.log(ctx.request.headers['x-access-token']);
        console.log(ctx.request.headers['x-user-id']);

        ctx.body = {
            mockData: 'mooooock'
        };
    }

    async login () {
        const { ctx } = this;

        console.log('==== true login api ====');

        ctx.body = {
            token: 'token_token_token',
            userId: 'user_id_user_id',
        };
    }
}

module.exports = MockController;
