<template>
    <div>
        mockdata
        <button @click="getData">点击mock数据</button>
        <el-table
            class="table"
            :data=tableData
            key="1"
            border>
            <el-table-column prop="a" label="a"></el-table-column>
            <el-table-column prop="b" label="b"></el-table-column>
            <el-table-column prop="c" label="c"></el-table-column>
        </el-table>
        <el-table
            class="table"
            :data=tableData2
            key="2"
            border>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <!-- 过滤器使用 -->
            <el-table-column prop="gender" label="性别">
              <template slot-scope="scope">
                {{scope.row.gender | genderType}}
              </template>
            </el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="money" label="资产">
              <template slot-scope="scope">
                {{scope.row.money | formatNum}}
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getTableData } from '../apiMock'

export default {
  name: 'mockData',
  data () {
    return {
      tableData: [],
      tableData2: [
        {
          name: 'zhang',
          gender: '0',
          age: '20',
          money: '-642124.245235'
        }, {
          name: 'liu',
          gender: '1',
          age: '23',
          money: '34732124.245235'
        }, {
          name: 'wang',
          gender: '0',
          age: '21',
          money: '252124.245235'
        }
      ]
    }
  },
  methods: {
    // mockjs只是拦截地址，直接返回mock数据，并不会发送真实请求，故在network不显示
    getData () {
      let param = {
        a: '1'
      }
      getTableData(param).then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.table {
  margin: 20px 0;
}
</style>
