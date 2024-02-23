import Mock from 'mockjs'
// 如果使用要在main.js中引入 import '@/mock'

import mockData from './mockData'
import user from './user'


// Mock.mock(rurl, type, function())
Mock.mock('/mock/getTableData', 'post', mockData.getTableData)
Mock.mock('/mock/login', 'post', user.login)
Mock.mock('/mock/userinfo', 'post', user.getUserInfo)
