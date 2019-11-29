<!--
 * @Author: siwenfeng
 * @Date: 2019-11-07 09:24:22
 * @LastEditTime: 2019-11-27 14:20:44
 * @Description: this is ....
 -->
<template>
  <div class="v-container">
    <top/>
    <appMain/>
    <bottom/>
  </div>
</template>

<script>
import top from './top';
import appMain from './main';
import bottom from './bottom'
export default {
  name: 'layout',
  components: {
    top,
    appMain,
    bottom
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  background: #F6F6F6;
  position: relative;
}
</style>
