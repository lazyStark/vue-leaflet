<!--
 * @Author: siwenfeng
 * @Date: 2019-11-07 15:43:48
 * @LastEditTime: 2019-11-27 16:54:22
 * @Description: this is ....
 -->
<template>
  <basic-container>
    <div class="news-todo clearfix">
      <div class="water-news">
        <div class="news-top clearfix">
          <p class="n-title">涉水要闻</p>
          <a href class="n-more">更多></a>
        </div>
        <div class="news-pic">
          <el-carousel height="255px">
            <el-carousel-item v-for="item in aPicList" :key="item">
              <div class="news-bg-box">
                <img :src="item.url" alt class="news-bg" />
                <a class="news-info" href="#">{{item.title}}</a>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="my-todo">
        <div class="news-top clearfix">
          <p class="n-title">我的待办</p>
          <a href class="n-more">更多></a>
        </div>
        <ul class="todo-list">
          <li class="t-list-item clearfix">
            <span class="t-list-desc">【排污口】&nbsp;上海松江排污二厂排污12312</span>
            <span style="margin-right: 4px; float: right;">10-12</span>
          </li>
          <li class="t-list-item clearfix">
            <span class="t-list-desc">【排污口】&nbsp;上海松江排污二厂排污12312</span>
            <span style="margin-right: 4px; float: right;">10-12</span>
          </li>
          <li class="t-list-item clearfix">
            <span class="t-list-desc">【排污口】&nbsp;上海松江排污二厂排污12312</span>
            <span style="margin-right: 4px; float: right;">10-12</span>
          </li>
          <li class="t-list-item clearfix">
            <span class="t-list-desc">【排污口】&nbsp;上海松江排污二厂排污12312</span>
            <span style="margin-right: 4px; float: right;">10-12</span>
          </li>
          <li class="t-list-item clearfix">
            <span class="t-list-desc">【排污口】&nbsp;上海松江排污二厂排污12312</span>
            <span style="margin-right: 4px; float: right;">10-12</span>
          </li>
          <li class="t-list-item clearfix">
            <span class="t-list-desc">【排污口】&nbsp;上海松江排污二厂排污12312</span>
            <span style="margin-right: 4px; float: right;">10-12</span>
          </li>
          <li class="t-list-item clearfix">
            <span class="t-list-desc">【排污口】&nbsp;上海松江排污二厂排污12312</span>
            <span style="margin-right: 4px; float: right;">10-12</span>
          </li>
          <li class="t-list-item clearfix">
            <span class="t-list-desc">【排污口】&nbsp;上海松江排污二厂排污12312</span>
            <span style="margin-right: 4px; float: right;">10-12</span>
          </li>
        </ul>
      </div>
    </div>
      <ul class="seven-entry clearfix">
        <li class="entry-item ">
          <p class="icon-entry"></p>
          <p class="entry-name">黑臭水体</p>
        </li>
        <li class="entry-item ">
          <p class="icon-entry"></p>
          <p class="entry-name">饮用水源地</p>
        </li>
        <li class="entry-item ">
          <p class="icon-entry"></p>
          <p class="entry-name">排污口</p>
        </li>
        <li class="entry-item ">
          <p class="icon-entry"></p>
          <p class="entry-name">近岸海域</p>
        </li>
        <li class="entry-item ">
          <p class="icon-entry"></p>
          <p class="entry-name">一张图</p>
        </li>
        <li class="entry-item ">
          <p class="icon-entry"></p>
          <p class="entry-name">水十条</p>
        </li>
        <li class="entry-item ">
          <p class="icon-entry"></p>
          <p class="entry-name">工业园区</p>
        </li>
      </ul>
    <div class="water-datainfo"></div>
  </basic-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      aPicList: [
        {
          url: "/img/bg/news-bg.png",
          title: "生态环境部综合司领导调研黄河流域生态环境保护工作"
        },
        {
          url: "/img/bg/news-bg.png",
          title: "生态环境部综合司领导调研黄河流域生态环境保护工作"
        },
        {
          url: "/img/bg/news-bg.png",
          title: "生态环境部综合司领导调研黄河流域生态环境保护工作"
        },
        {
          url: "/img/bg/news-bg.png",
          title: "生态环境部综合司领导调研黄河流域生态环境保护工作"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.news-todo {
  .water-news,
  .my-todo {
    float: left;
  }
  .water-news {
    width: 789px;
    height: 317px;
    margin-right: 10px;
    padding: 1px 11px 10px 10px;
  }
  .water-news .news-top, .my-todo .news-top {
    padding: 0 3px 0 2px;
    border-bottom: 2px dotted #acacac;
    background: #FFFFFF;
    .n-title {
      float: left;
      line-height: 41px;
      height: 41px;
      font-size: 16px;
    }
    .n-more {
      float: right;
      line-height: 41px;
      height: 41px;
      color: #1890ff;
    }
  }
  .water-news .news-pic {
    margin-top: 10px;
    border-bottom: 1px dotted #acacac;
    border-right: 1px dotted #acacac;
    border-left: 1px dotted #acacac;
    height: 255px;
    .news-bg {
      display: inline-block;
      height: 255px;
      width: 766px;
    }
    .news-bg-box {
      position: relative;
      .news-info {
        position: absolute;
        left: 50%;
        bottom: 37px;
        transform: translateX(-50%);
        font-size: 16px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
      }
    }
  }
  .my-todo {
    width: 400px;
    // height: 319px;
    background: #FFFFFF;
    padding: 0px 10px 10px 10px;
  }
  .my-todo .news-top{
    padding-left: 33px;
    position: relative;
    .n-title::before {
      position: absolute;
      content: '';
      width: 20px;
      height: 19px;
      left: 0;
      top: 50%;;
      transform: translateY(-50%);
      background-image: url('/img/bg/todo.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .my-todo .t-list-item {
    height: 30px;
    line-height: 30px;
    padding: 0 4px;
    .t-list-desc {
      margin-left: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 230px;
    }
  }
}
.seven-entry {
  // height: 133px;
  padding: 6px 46px 11px 45px;
  background: #fff;
  .entry-item {
    margin-right: 50px;
    float: left;
    cursor: pointer;
   .icon-entry {
     width: 103px;
     height: 102px;
     padding: 10px;
     border: 1px dotted #acacac;
     line-height: 102px;
     text-align: center;
     background-image: url('/img/bg/black-water.png');
     background-repeat: no-repeat;
     background-size: cover;
   }
   .entry-name {
     width: 103px;
     height: 14px;
     text-align: center;
   }
  }
}
.water-datainfo {
  height: 136px;
  background: #000;
}
.seven-entry > li:nth-child(2) > p.icon-entry:nth-child(1) {
  background-image: url('/img/bg/water.png');
}
.seven-entry > li:nth-child(3) > p.icon-entry:nth-child(1) {
  background-image: url('/img/bg/poll.png');
}
.seven-entry > li:nth-child(4) > p.icon-entry:nth-child(1) {
  background-image: url('/img/bg/sea.png');
}
.seven-entry > li:nth-child(5) > p.icon-entry:nth-child(1) {
  background-image: url('/img/bg/one-map.png');
}
.seven-entry > li:nth-child(6) > p.icon-entry:nth-child(1) {
  background-image: url('/img/bg/ten.png');
}
.seven-entry > li:nth-child(7) > p.icon-entry:nth-child(1) {
  background-image: url('/img/bg/park.png');
}
</style>
