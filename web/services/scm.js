import { request } from '../utils/net';
import { apis } from '../config';

export function checkoutLoginStatus() {
    return request(apis.checkLogin, {
        method: 'GET',
    })
}
