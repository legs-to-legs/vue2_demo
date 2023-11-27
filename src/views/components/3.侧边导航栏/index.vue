<template>
  <div :class="$root.themeHomeChange === '1' ? 'riskControlCenter_light' : 'riskControlCenter'">
    <div class="left">
      <el-menu :default-active="$route.query.index"
               class="el-menu-vertical"
               :text-color="$root.themeHomeChange === '1' ? '#adadad' : '#64b6fa'"
               @select="handleSelect"
               :collapse="isCollapse"
               unique-opened>
        <div v-for="item in menuList" :key="item.index">
          <el-menu-item v-if="item.children.length === 0" :index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span v-show="!isCollapse" slot="title">{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <div v-for="item1 in item.children" :key="item1.index">
                <el-menu-item v-if="item1.children.length === 0" :index="item1.index">
                  <i :class="item1.icon"></i>
                  <span slot="title">{{item1.title}}</span>
                </el-menu-item>
                <el-submenu v-else :index="item1.index">
                  <template slot="title">
                    <i :class="item1.icon"></i>
                    <span slot="title">{{item1.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <div v-for="item2 in item1.children" :key="item2.index">
                      <el-menu-item v-if="item2.children.length === 0" :index="item2.index">
                        <i :class="item2.icon"></i>
                        <span slot="title">{{item2.title}}</span>
                      </el-menu-item>
                      <el-submenu v-else :index="item2.index">
                        <template slot="title">
                          <i :class="item2.icon"></i>
                          <span v-show="!isCollapse" slot="title">{{item2.title}}</span>
                        </template>
                        <el-menu-item-group>
                          <div v-for="item3 in item2.children" :key="item3.index">
                            <el-menu-item v-if="item3.children.length === 0" :index="item3.index">
                              <i :class="item3.icon"></i>
                              <span slot="title">{{item3.title}}</span>
                            </el-menu-item>
                          </div>
                        </el-menu-item-group>
                      </el-submenu>
                    </div>
                  </el-menu-item-group>
                </el-submenu>
              </div>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
      <el-button :icon="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"
                 class="btnGroup"
                 @click="() => { isCollapse = !isCollapse; $forceUpdate() }"
                 type="primary"
      ></el-button>
    </div>
    
    <div
      class="right"
      :style="{
        'background': $root.themeHomeChange === '1' ? '#eef3ff' : '#05163d'
      }"
      ref="riskControlCenter">
      <!-- <router-view ></router-view> -->
    </div>
  </div>
    
</template>

<script>
  export default {
    name: 'testsiderbar',
    data(){
      return {
        isCollapse : true,
        routerList: {},
        menuList: [
          {
            title: '总览',
            path: '/overView',
            index: '3-1',
            icon: 'el-icon-data-line',
            children: []
          },
          {
            title: '合规任务',
            path: '/overManage',
            index: '3-2',
            icon: 'el-icon-setting',
            children: []
          },
          {
            title: '防火墙',
            path: '/firewall',
            index: '3-3',
            icon: 'el-icon-film',
            children: [
              {
                title: '防火墙规则监测',
                path: '/firewallRuleMonitor',
                index: '3-3-1',
                icon: 'el-icon-set-up',
                children: [
                  {
                    title: '防火墙规则监测子一',
                    path: '/aa',
                    index: '3-3-1-1',
                    icon: '',
                    children: []
                  }, {
                    title: '防火墙规则监测子二',
                    path: '/bb',
                    index: '3-3-1-2',
                    icon: '',
                    children: []
                  }
                ]
              }, {
                title: '防火墙规则监测er',
                path: '/firewallRuleMonitor',
                index: '3-3-2',
                icon: 'el-icon-set-up',
                children: [
                  {
                    title: '防火墙规则监测子一',
                    path: '/aa',
                    index: '3-3-2-1',
                    icon: '',
                    children: []
                  }, {
                    title: '防火墙规则监测子二',
                    path: '/bb',
                    index: '3-3-2-2',
                    icon: '',
                    children: []
                  }
                ]
              },
            ]
          }]
        }
    },
    mounted() {},
    created() {
      this.setRouterList(this.menuList);
      if(this.$route.path === '/riskControlCenter') {
        this.init(this.$route.query.index);
      }
    },
    watch: {
      $route(v) {
        if(v.path === '/riskControlCenter') {
          this.init(this.$route.query.index);
        }
      }
    },
    methods: {
      init(index) {
        index = index ? index : '3-1';
        this.setRouterList(this.menuList);
        this.$router.push({
          path: this.routerList[index],
          query: {
            ...this.$route.query,
            index: index,
            actNav: this.$route.query.actNav
          }
        });
      },
      // 设置回调函数，取出树状数据中的所需数据，扁平化，减少后续循环
      setRouterList(data) {
        data.forEach(item => {
          if(item.children.length === 0) {
            this.routerList[item.index] = item.path;
          } else {
            this.setRouterList(item.children);
          }
        })
      },
      handleSelect(key) {
        // console.log(key, keyPath, this.routerList[key]);
        // 获取设置的路由地址
        this.$router.push({
          path: this.routerList[key],
          query: {
            index: key,
            actNav: this.$route.query.actNav
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .riskControlCenter_light {
    height: 100%;
    display: flex;
    justify-content: space-between;
    /deep/ .el-menu {
      background: #fff;
      border: none;
      .el-menu-item:not(.is-active), .el-submenu__title:not(.is-active) {
        i {
          color: #4389f9;
        }
        &:hover {
          color: #4389f9;
          background:  #4389f9;;
        }
      }
      .el-menu-item.is-active {
        color: #fff;
        background: #4389f9;
      }
    }
    .left {
      width: auto;
      height: 100%;
      background: #fff;
      position: relative;
      .el-menu-vertical:not(.el-menu--collapse) {
        min-width: 150px;
        font-size: 14px;
        font-weight: bold;
      }
      .btnGroup {
        position: absolute;
        z-index: 999;
        width: 25px;
        border-radius: 0 5px 5px 0;
        padding: 14px 4px;
        right: -25px;
        top: 50%;
      }
    }
  
    .right{
      width: 100%;
      overflow-y: auto;
      background: #eef3ff;
    }
  }
  .riskControlCenter {
    height: 100%;
    display: flex;
    justify-content: space-between;
    /deep/ .el-menu, .el-menu .el-menu--popup {
      background: #1a3066;
      border: none;
      .el-menu-item, .el-submenu__title {
        &:hover {
          color: #fff;
          background: #4389f9;
        }
      }
      .el-menu-item.is-active, .el-submenu__title.is-active {
        color: #fff;
        background: #4389f9;
      }
    }
    .left {
      width: auto;
      height: 100%;
      background: #1a3066;
      position: relative;
      .el-menu-vertical:not(.el-menu--collapse) {
        min-width: 150px;
        font-size: 14px;
        font-weight: bold;
      }
      .btnGroup {
        position: absolute;
        z-index: 999;
        width: 25px;
        border-radius: 0 5px 5px 0;
        padding: 14px 4px;
        right: -25px;
        top: 50%;
      }
    }

    .right{
      width: 100%;
      overflow-y: auto;
      background: #05163d;
    }
  }
</style>
