<!--
 * @Author: siwenfeng
 * @Date: 2019-11-26 11:09:26
 * @LastEditTime: 2019-11-28 16:27:44
 * @Description: this is ....
 -->
<template>
  <basic-container>
    <div class="top-info">
      <div class="top-left">
        <img src="/img/bg/time.png" alt class="icon-time" />
        <span class="time-date">{{time}}</span>
        <span>星期{{weekDay}}</span>
        <img src="/img/bg/local.png" alt class="icon-position" />
        <span>北京</span>
        <span class="icon-weather"></span>
        <span>晴&nbsp;7-23℃</span>
        <span class="weather-status">28&nbsp;优</span>
      </div>
      <div class="top-right">
        <span>系统设置</span>
        <img src="/img/bg/setting.png" alt class="icon-setting" />
        <span class="sys-logout" @click="logout">【退出】</span>
        <span class="welcome-info">早上好,规划院-孙整合</span>
      </div>
    </div>
  </basic-container>
</template>

<script>
import { dateFormat, getWeek } from "@/utils/date";
export default {
  name: "topInfo",
  methods: {
    logout() {
      this.$confirm("确定注销并退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.dispatch("LogOut").then(() => {
          this.$router.push({ path: "/login" });
        });
      });
    },
    getTime() {
      this.time = dateFormat(new Date());
      this.weekDay = getWeek(new Date());
    },
    clearTimer() {
      this.timer = null;
    }
  },
  data() {
    return {
      time: "",
      weekDay: "",
      timer: null
    };
  },
  created() {
    this.getTime();
    this.timer = setInterval(() => {
      this.getTime();
    }, 1000);
  },
  beforeDestroy() {
    this.clearTimer()
  }
};
</script>

<style lang="scss" scoped>
.top-info {
  font-size: 14px;
  color: #333333;
  background: #fff;
  display: flex;
  .icon-time,
  .icon-position,
  .icon-weather {
    display: inline-block;
    vertical-align: middle;
  }
  .icon-time {
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }
  .icon-position {
    height: 24px;
    width: 20px;
    margin-left: 22px;
    margin-right: 19px;
  }
  .icon-weather {
    height: 30px;
    width: 30px;
    margin-left: 30px;
    margin-right: 10px;
    background-image: url("/img/bg/weather.png");
    background-repeat: no-repeat;
    background-position: 0 -4px;
  }
  .time-date {
    margin-right: 21px;
  }
  span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
  }
  .weather-status {
    margin-left: 10px;
    background-color: #9ade55;
    border-radius: 4px;
    width: 58px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
  }
  .top-right {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    cursor: pointer;
    margin-right: 40px;
    .icon-setting {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    .sys-logout {
      color: #4a90e2;
      margin-right: 20px;
    }
    .welcome-info {
      margin-right: 14px;
    }
  }
}
</style>
