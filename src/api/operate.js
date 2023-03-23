// 可以对请求接口的返回值进行操作
export const dealRes = (res) => {
  if(res.code === '200') {
    return res.data
  } else {
    return '暂无数据'
  }
}