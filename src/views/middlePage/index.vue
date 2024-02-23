<template>
  <div class="middle-page">
    <div v-loading="true"></div>
  </div>
</template>

<script>
import router from '@/router';
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push(`/home`)
    }, 1000);
  },
  beforeDestroy() {
    clearTimeout()
  }
}
</script>

<style lang="less" scoped>
.middle-page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  margin: 0;
  padding: 0;
  ::v-deep {
    .el-loading-spinner {
      top: 45vh;
    }
  }
}
</style>