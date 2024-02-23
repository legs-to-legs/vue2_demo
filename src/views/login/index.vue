<template>
  <div class="login-wrapper">
    <!-- 导航条 -->
    <div class="nav-bar" :style="style">
      <div class="user-login">
        <el-button v-if="!hasToken" size="small" type="primary" @click="login">登录</el-button>
        <p v-else>{{ userName }}</p>
      </div>
      <!-- <el-menu v-if="hasToken">
        
      </el-menu>
      <el-menu v-else>
        
      </el-menu> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { login } from "@/apiMock";
import { setStore, getStore, removeStore } from '@/utils/auth'
export default {
  components: {
    
  },
  data() {
    return {
      style: { color: "#ffffff", background: "transparent" },
      hasToken: '',
    };
  },
  computed: {
    userName() {
      return getStore('userName')
    }
  },
  created() {
    // 初始化hasToken为null
    this.hasToken = getStore('token')
    console.log('hasToken==', this.hasToken)
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
      } else {
        this.style = { color: "#ffffff", background: "transparent" };
      }
    },
    // 登录获取token
    /**
     * Token 是在服务端产生的。
     * 如果前端使用用户名/密码向服务端请求认证，服务端认证成功，那么在服务端会返回 Token 给前端
     */
    async login() {
      try {
        const { record } = await login()
        if(record) {
          setStore('token', record.token)
          this.hasToken = getStore('token')
          this.$store.dispatch('user/settoken', record.token)
          this.$router.push(`/middlepage`)
        }
      } catch (error) {
        console.log('login--error', error)
      }
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
    height: 50px;
    line-height: 50px;
    z-index: 99;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-end;
    padding: 0 5%;
    box-sizing: border-box;
  }
}
</style>