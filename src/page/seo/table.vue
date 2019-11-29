<!--
 * @Author: siwenfeng
 * @Date: 2019-11-27 18:26:19
 * @LastEditTime: 2019-11-29 15:41:58
 * @Description: this is ....
 -->
<template>
  <div class="lmap-table">
    <el-table style="width: 100%;" size="small" :data="tableData" border stripe>
      <el-table-column prop="id" label="序号" align="center" width="50"></el-table-column>
      <el-table-column
        prop="staName"
        label="排污口名称"
        show-overflow-tooltip
        align="center"
      ></el-table-column>
      <el-table-column
        align="center"
        label="状态"
      >
        <template slot-scope="scope">
          <el-tag v-if="scope.row.aqilevel === '1'" type="danger">超标</el-tag>
          <el-tag v-else-if="scope.row.aqilevel === '2'" type="success">正常</el-tag>
          <el-tag v-else type="info">严重</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "lmap-table",
  props: ['tableData'],
  data() {
    return {
      // tableData: []
    }
  }
};
</script>
