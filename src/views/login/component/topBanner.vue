<template>
  <div class="top-banner">
    <el-carousel>
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <template>
          <div class="img-container" :style="{ 'background-image': `url(${item.img})` }"></div>
        </template>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        {
          name: 'a',
          img: require('@/assets/banner/banner1.jpg')
        }, {
          name: 'b',
          img: require('@/assets/banner/banner2.jpg')
        }, {
          name: 'c',
          img: require('@/assets/banner/banner3.jpg')
        }, {
          name: 'd',
          img: require('@/assets/banner/banner4.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.top-banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  .img-container {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
::v-deep {
  .el-carousel {
    height: 100%;
    .el-carousel__container {
      height: 100%;
    }
  }
  .el-carousel__indicators--horizontal {
    bottom: 10%;
  }
}
</style>