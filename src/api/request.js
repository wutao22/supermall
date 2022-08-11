// 对于axios进行二次封装
import axios from 'axios'

// 引入进度条
import nprogress from 'nprogress'
import "nprogress/nprogress.css";
// 利用axios 对象的方法create，去创建一个axios实例
// request就是axios，只不过稍微配置一下
const requests = axios.create({
  // 配置对象
  baseURL: '/api',
  timeout: 5000

})
// 请求拦截器 在发请求之前请求拦截器可以检测到，可以在请求发出去之前做一些操作
requests.interceptors.request.use((config) => {
  nprogress.start();
  return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  // 成功的回调函数 
   nprogress.done()
    return res.data
}, (error) => {
  // 失败的回调函数
  console.log(error)
})

export default requests
