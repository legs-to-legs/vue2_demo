<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <test-component />
    <test-model />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import testComponent from '@/views/components/1.component动态组件/index.vue'
import testModel from '@/views/components/2.v-model自定义事件/index.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    testComponent,
    testModel
  },
  data() {
    return {
      heatdata: [{
        x: '1',
        y: '2',
        num: '3'
      },{
        x: '11',
        y: '22',
        num: '33'
      },{
        x: '111',
        y: '222',
        num: '333'
      }],
      arr: [1.1, 2.2, 3.3]
    }
  },
  mounted() {
    this.handleData(this.heatdata)
    // this.a()
    this.b()
    this.join()
    this.testSymbol()
  },
  methods: {
    handleData(arr) {
      const data = arr.map((item) => {
        return {
          lon: item.x,
          lat: item.y,
          count: item.num
        }
      })
      console.log('data===', data)
    },
    a() {
      var data = "12.1234 13.1234,14 15"
      var temp = data.split(',')
      console.log('temp=', temp)
      var path = temp.map(item => {
        item = item.split(' ')
        return [parseFloat(item[0]), parseFloat(item[1])]
      })
      console.log('path=', path)
    },
    c(val) {
      return val*2
    },
    b() {
      var area = 0
      this.arr.forEach(e => {
        area += this.c(e)
      })
      console.log('e==', area)
    },
    join() {
      let point = [131, 21]
      let temp = point.join(' ')
      console.log(typeof(temp))
      let obj = {
        id: '1',
        name: 'a'
      }
      console.log({...obj})
    },
    testSymbol() {
      let obj = {
        data: ['hello', 'world'],
        [Symbol.iterator]() {
            const self = this;
            let index = 0;
            return {
                next() {
                    if (index < self.data.length) {
                        return {
                            value: self.data[index++]
                        };
                    } else {
                        return { done: true };
                    }
                }
            };
        }
      };
      for(var k of obj) {
        console.log('k==',k)
      }
    }
  }
}
</script>
