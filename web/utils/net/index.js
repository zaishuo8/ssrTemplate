import serverFetch from 'node-fetch';
import clientFetch from 'unfetch';
import { stringify } from 'qs';

import { getRuntime } from "./utils";
import env from '../../config/env';
import {hosts, proxyHosts} from '../../config';
import {getExtendHeaders} from './utils';

const fetch = getRuntime() === 'node' ? serverFetch : clientFetch;

/**
 * @param api {string|object} uri 或者 api 配置对象
 * @param options {object} [options]
 * @param ctx {object} 服务端调用时用到 ctx
 *
 * return Promise
 * */
function request(api, options, ctx) {

    const requestOptions = {
        // 公共请求头，默认超时时间
        headers: {
            'Content-Type': 'application/json',
            ...getExtendHeaders(ctx)
        },
        timeout: 3000,
    };

    // uri
    let uri = '';
    if (typeof api === 'string') {
        uri = api;
    } else {
        const { path, host, proxy } = api;
        let apiEnv = env;
        if (env !== 'prod' && api.env) {
            apiEnv = api.env;
        }
        let apiHost = hosts[apiEnv][host];
        if (proxy) {
            requestOptions.headers.originhost = apiHost;
            apiHost = proxyHosts[env];
        }
        uri = `${apiHost}${path}`;
    }

    // options
    if (options === undefined) options = {};
    // 处理 params/query/body 参数
    if (options.params) {
        uri += `/${options.params}`;
        delete options.params;
    }
    if (options.query) {
        try {
            if (/\?/.test(uri)) {
                uri += `&${stringify(options.query)}`;
            } else {
                uri += `?${stringify(options.query)}`;
            }
            delete options.query;
        } catch (e) {
            console.error(e);
        }
    }
    if (options.body && (typeof options.body === 'object')) {
        try {
            options.body = JSON.stringify(options.body);
        } catch (e) {
            console.error(e);
        }
    }

    Object.assign(requestOptions, options);

    return new Promise((resolve, reject) => {
        fetch(uri, requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                resolve(data);
                // 处理 data 错误码 和 错误 message
            })
            .catch(e => {
                console.log(e);
                reject(e);
            });
    });

}

export {
    request,
    fetch,
};
