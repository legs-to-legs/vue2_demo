// 异步引入地图
export function mapLoader() {
  const mp = new Promise(function(resolve, reject) {
    if(window.AMap) {
      resolve(window.AMap)
    } else {
      // var url = 'http://webapi.amap.com/maps?v=1.4.6&key=您申请的key值&callback=onLoad'
      var url = 'http://webapi.amap.com/maps?v=1.4.6&key=4ee180897d6292010050ff853b9bf3aa&callback=onApiLoad'
      var jsapi = document.createElement('script')
      jsapi.src = url
      jsapi.onerror = reject
      document.head.appendChild(jsapi)
    }
    window.onApiLoad = () => {
      resolve(window.AMap)
    }
  })
  mp.then((result) => {
    return result
  }).catch((e) => {
    console.log('地图加载失败', e)
  })
  return mp
}