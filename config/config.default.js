const resolvePath = (path) => require('path').resolve(__dirname, path)

module.exports = {
    keys: 'egg-ssr',
    static: {
        prefix: '/',
        dir: [resolvePath('../dist'), resolvePath('../app/public')]
    },

    security: {
        // 调试时关闭，生产环境开启白名单
        csrf: {
            enable: false,
        },
    },
};
