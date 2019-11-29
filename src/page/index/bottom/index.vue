<!--
 * @Author: siwenfeng
 * @Date: 2019-11-26 11:31:04
 * @LastEditTime: 2019-11-27 13:27:48
 * @Description: this is ....
 -->
<template>
  <div class="v-ft">
    <basic-container>
      <div class="ft-firendship clearfix">
        <p class="fp-left">友情链接：</p>
        <ul class="fp-right clearfix">
          <li><a href="">中华人民共和国生态环境部</a></li>
          <li><a href="">中日友好环境保护中心</a></li>
          <li><a href="">中国环境科学院</a></li>
          <li><a href="">环境与经济政策研究中心</a></li>
          <li><a href="">中华人民共和国生态环境部</a></li>
          <li><a href="">生态环境卫星环境中心</a></li>
          <li><a href="">中国环境报社</a></li>
          <li><a href="">中国环境出版网</a></li>
        </ul>
      </div>
      <div class="ft-address">
        <img src="/img/bg/gov.png" alt="" class="pic-gov">
        <span class="f-address">通讯地址：北京市西城区西直门南小街115号</span>
        <span class="f-post">邮编：100029</span>
        <span>版权所有：生态环境部信息中心</span>
      </div>
    </basic-container>
  </div>
</template>

<script>
export default {
  name: "mFooter"
};
</script>

<style lang="scss" scoped>
.v-ft {
  // position: fixed;
  // bottom: 0;
}
.ft-firendship {
  width: 1200px;
  border-bottom: 2px dotted  #D9D9D9;
  border-top: 2px dotted  #D9D9D9;
  .fp-left, .fp-right {
    float: left;
  }
  .fp-left {
    height: 87px;
    width: 126px;
    line-height: 43px;
    font-weight: bold;
  }
  .fp-right {
    width: calc(100% - 126px);
    li {
      float: left;
      height: 43px;
      width:172px;
      line-height: 43px;
      text-align: center;
      margin-right: 90px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      color: #333333;
    }
  }
}
.ft-address {
  height: 116px;
  line-height: 116px;
  text-align: center;
}
.pic-gov {
  display: inline-block;
  width: 58px;
  height: 68px;
  vertical-align: middle;
  margin-right: 19px;
}
.f-address {
  margin-right: 31px;
}
.f-post {
  margin-right: 35px;
}
</style>
