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
  logout: () => {
    return {
      code: '20000',
      msg: '查询成功',
      record: {
        
      }
    }
  },
  getUserInfo: () => {
    return {
      code: '20000',
      msg: '查询成功',
      record: {
        menus: [
          {
            component: false,
            componentPath: null,
            id: '1',
            name: '父模块一',
            newScenaries: 0,
            menuType: 'A',
            path: '/testModel',
            visible: 0,
            children: [
              {
                component: true,
                componentPath: '/views/testModel/model1',
                id: '11',
                name: '子模块一',
                newScenaries: 0,
                menuType: 'B',
                path: '/model1',
                visible: 0,
              },
              {
                component: true,
                componentPath: null,
                id: '12',
                name: '子模块二',
                newScenaries: 0,
                menuType: 'B',
                path: '/model2',
                visible: 0,
                children: [
                  {
                    component: true,
                    componentPath: '/views/testModel/model3',
                    id: '121',
                    name: '孙模块一',
                    newScenaries: 0,
                    menuType: 'C',
                    path: '/model3',
                    visible: 0,
                    children: []
                  }
                ]
              }
            ]
          },
          {
            component: true,
            componentPath: '/views/testModel/model4',
            id: '2',
            name: '父模块二',
            newScenaries: 0,
            menuType: 'A',
            path: '/model4',
            visible: 0,
            children: []
          }
        ],
        userName: '腿腿',
        workId: '66666666'
      }
    } 
  }
}