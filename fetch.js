// 引入axios
import axios from 'axios';
import Vuec from '../main.js';
// 创建axios实例
const httpService = axios.create({
    baseURL: 'http://woa.yangguangzhiye.cn/sign', // 访问网址
    // baseURL: 'http://192.168.8.15/sign', // 访问网址
    // timeout: 3000 ,// 请求超时时间
});
// request拦截器
httpService.interceptors.request.use(
    config => {
        Vuec.$toast.loading({
            message: '加载中...',
            duration: 0,
            forbidClick: true
        });
        if(config.data.Login_token){
            return config;
        };
    },
    error => {
        // 请求错误处理
        Vuec.$toast.clear();
        Promise.reject(error);
    }
)
// respone拦截器
httpService.interceptors.response.use(
    response => {
        Vuec.$toast.clear();
        // 统一处理状态
        const res = response;
        if (res.status != 200) {// 返回异常
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        } else {
            return response;
        }
    },
    // 处理处理
    error => {
        Vuec.$toast.clear();
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求';
                    break;
                case 401:
                    error.message = '未授权，请重新登录';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = '请求错误,未找到该资源';
                    break;
                case 405:
                    error.message = '请求方法未允许';
                    break;
                case 408:
                    error.message = '请求超时';
                    break;
                case 500:
                    error.message = '服务器端出错';
                    break;
                case 501:
                    error.message = '网络未实现';
                    break;
                case 502:
                    error.message = '网络错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                case 504:
                    error.message = '网络超时';
                    break;
                case 505:
                    error.message = 'http版本不支持该请求';
                    break;
                default:
                    error.message = `未知错误${error.response.status}`;
            }
        } else {
            error.message = "连接到服务器失败";
        }
        if(sessionStorage.getItem("Login_token")){
            Vuec.$toast.fail(error.message);
        };
        return Promise.reject(error);
    }
)

/*网络请求部分*/

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url, params = {}) {
    params['Login_token'] = sessionStorage.getItem("Login_token");
    params['block'] = sessionStorage.getItem("block");
    url = `${url}?Login_token=${sessionStorage.getItem("Login_token")}?block=${sessionStorage.getItem("block")}`
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'get',
            data: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */ 
export function post(url, params = {}) {
    params['Login_token'] = sessionStorage.getItem("Login_token");
    params['block'] = sessionStorage.getItem("block");
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'post',
            data: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload(url, params = {}) {
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'post',
            data: params,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export default {
    get,
    post,
    fileUpload
}