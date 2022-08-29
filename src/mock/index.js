import Mock from 'mockjs'
// 如果使用要在main.js中引入 import '@/mock'

import mockData from './mockData'

// Mock.mock(rurl, type, function())
Mock.mock('/mock/getTableData', 'post', mockData.getTableData)
