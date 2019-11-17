/**
 * 所有接口都用 node 代理掉
 * 统一掉登陆的弹窗
 * */

// 判断执行环境
function getRuntime() {
    return (typeof window === 'undefined') ? 'node' : 'window';
}

// 获取用户信息
export function getUserInfo(ctx) {
    let adminUserInfo;
    try {
        if (getRuntime() === 'node') {
            // node 从 cookie 中拿
        } else {
            // 浏览器从 localStorage 中拿 userInfo
            adminUserInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        }
    } catch (e) {
        adminUserInfo = {};
    }
    return adminUserInfo;
}

// 请求头中添加信息
export function getExtendHeaders() {
    const userInfo = getUserInfo() || {};
    const {token = null,userId = null} = userInfo;
    return {'x-access-token': token, 'x-application-type': 2, 'x-application-version': '1.0.9', 'x-terminal-type': 2, 'x-user-id': userId}
}

export {
    getRuntime,
}
