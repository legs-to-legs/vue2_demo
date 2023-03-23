<template>
  <div>
    <common-slot>
      基础插槽操作
    </common-slot>
    <common-slot>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <span>基础插槽操作2</span>
    </common-slot>

    <!-- 默认内容渲染 -->
    <default-slot></default-slot>
    <!-- 插槽内容取代默认内容 -->
    <default-slot>
      保存
    </default-slot>

    <!-- 具名插槽使用 -->
    <base-layout>
      <template v-slot:header>
        <h1>测试具名插槽</h1>
      </template>
      <!-- <p>content1</p>
      <p>content2</p> -->
      <template v-slot:default>
        <p>content1</p>
        <p>content2</p>
      </template>
      <template v-slot:footer>
        <button>清空</button>
        <button>查询</button>
      </template>
    </base-layout>

    <!-- 作用域插槽 -->
    <data-slot></data-slot>
    <!-- 自定义slotProps名称 包含了所有插槽prop的对象 -->
    <!-- v-slot:default="slotProps" /  v-slot="slotProps" -->
    <data-slot>
      <template v-slot:default="slotProps">
        {{slotProps.user.job}}
      </template>
    </data-slot>
  </div>
</template>

<script>
/**
 * 插槽 合成组件
 * 父级模板里所有内容都是在父级作用域中编译的；子模版里所有内容都是在子作用域中编译的
 * 父级无法直接访问使用子级作用域中定义的内容
 */

import commonSlot from './components/1.普通插槽.vue'
import defaultSlot from './components/3.默认插槽内容.vue'
import baseLayout from './components/4.具名插槽.vue'
import dataSlot from './components/5.作用域插槽.vue'

export default {
  name: 'testslot',
  components: {
    commonSlot,
    defaultSlot,
    baseLayout,
    dataSlot
  }
}
</script>