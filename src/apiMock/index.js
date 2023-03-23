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
export function getTableData (data) {
  return request({
    url: '/mock/getTableData',
    method: 'post',
    data
  })
}
