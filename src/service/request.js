import axios from 'axios';

import { baseURL, timeout } from './config';

const request = axios.create({
  baseURL,
  timeout,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求失败');
          break;
        case 403:
          console.log('权限不够');
          break;
        default:
          break;
      }
    }
    return err;
  }
);

export default request;
