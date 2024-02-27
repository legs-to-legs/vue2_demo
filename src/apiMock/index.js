import request from '@/api/request'
import axios from 'axios'

// const url = process.env.NODE_ENV === 'development' ? '' : ''

// 用axios发送请求
// axios({
//   method: '',
//   url: '',
//   data
// })
// request是axios.create创建的实例同样使用
// request({
//   method: '',
//   url: '',
//   data
// })

// 获取mock数据
export function getTableData(data) {
  return request({
    url: '/mock/getTableData',
    method: 'post',
    data
  })
}

// 登录
export function login(data) {
  return request({
    url: '/mock/login',
    method: 'post',
    data
  })
}

// 退出登录
export function logOut(data) {
  return request({
    url: '/mock/logout',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getUserInfo(data) {
  return request({
    url: '/mock/userinfo',
    method: 'post',
    data
  })
}