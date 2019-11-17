// 判断执行环境
export function getRuntime() {
    return (typeof window === 'undefined') ? 'node' : 'window';
}

// 获取用户信息
export function getUserInfo(ctx) {
    let adminUserInfo;
    try {
        if (getRuntime() === 'node') {
            // node 从 cookie 中拿 userInfo
            adminUserInfo = JSON.parse(ctx.cookies.get('user_info') || '{}');
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
export function getExtendHeaders(ctx) {
    const userInfo = getUserInfo(ctx) || {};
    const { token = null, userId = null } = userInfo;
    return {
        'x-access-token': token,
        'x-application-type': 2,
        'x-application-version': '1.0.9',
        'x-terminal-type': 2,
        'x-user-id': userId
    }
}
