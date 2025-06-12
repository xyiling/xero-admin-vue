// axios 二次封装
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import config from '@/config';

// 创建 axios 实例，添加全局配置
const request = axios.create({
  baseURL: config.baseApi,
  timeout: 8000, // 请求超时时间: 8s
});

// 请求拦截器
request.interceptors.request.use((req) => {
  const headers = req.headers;
  if (!headers.Authorization) {
    headers.Authorization = `Bearer ${localStorage.getItem('token') || ''}`;
  }
    return req;
  },
  (error: unknown) => { // 请求错误处理
    ElMessage.error('请求错误，请稍后再试');
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  }
  , (error: unknown) => {
    // 响应错误处理
    if (
      typeof error === 'object' &&
      error !== null &&
      'response' in error
    ) {
      const err = error as { response: { status: number } };
      // 服务器响应了状态码，但状态码超出了 2xx 的范围
      const status = err.response.status;
      if (status === 401) {
        ElMessage.error('未授权，请登录');
      } else if (status === 403) {
        ElMessage.error('禁止访问');
      } else if (status === 404) {
        ElMessage.error('请求地址未找到');
      } else {
        ElMessage.error(`请求错误，状态码：${status}`);
      }
    } else { // 请求未发出或网络错误
      ElMessage.error('网络错误，请检查您的网络连接');
    }
    return Promise.reject(error);
  }
);

// 导出 request 实例
export default request;
