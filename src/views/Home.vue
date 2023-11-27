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
      arr: [1.1, 2.2, 3.3],
      list: [{
        lookupcode: '1-0-0',
        meaning: 'a'
      },{
        lookupcode: '1-1-0-0',
        meaning: 'a1'
      },{
        lookupcode: '1-1-1-0',
        meaning: 'a11'
      },{
        lookupcode: '1-2-0-0',
        meaning: 'a2'
      },{
        lookupcode: '1-2-1-0',
        meaning: 'a11'
      },{
        lookupcode: '2-0-0-0',
        meaning: 'b'
      },{
        lookupcode: '3-0-0-0',
        meaning: 'c'
      },{
        lookupcode: '2-1-0-0',
        meaning: 'b1'
      }],
      level1: [],
      level2: [],
      level3: []
    }
  },
  mounted() {
    this.handleData(this.heatdata)
    // this.a()
    this.b()
    this.join()
    this.testSymbol()
    this.handleList()
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
    },
    handleList() {
      let temp = this.list.map(item => {
        return {
          title: item.meaning,
          index: item.lookupcode,
          children: [],
          icon: ''
        }
      })
      temp.forEach((item) => {
        let indexArr = item.index.split('-')
        if(indexArr[1] == '0') {
          this.level1.push(item)
        }
        if(indexArr[1] != '0' && indexArr[2] == '0') {
          this.level2.push(item)
        }
        if(indexArr[1] != '0' && indexArr[2] != '0' && indexArr[3] == '0') {
          this.level3.push(item)
        }
      })
      
      // this.handleLevel2()
    },
    handleLevel2() {
      this.level2.forEach(item2 => {
        this.level3.forEach(item3 => {
          if(item3.index.split('-')[0] == item2.index.split('-')[0] && item3.index.split('-')[1] == item2.index.split('-')[1]) item2.children.push(item3)
        }) 
      })
      this.handleLevel1()
    },
    handleLevel1() {
      this.level1.forEach(item1 => {
        this.level2.forEach(item2 => {
          if(item2.index.split('-')[0] == item1.index.split('-')[0]) item1.children.push(item2)
        }) 
      })
      console.log(this.leve1)
    }
    
  }
}
</script>
