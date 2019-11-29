<!--
 * @Author: siwenfeng
 * @Date: 2019-11-07 09:20:13
 * @LastEditTime: 2019-11-07 09:21:12
 * @Description: this is ....
 -->
<template>
  <div class="error-page">
    <div class="img"
         style=" background-image: url('/img/bg/500.svg');"></div>
    <div class="content">
      <h1>500</h1>
      <div class="desc">抱歉，服务器出错了</div>
      <div class="actions">
        <router-link :to="{path:'/'}">
          <el-button type="primary">返回首页</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-500"
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
