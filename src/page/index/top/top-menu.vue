<!--
 * @Author: siwenfeng
 * @Date: 2019-11-19 15:11:01
 * @LastEditTime: 2019-11-28 13:54:56
 * @Description: this is ....
 -->
<template>
  <div class="top-menu">
    <basic-container>
      <ul class="m-wrapper">
        <li
          class="m-link"
          v-for="(item, index) in topMenuList"
          :key="item"
          @click="changeMenu(index)"
          :class="{on:navIndex === index}"
        >{{item.label}}</li>
      </ul>
    </basic-container>
  </div>
</template>

<script>
import { getStore, setStore } from "@/utils/store";
export default {
  name: "topMenu",
  data() {
    return {
      topMenuList: [
        {
          label: "首页",
          path: "/"
        },
        {
          label: "一张图",
          path: "/one-map"
        },
        {
          label: "预警分析",
          path: "/warning-analysis"
        },
        {
          label: "综合查询",
          path: "/seo"
        },
        {
          label: "知识库",
          path: "/konwledge-base"
        },
        {
          label: "评估分析",
          path: "/valuation-analysis"
        },
        {
          label: "数据服务",
          path: "/data-service"
        }
      ],
      navIndex: 0
    };
  },
  methods: {
    changeMenu(navIndex) {
      this.navIndex = navIndex;
      setStore({ name: 'navIndex', type: 'session', content: navIndex })
      this.$store.dispatch("SET_NAV_INDEX", navIndex);
      this.$router.push({
        path: this.topMenuList[navIndex].path
      });
    }
  },
  created() {
    this.navIndex = +!!getStore({ name: "navIndex" });
    console.log(this.navIndex)
  }
};
</script>

<style lang="scss" scoped>
.top-menu {
  height: 50px;
  background: -webkit-linear-gradient(#65ace0, #4489d8); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#65ace0, #4489d8); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#65ace0, #4489d8); /* Firefox 3.6 - 15 */
  background: linear-gradient(#65ace0, #4489d8); /* 标准的语法 */
}
.m-link {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  padding: 0 31px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
}
.on {
  background: #fff;
  color: #1890ff;
}
</style>
