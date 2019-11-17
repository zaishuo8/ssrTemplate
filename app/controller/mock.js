const Controller = require('egg').Controller;

class MockController extends Controller {
    async index () {
        const { ctx } = this;

        console.log('==== userInfo api ====');

        console.log('params');
        console.log(ctx.params);
        console.log('query');
        console.log(ctx.query);
        console.log('body');
        console.log(ctx.request.body);

        ctx.body = {
            mockData: 'mooooock'
        };
    }

    async login () {
        const { ctx } = this;

        console.log('==== true login api ====');
        console.log(ctx.request.body);

        ctx.body = {
            token: 'token_token_token',
            userId: 'user_id_user_id',
        };
    }
}

module.exports = MockController;
