export default {
  login: () => {
    return {
      code: '20000',
      msg: '查询成功',
      record: {
        token: 'xxxxxxxxxxxxxxxxx'
      }
    }
  },
  getUserInfo: () => {
    return {
      code: '20000',
      msg: '查询成功',
      record: {
        menus: [],
        userName: 'aa',
        workId: '66666666'
      }
    } 
  }
}