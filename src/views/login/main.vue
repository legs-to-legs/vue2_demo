<template>
  <div class="main">
    <!-- 轮播图 -->
    <top-banner/>
    <!-- 可滚动内容 -->
    <model-main/>
  </div>
</template>

<script>
import topBanner from './component/topBanner'
import modelMain from './component/modelMain'
export default {
  components: {
    topBanner,
    modelMain
  },
  mounted() {
    
  }
}
</script>

<style lang="less" scoped>

</style>