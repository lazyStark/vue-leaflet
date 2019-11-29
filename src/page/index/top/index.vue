<!--
 * @Author: siwenfeng
 * @Date: 2019-11-14 14:42:17
 * @LastEditTime: 2019-11-28 09:55:59
 * @Description: this is ....
 -->
<template>
  <div class="v-top">
    <top-info />
    <top-search />
    <top-menu />
  </div>
</template>

<script>
import topInfo from "./top-info";
import topSearch from "./top-search";
import topMenu from "./top-menu";
export default {
  name: "mdTop",
  components: {
    topInfo,
    topSearch,
    topMenu
  }
};
</script>

<style lang="scss" scoped>
.v-top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 272px;
  z-index: 1111;
  background: #fff;
}
</style>
