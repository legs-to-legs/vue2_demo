import request from '@/utils/request'

// const url = process.env.NODE_ENV === 'development' ? '' : ''

// 获取mock数据
export function getTableData (data) {
  return request({
    url: '/mock/getTableData',
    method: 'post',
    data
  })
}
