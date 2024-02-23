// 1、导入axios
// 2、创建axios实例，配置一些公共基础设置，比如baseURL
// 3、设置请求拦截 request
// 4、设置响应拦截 response
// 5、导出模块 export

import axios from 'axios'
import { dealRes } from './operate.js'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // url = baseURL + request url
  timeout: 80000 // 请求超时时间
})
service.interceptors.request.use(
  config => {
    console.log('config=', config)
    console.log('NODE_ENV', process.NODE_ENV)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    // console.log('response=', response)
    return response.data
    // return dealRes(response)
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
