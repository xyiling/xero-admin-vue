// axios 二次封装
import axios, { type AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import config from '@/config';
import router from '@/router';

// 创建 axios 实例，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000, // 请求超时时间: 8s
});

// 请求拦截器
service.interceptors.request.use((req) => {
  const headers = req.headers;
  if (!headers.Authorization) {
    headers.Authorization = `Bearer ${localStorage.getItem('token') || ''}`;
  }
  return req;
})

// 响应拦截器
service.interceptors.response.use((resp) => {
  const { code, msg, data } = resp.data
  if (code === 200) {
    return data
  } else {
    ElMessage.error(code)
    setTimeout(() => {
      router.push("/login")
    }, 1500);
    return Promise.reject(msg)
  }
})

function request(options: AxiosRequestConfig) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock? config.mockApi: config.baseApi
  }
  return service(options)
}
// 导出 request 实例
export default request;
