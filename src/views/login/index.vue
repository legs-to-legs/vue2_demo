<template>
  <div class="login-wrapper">
    <!-- 导航条 -->
    <!-- el-menu: router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <div class="nav-bar" :style="style">
      <el-menu
        v-if="!hasToken"
        router
        style="line-height: 60px"
        class="menu-nav"
        mode="horizontal"
      >
        <el-menu-item :index="'/home'" :style="fontStyle" @click="goHome"
          >首页</el-menu-item
        >
        <!-- <template v-for="item in permissionRoutes.filter((it) => it.meta.type && it.meta.type === 'A')">
          <el-submenu :index="item.path" :key="item.path">
            <template slot="title">{{ item.meta.title }}</template>
            <template v-if="item.children && item.children.length > 0">
              <template v-for="val in item.children">
                <el-menu-item
                  :index="item.path + '/' + val.path"
                  :key="val.path"
                >
                  <span>{{ val.meta.title }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-submenu>
        </template> -->
        <el-submenu index="5" class="login-box" :style="fontStyle">
          <template slot="title">
            <span :style="fontStyle">登录</span>
          </template>
          <el-menu-item>
            <template>
              <el-button size="small" type="primary" @click="login"
                >统一认证</el-button
              >
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <el-menu
        v-else
        router
        :style="fontStyle"
        @select="handleSelect"
        class="menu-nav"
        mode="horizontal"
      >
        <el-menu-item :index="'/home'" :style="fontStyle" @click="goHome"
          >首页</el-menu-item
        >
        <template
          v-for="item in permissionRoutes.filter(
            (it) => it.meta.type && it.meta.type === 'A'
          )"
        >
          <template v-if="item.children && item.children.length > 0">
            <el-submenu :index="item.path" :key="item.path">
              <!-- 一级菜单 -->
              <template slot="title">
                <span :style="fontStyle">{{ item.meta.title }}</span>
              </template>
              <template v-for="val in item.children">
                <template v-if="val.children && val.children.length > 0">
                  <el-submenu :index="val.path" :key="val.path">
                    <!-- 二级菜单 -->
                    <template slot="title">{{ val.meta.title }}</template>
                    <template v-for="grand in val.children">
                      <el-menu-item :index="grand.path" :key="grand.path">
                        <!-- 三级菜单 -->
                        <span>{{ grand.meta.title }}</span>
                      </el-menu-item>
                    </template>
                  </el-submenu>
                </template>
                <template v-else>
                  <el-menu-item :index="val.path" :key="val.path">
                    <span>{{ val.meta.title }}</span>
                  </el-menu-item>
                </template>
              </template>
            </el-submenu>
          </template>
        </template>
        <el-submenu index="5" class="login-box">
          <template slot="title">
            <span :style="fontStyle">{{ userInfo.userName }}</span>
          </template>
          <el-menu-item>
            <template>
              <el-button size="small" type="primary" @click="handleOut"
                >退出登录</el-button
              >
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <tags-view></tags-view>
    <router-view></router-view>
  </div>
</template>

<script>
import { login, logOut } from "@/apiMock";
import { setStore, getStore, removeStore } from "@/utils/auth";
import { mapGetters } from "vuex";
import router from "@/router";
import tagsView from "./component/tagsView";
export default {
  components: {
    tagsView
  },
  data() {
    return {
      style: { color: "#ffffff", background: "transparent" },
      fontStyle: { color: "#ffffff" },
      hasToken: "",
    };
  },
  computed: {
    ...mapGetters(["permissionRoutes", "userInfo"]),
  },
  watch: {
    $route: {
      handler(route) {
        // console.log('watch---', route)
        if (route.path == "/home") {
          this.style = { color: "#ffffff", background: "transparent" };
          this.fontStyle = { color: "#ffffff" };
        } else {
          this.style = { color: "#050505", background: "#ffffff" };
          this.fontStyle = { color: "#050505" };
        }
      },
      immediate: true,
    },
  },
  created() {
    // 初始化hasToken为null
    this.hasToken = getStore("token");
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 400) {
        this.style = { color: "#050505", background: "#ffffff" };
        this.fontStyle = { color: "#050505" };
      } else {
        this.style = { color: "#ffffff", background: "transparent" };
        this.fontStyle = { color: "#ffffff" };
      }
    },
    goHome() {
      this.$router.push(`/home`);
    },
    // 登录获取token
    /**
     * Token 是在服务端产生的。
     * 如果前端使用用户名/密码向服务端请求认证，服务端认证成功，那么在服务端会返回 Token 给前端
     */
    async login() {
      try {
        const data = await login();
        if (data.code === "20000")
          this.$message({
            message: "登录成功",
            type: "success",
          });
        setStore("token", data.record.token); // token赋值
        this.hasToken = getStore("token");
        this.$store.dispatch("user/settoken", data.record.token);
        this.$router.push(`/middlepage`).catch((err) => {
          console.log("middle-error===", err);
        });
      } catch (error) {
        console.log("login--error", error);
      }
    },
    // 退出登录
    async handleOut() {
      try {
        const data = await logOut();
        if (data.code === "20000")
          this.$message({
            message: "登出成功",
            type: "success",
          });
        removeStore("token");
        this.$store.dispatch("user/settoken", null);
        this.hasToken = getStore("token");
        this.$store.dispatch("user/setInfo", {});
        this.$store.dispatch("route/addRoute", []);
        this.$router.push(`/middlepage`).catch((err) => {
          console.log("middle-error===", err);
        });
      } catch (error) {
        console.log("logout--error", error);
      }
    },
    handleSelect(key, keypath) {
      // console.log("handleSelect==", key, keypath);
    },
  },
};
</script>

<style lang="less" scoped>
.login-wrapper {
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    z-index: 99;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-end;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .menu-nav {
    display: flex;
  }
  ::v-deep {
    .el-menu {
      background: transparent;
    }
    .el-menu.el-menu--horizontal,
    .el-menu--horizontal .el-menu-item {
      border: none;
    }
    .el-menu--horizontal .el-submenu .el-submenu__title,
    .el-menu-item {
      color: #ffffff;
      &:hover {
        background: linear-gradient(to right, #6a8ff5, #4092fe);
      }
    }
    .login-box .el-submenu__icon-arrow {
      display: none;
    }
  }
}
</style>