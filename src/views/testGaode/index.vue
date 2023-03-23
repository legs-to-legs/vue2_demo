<template>
  <div class="container">
    <!-- 地图画布 -->
    <div id="mapContainer"></div>
    <button class="btn1" @click="addMarker">添加点标记</button>
    <button class="btn2" @click="removeMarker">移除点标记</button>
    <!-- <button class="btn3" @click="removeLayer">移除图层</button> -->
  </div>
</template>

<script>
import { mapLoader } from "../../utils/initMap";
export default {
  data() {
    return {
      map: null,
      trafficLayer: null,
      marker: null
    };
  },
  mounted() {
    this.initAMap();
  },
  methods: {
    initAMap() {
      mapLoader().then(() => {
        this.map = new AMap.Map("mapContainer", {
          resizeEnable: true,
          zoom: 10,
          center: [121.472644, 31.231706],
          minZoom: 11,
          maxZoom: 19
        })

        //实时路况图层
        // this.trafficLayer = new AMap.TileLayer.Traffic({
        //     zIndex: 10
        // });
        // this.map.add(this.trafficLayer);//添加图层到地图
        // trafficLayer.setMap(this.map);//添加图层到地图
        // trafficLayer.setMap(null);//移除图层
      })
      
    },
    addMarker() {
      // 打点
      this.marker = new AMap.Marker({
        position:[121.5067, 31.2522]//位置
      })
      // this.marker => { }
      this.map.add(this.marker)//添加到地图

      // 创建信息窗体
      var infoWindow = new AMap.InfoWindow({ 
        isCustom: false,  //是否使用自定义窗体
        content:'<div>信息窗体</div>', //信息窗体的内容可以是任意html片段
        offset: new AMap.Pixel(10, -45)
      })
      this.marker.on('click', (e) => {
        // console.log('e==', e)
        infoWindow.open(this.map, e.target.getPosition())
      })
    },
    removeMarker() {
      this.map.remove(this.marker)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  #mapContainer {
    width: 98vw;
    height: 98vh;
  }
  .btn1 {
    position: absolute;
    top: 2%;
    right: 5%;
  }
  .btn2 {
    position: absolute;
    top: 5%;
    right: 5%;
  }
  .btn3 {
    position: absolute;
    top: 8%;
    right: 5%;
  }
}
</style>