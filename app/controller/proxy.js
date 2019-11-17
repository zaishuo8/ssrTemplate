const Controller = require('egg').Controller;

class ProxyController extends Controller {
    async login () {
        const { ctx } = this;

        console.log('==== proxy login api ====');
        const path = ctx.request.path.replace('\/proxy', '');
        const method = ctx.request.method;
        const body = ctx.request.body;
        const headers = ctx.request.headers;
        console.log(path);
        console.log(method);
        console.log(body);
        console.log(headers.originhost);

        try {

            const result = await ctx.curl(`${headers.originhost}${path}`, {
                method,
                data: body,
                contentType: 'json',
                dataType: 'json',
            });

            console.log('proxy login result');
            console.log(result.data);

            ctx.body = result.data;

        } catch (e) {
            ctx.body = new Error('登陆失败');
        }

    }
}

module.exports = ProxyController;
