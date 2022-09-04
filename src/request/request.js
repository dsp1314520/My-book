// 封装请求
import axios from 'axios'
import { Message } from "element-ui";
import _this from "../main.js";
const v_this = _this.prototype
// 请求
const http = axios.create({
  baseURL: "https://www.googleapis.com/books",
  timeout: 6000
})
// 请求拦截
http.interceptors.request.use(config => {
  // 发送请求开启loading
  v_this.$preloader.on()
  //请求头设置
  // let token = localStorage.getItem('token') || ''
  // config.headers.Authorization = token
  return config
}, err => {
  console.log(err);
})
// 响应拦截
http.interceptors.response.use(arr => {
  // 响应数据关闭loading
  v_this.$preloader.off()
  // 对响应码的处理
  // console.log(arr);
  if (arr.status !== 200) {
    // console.log(1);
    return Message.error('错了哦，这是一条错误消息');
  }

  // switch (arr.data.meta.status) {
  //     case 200:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'success',
  //         })
  //         break;
  //     case 201:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'success',
  //         })
  //         break;
  //     case 204:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'success',
  //         })
  //         break;
  //     case 400:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'warning',
  //         })
  //         break;
  //     case 401:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'warning',
  //         })
  //         break;
  //     case 403:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'warning',
  //         })
  //         break;
  //     case 404:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'warning',
  //         })
  //         break;
  //     case 422:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'warning',
  //         })
  //         break;
  //     case 500:
  //         ElMessage({
  //             message: arr.data.meta.msg,
  //             type: 'error',
  //         })
  //         break;
  // }
  return arr
}, err => {
  v_this.$preloader.off()
  console.log(err);
  Message.error('网络请求错误,请稍后再试!');
})

// 封装请求参数
function request({ method = "get", url, data = {}, params = {} }) {
  return http({
    method,
    url,
    data,
    params,
  })
}

// 返出
export default request