<!--
 * @Author: siwenfeng
 * @Date: 2019-11-26 11:30:59
 * @LastEditTime: 2019-11-28 17:01:34
 * @Description: this is ....
 -->
<template>
  <div class="v-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="$route.meta.keepAlive">
        <router-view :key="key"/>
      </keep-alive>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "main",
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
};
</script>

<style lang="scss" scoped>
.v-main {
  width: 100%;
  // padding: 0 40px;
  margin: 282px auto 40px auto;
}
</style>
