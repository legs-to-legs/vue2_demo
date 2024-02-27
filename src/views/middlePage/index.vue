<template>
  <div class="middle-page">
    <div v-loading="true"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('进入middlepage')
    setTimeout(() => {
      this.$router.push(`/home`).catch(err => { console.log('跳转home-error===', err) })
    }, 2000);
  },
  beforeDestroy() {
    clearTimeout();
  },
};
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