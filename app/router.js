'use strict';

const config = require('../config/config.ssr');

module.exports = app => {
  const { router, controller } = app;
  config.routes.map(route => {
    router.get(`${route.path}`, controller[route.controller][route.handler])
  });

  router.get('/', controller.proxy.login);

  // proxy 路由
  router.post('/proxy/login', controller.proxy.login);

  // mock 路由
  router.post('/mock/:id', controller.mock.index);
  router.post('/login', controller.mock.login);
};
