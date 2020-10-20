import axios from "axios";
import router from "../router";
import Qs from "qs";
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 100
});
// 添加request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
// 添加respone拦截器
service.interceptors.response.use(
  response => {
    const res = response;
    if (res.status != 200) {
      // 返回异常
      return Promise.reject({
        status: res.status,
        message: res.message
      });
      router.purh("/404");
    } else {
      return response.data;
    }
  },
  error => {
    console.log(error, "请求超时");
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          router.push("/pageERR");
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `未知错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }
    return Promise.reject(error.response);
  }
);

export function get(url, params = {}) {
  params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
  return service({
    url: url,
    method: "get",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    params
  });
}

//封装post请求
export function post(url, params = {}) {
  params["token"] = sessionStorage.getItem("token");

  //默认配置
  let sendObject = {
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    params: params
  };
  sendObject.params = Qs.stringify(params);
  return service(sendObject);
}

//封装put方法 (resfulAPI常用)
export function put(url, params = {}) {
  params["token"] = sessionStorage.getItem("token");
  return service({
    url: url,
    method: "put",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    params: Qs.stringify(params)
  });
}

//不要忘记export
export default service;
