<!--
 * @Author: siwenfeng
 * @Date: 2019-11-07 09:21:39
 * @LastEditTime: 2019-11-27 14:27:12
 * @Description: this is ....
 -->
<template>
  <div class="basic-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "basicContainer"
};
</script>

<style lang="scss">
.basic-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
