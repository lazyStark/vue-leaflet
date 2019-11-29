<!--
 * @Author: siwenfeng
 * @Date: 2019-11-27 17:30:49
 * @LastEditTime: 2019-11-29 14:22:41
 * @Description: this is ....
 -->
<template>
  <div class="lmap-map" id="lmap-map">
    <div class="s-full">
      <div class="screenfull" id="screenId"></div>
    </div>
    <div class="m-type">
      <el-radio-group v-model="mapType" size="mini" @change="changeMap">
        <el-radio-button label="地形"></el-radio-button>
        <el-radio-button label="影像"></el-radio-button>
        <el-radio-button label="深夜"></el-radio-button>
      </el-radio-group>
    </div>
    <div id="lmap" class="lmap"></div>
  </div>
</template>

<script>
/* eslint-disable */

import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { chinaProvider } from "@/utils/leaflet.ChineseTmsProviders";

export default {
  name: "lmap",
  data() {
    return {
      map: undefined,
      satelliteLayer: undefined,
      zoom: 11,
      center: L.latLng(39.90580236343341, 116.39759923261742),
      isFullscreen: false,
      vectorLayer: undefined,
      btn: undefined,
      mapList: [
        {
          url:
            "http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
          // "http://mt2.google.cn/vt/lyrs=y&scale=2&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}",
          title: "影像"
        },
        {
          url:
            "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
          title: "夜晚"
        },
        {
          url:
            "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
          title: "地形"
        }
      ],
      mapType: "地形"
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  methods: {
    initMap() {
      this.pointMakerIconLayer = L.layerGroup([]);
      // 高德影像图
      this.satelliteLayer = chinaProvider("GaoDe.Satellite.Map", {
        maxZoom: 16,
        minZoom: 4
      });
      this.map = L.map("lmap", {
        minZoom: 4,
        maxZoom: 16,
        center: this.center,
        zoom: this.zoom,
        layers: [this.satelliteLayer],
        fullscreenControl: false,
        crs: L.CRS.EPSG3857,
        zoomControl: true,
        attributionControl: false
      });
      this.vectorLayer = L.tileLayer(this.mapList[2].url, {
        maxZoom: 16,
        minZoom: 4,
        pane: "shadowPane"
      }).addTo(this.map);
    },
    /**
     * 全屏事件
     */
    screenfull() {
      let fullarea = document.getElementById("lmap-map");
      if (this.fullscreen) {
        // 退出全屏
        this.btn.style.backgroundImage = "url('img/bg/ofull.png')";
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // 进入全屏
        this.btn.style.backgroundImage = "url('img/bg/o-close.png')";
        if (fullarea.requestFullscreen) {
          fullarea.requestFullscreen();
        } else if (fullarea.webkitRequestFullScreen) {
          fullarea.webkitRequestFullScreen();
        } else if (fullarea.mozRequestFullScreen) {
          fullarea.mozRequestFullScreen();
        } else if (fullarea.msRequestFullscreen) {
          // IE11
          fullarea.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    buttoncli() {
      this.btn = document.getElementById("screenId");
      this.btn.addEventListener("click", this.screenfull, false);
    },
    changeMap(val) {
      if (val === "影像") {
        this.vectorLayer.setUrl(this.mapList[0].url);
      } else if (val === "深夜") {
        this.vectorLayer.setUrl(this.mapList[1].url);
      } else {
        this.vectorLayer.setUrl(this.mapList[2].url);
      }
    },
    updateMakerLayer(geoJson) {
      this.removeMakerLayer();
      this.pointMakerIconLayer = L.geoJSON(geoJson, {
        pointToLayer: this.pointToLayer,
        onEachFeature: (feature, layer) => {
          layer.bindPopup(this.popupDlg.bind(this, feature.properties), {
            maxWidth: "600px",
            maxHeight: "300px",
            keepInView: true
          });
        }
      }).addTo(this.map);
    },
    pointToLayer(feature, latLng) {
      let icon;
      let imgSrc;
      if (feature.properties.aqilevel === "1") {
        imgSrc = "/img/bg/m-high.png";
      } else if (feature.properties.aqilevel === "2") {
        imgSrc = "/img/bg/m-medium.png";
      } else {
        imgSrc = "/img/bg/m-normal.png";
      }
      icon = L.divIcon({
        html: `<div class="mp-info"><img src= ${imgSrc} class="m-normal"><p class="mp-title">${feature.properties.staName}</p></div>`,
        iconAnchor: [7, 7],
        iconSize: [13, 13]
      });
      return L.marker(latLng, { icon: icon });
    },
    removeMakerLayer() {
      if (this.pointMakerIconLayer !== null) {
        if (this.map.hasLayer(this.pointMakerIconLayer)) {
          this.map.removeLayer(this.pointMakerIconLayer);
          this.pointMakerIconLayer = null;
        }
      }
    },
    popupDlg(feature) {
      const { staName } = feature;
      let mapEle = window.document.getElementById("lmap");
      let popupBox = document.createElement("div");
      let innerHtml = `<div class="popup-box">
        <p >${staName}</p>
      </div>`;
      popupBox.setAttribute("id", "popupId"); //创建弹出盒子
      mapEle.appendChild(popupBox);
      popupBox.innerHTML = innerHtml;
      return popupBox;
    }
  },
  created() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  mounted() {
    this.buttoncli();
  },
  beforeDestroy() {
    this.btn.removeEventListener("click", this.screenfull, false);
    console.log("解除监听");
  }
};
</script>
<style >
#lmap .leaflet-div-icon {
  border: 0;
  background: none;
}
#lmap .leaflet-popup-content-wrapper {
  width: 420px;
  height: 280px;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 25px 23px 25px 24px;
  background-color: #fff;
  opacity: .8;
}
#lmap .m-normal {
  display: inline-block;
  width: 38px;
  height: 40px;
  vertical-align: middle;
}
.mp-info {
  width: 140px;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.mp-title {
  vertical-align: middle;
  width: 100px;
  display: inline-block;
  box-sizing: border-box;
  padding: 2px 4px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  background: #409eff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
}
</style>
<style lang="scss" scoped>
#lmap {
  width: 100%;
  height: 100%;
  position: relative;
}
.s-full {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 1110;
  width: 32px;
  height: 32px;
}
.screenfull {
  height: 32px;
  background-image: url("/img/bg/ofull.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.m-type {
  position: absolute;
  top: 12px;
  right: 66px;
  z-index: 1110;
}
</style>
