// 这份文件就是用来做拦截的

import axios from 'axios'
import { ElMessage } from 'element-plus'
const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'
// 创建一个单例（实例）
const instance = axios.create({
    baseURL: 'http://localhost:810/',
    timeout: 4000
})

// 拦截器 - 请求拦截
instance.interceptors.request.use(config => {
    const headers = config.headers;
    // 部分接口需要拿到token
    let token = localStorage.getItem('token');
    //有token 则放到请求头上
    if (token) {
        if (!headers.Authorization) {
            headers.Authorization = 'Bearer ' + token;
        }
    }
    return config;
}, err => {
    return Promise.reject(err)
});


// 拦截器 - 响应拦截
instance.interceptors.response.use(res => {
    // //拿到状态码 
    // const { code } = res.data;
    // // 200 为成功状态
    // if (code === 200) {
    return res.data;
    //     // 500001为token 过期
    // } else if (code === 500001) {
    //     ElMessage.error(TOKEN_INVALID)
    //     setTimeout(() => {
    //         router.push('/login')
    //     }, 1500)
    //     return Promise.reject(TOKEN_INVALID)
    // } else {
    //     ElMessage.error(NETWORK_ERROR)
    //     return Promise.reject(NETWORK_ERROR)
    // }
});

// 整体导出
export default instance;