<template>
  <div>
    <el-tabs v-model="activeTab" @tab-click="handleClick">
      <template v-for="item in tabList">
        <el-tab-pane v-if="true" :key="item.key" :label="item.name" :name="item.name">
          <!-- <div v-if="item.isShow"> -->
            <component v-if="item.isShow" :is="item.name" />
          <!-- </div> -->
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script>
import tab1 from '../tab1.vue'
import tab2 from '../tab2.vue'
import tab3 from '../tab3.vue'

export default {
  components: {
    tab1,
    tab2,
    tab3
  },
  data() {
    return {
      activeTab: '',
      tabList: [
        {
          name: 'tab1',
          key: 1,
          isShow: false
        }, {
          name: 'tab2',
          key: 2,
          isShow: false
        }, {
          name: 'tab3',
          key: 3,
          isShow: false
        }
      ]
    }
  },
  methods: {
    handleClick(val) {
      this.tabList = this.tabList.map(item => {
        if(item.name === val.name) {
          item.isShow = true
        } else {
          item.isShow = false
        }
        return item
      })
    }
  }
}
</script>