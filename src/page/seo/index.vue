<!--
 * @Author: siwenfeng
 * @Date: 2019-11-27 10:09:32
 * @LastEditTime: 2019-11-29 15:36:34
 * @Description: this is ....
 -->
<template>
  <basic-container>
    <div class="s-eo">
      <div class="s-search-box">
        <div class="s-tip clearfix">
          <li
            v-for="(item, index) in pollutionList"
            :key="item"
            @click="changeBtn(index)"
            :class="{btnActive: index === indexSearch}"
          >{{item.label}}</li>
        </div>
        <div class="seo-input">
          <el-input v-model="searchVal" placeholder="请输入排污口名称或编码或行政区域等，多关键词用空格分开" size="medium"></el-input>
        </div>
        <div class="s-btn-search">
          <el-button type="primary" @click="pollTypeSearch">搜素一下</el-button>
        </div>
        <div class="s-hot">
          <span class="s-hot-item">热门查询:</span>
          <span
            class="s-hot-item"
            v-for="item in pollutionList[indexSearch].hot"
            :key="item"
          >{{item}}</span>
        </div>
      </div>
      <div class="s-map-box">
        <div class="s-map-province">
          <span class="icon-localtion">{{pollutionList[indexSearch].title}}:</span>
          <el-select v-model="provinceVal" placeholder="请选择" size="mini" @change="provinceChange">
            <el-option
              v-for="item in provinceList"
              :key="item.name"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </div>
        <div class="s-map-lmap clearfix">
          <Lmap ref="lmap" />
          <Ltable :tableData="tableData" />
        </div>
      </div>
    </div>
  </basic-container>
</template>

<script>
import Lmap from "./map";
import Ltable from "./table";
import { chinaProvince } from "./province";
import { findPollutionType } from "@/api/seo";
export default {
  name: "seo",
  components: {
    Lmap,
    Ltable
  },
  data() {
    return {
      searchVal: "",
      provinceList: chinaProvince,
      provinceVal: "北京",
      pollutionList: [
        {
          label: "查排污口",
          val: "wu",
          hot: ["珠江排污口", "黄浦江排污口", "黄浦江排污口"],
          title: '离你最近的排污口'
        },
        {
          label: "查工业园区",
          val: "park",
          hot: ["丰台工业园", "南京工业园"],
          title: '离你最近的工业园'
        },
        {
          label: "查污染源",
          val: "paiwu2",
          hot: ["苏州污染源", "山东污染源", "苏州污染源"],
          title: '离你最近的污染源'
        },
        {
          label: "查水源地",
          val: "paiwu3",
          hot: ["昌平水源地"],
          title: '离你最近的水源地'
        },
        {
          label: "查黑臭水体",
          val: "paiwu4",
          hot: ["奥体中心臭水体"],
          title: '离你最近的臭水体'
        },
        {
          label: "查断面",
          val: "paiwu5",
          hot: ["丰台断面", "北七家断面", "西直门断面", "东直门断面"],
          title: '离你最近的断面'
        }
      ],
      indexSearch: 0,
      searchType: undefined,
      tableData: []
    };
  },
  created() {
    this.searchType = this.pollutionList[this.indexSearch].val;
    this.pollTypeSearch();
  },
  methods: {
    changeBtn(index) {
      if (index !== this.indexSearch) {
        this.indexSearch = index;
        this.searchType = this.pollutionList[this.indexSearch].val;
        this.pollTypeSearch();
      }
    },
    pollTypeSearch() {
      findPollutionType(this.searchType).then(res => {
        console.log(res.data.data.data[0].data);
        let tableData = [];
        res.data.data.data[0].data.features.map(item => {
          tableData.push(item.properties);
        });
        this.tableData = tableData;
        this.$refs.lmap.updateMakerLayer(res.data.data.data[0].data);
      });
    },
    provinceChange(val) {
      let latlng = this.provinceList.filter((item) => {
        return item.code === val;
      })
      this.$refs.lmap.map.flyTo(latlng[0].latlng, 12, {
        animate: true,
        duration: 0.2
      });
    }
  }
};
</script>

<style lang="scss">
.s-btn-search {
  .el-button--primary {
    background: linear-gradient(#35d9a5, #32b7af);
    border-color: #fff;
  }
}
</style>

<style lang="scss" scoped>
.s-eo {
  // background: #fff;
}
.s-search-box {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px 40px 30px 30px;
}
.s-map-box {
  // height: 700px;
  background: #fff;
  .s-map-province {
    padding-left: 8px;
    font-size: 18px;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    .icon-localtion {
      margin-right: 46px;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 20px;
        height: 24px;
        top: 50%;
        transform: translateY(-50%);
        right: -36px;
        background-image: url("/img/bg/local.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
  .s-map-lmap {
    height: 750px;
    .lmap-map {
      float: left;
      margin-right: 10px;
      height: 100%;
      width: 75%;
      position: relative;
    }
    .lmap-table {
      overflow-x: hidden;
      overflow-y: auto;
      float: right;
      width: calc(25% - 10px);
      height: 100%;
      // background: grey;
    }
    .lmap-table::-webkit-scrollbar {
      width: 4px;
      height: 1px;
    }
    .lmap-table::-webkit-scrollbar-thumb {
      height: 20%;
      border-radius: 10px;
      background: linear-gradient(#65ace0, #4489d8);
    }
    .lmap-table::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }
  }
}
.s-tip {
  padding-left: 100px;
  margin-bottom: 16px;
  // background: greenyellow;
  li {
    height: 36px;
    width: 94px;
    text-align: center;
    line-height: 36px;
    background: #e4e4e4;
    float: left;
    margin-left: 12px;
    position: relative;
    &::after {
      position: absolute;
      -webkit-transform: rotate(143deg);
      transform: rotate(143deg);
      content: "";
      bottom: -6px;
      left: 20%;
      width: 15px;
      height: 12px;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#35d9a5),
        to(#32b7af)
      );
      background: #e4e4e4;
    }
  }
  li.btnActive {
    background: linear-gradient(#35d9a5, #32b7af);
    &::after {
      background: linear-gradient(#35d9a5, #32b7af);
    }
  }
}
.seo-input {
  display: inline-block;
  width: 80%;
  margin-right: 20px;
  margin-bottom: 10px;
}
.s-btn-search {
  display: inline-block;
}
.s-hot .s-hot-item {
  margin-right: 20px;
}
</style>
