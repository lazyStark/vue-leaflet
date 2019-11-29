<!--
 * @Author: siwenfeng
 * @Date: 2019-11-14 15:09:00
 * @LastEditTime: 2019-11-28 17:49:27
 * @Description: this is ....
 -->
<template>
  <div class="top-search">
    <basic-container>
      <div class="s-search">
        <img src="/img/bg/logo.png" alt class="s-logo" />
        <span class="s-title">国家水生态环境信息平台</span>
        <div class="s-input">
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="state"
            :fetch-suggestions="querySearch"
            placeholder="站内搜素"
          >
            <i class="el-icon-search el-input__icon" slot="suffix"></i>
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.address }}</span>
            </template>
          </el-autocomplete>
        </div>
      </div>
    </basic-container>
  </div>
</template>

<script>
export default {
  name: "topSearch",
  data() {
    return {
      restaurants: [],
      state: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        }
      ];
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang="scss">
.s-input {
  .el-input__inner {
    border-radius: 20px;
  }
}
</style>
<style lang="scss" scoped>
.top-search {
  height: 182px;
  background: url("/img/bg/bg-top.png") center center;
  background-size: cover;;
}
.basic-container {
  position: relative;
}
.s-search {
  height: 57px;
  position: absolute;
  top: 14px;
  width: 100%;
  display: flex;
  align-items: center;
}
.s-logo {
  width: 56px;
  height: 57px;
  margin-right: 12px;
}
.s-title {
  height: 57px;
  font-size: 33px;
  color: #ffffff;
}
.s-input {
  height: 44px;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
