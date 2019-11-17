import { request } from '../utils/net';
import { apis } from '../config';

export function mockData() {
    return request(apis.mockData, {
        method: 'POST',
        params: 'id_123',
        query: { name: 'xl', sex: 'male' },
        body: { age: 11, address: '杭州市' },
    });
}

export function proxyLogin(body) {
    return request(apis.login, {
        method: 'POST',
        body
    })
}
