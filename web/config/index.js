const hosts = {
    dev: {
        admin: 'http://127.0.0.1:7001',
        protal: 'http://127.0.0.1:7001',
    },
    sit: {

    },
    test: {
        admin: 'http://asman.test.com',
        protal: 'http://asman.test.com',
    },
    prod: {
        admin: 'http://asman.prod.com',
        protal: 'http://portal.asman.com.cn',
    },
};

const proxyHosts = {
    dev: 'http://127.0.0.1:7001/proxy',
    sit: '',
    test: '',
    prod: '',
};

const apis = {
    mockData: {
        path: '/mock',
        host: 'admin',
        // env: 'test',  // env 一般统一为环境变量，也可单独对配置; 当环境变量为 prod 时，忽略该配置
        // proxy: true,  // 配置是否代理，代理接口会走 node 层; 代理登陆接口，node 端将 token 设置到 cookie 中
    },
    login: {
        path: '/login',
        host: 'admin',
        proxy: true,
    },
};

export {
    apis,
    hosts,
    proxyHosts,
}
