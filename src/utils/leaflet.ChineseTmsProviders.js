/*
 * @Author: siwenfeng
 * @Date: 2019-11-27 17:27:58
 * @LastEditTime: 2019-11-27 18:05:27
 * @Description: this is ....
 */
/* eslint-disable */ 
L.TileLayer.ChinaProvider = L.TileLayer.extend({

  initialize: function (type, options) { // (type, Object)
    var providers = L.TileLayer.ChinaProvider.providers;

    var parts = type.split('.');

    var providerName = parts[0];
    var mapName = parts[1];
    var mapType = parts[2];

    var url = providers[providerName][mapName][mapType];
    options.subdomains = providers[providerName].Subdomains;

    L.TileLayer.prototype.initialize.call(this, url, options);
  }
});

L.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map: "http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
      Annotion: "http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}",
    },
    Satellite: {
      Map: "http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}",
      Annotion: "http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}",
    },
    Terrain: {
      Map: "http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}",
      Annotion: "http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}",
    },
    Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
  },

  GaoDe: {
    Normal: {
      Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
    },
    Satellite: {
      Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
    },
    Subdomains: ["1", "2", "3", "4"]
  },

  Google: {
    Normal: {
      Map: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
    },
    Satellite: {
      Map: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
    },
    Subdomains: []
  },

  Geoq: {
    Normal: {
      Map: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
      Color: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}",
      PurplishBlue: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      Gray: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
      Warm: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
      Cold: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}",
      Custom: "http://192.168.11.152:7080/PBS/rest/services/GoogleMapsElevation/MapServer/tile/{z}/{y}/{x}",
      BaseMap: "http://192.168.12.113:6080/arcgis/rest/services/3clear_basemap/MapServer/tile/{z}/{y}/{x}",
      BoundMap: "http://192.168.12.113:6080/arcgis/rest/services/3clear_boundary/MapServer/tile/{z}/{y}/{x}",
      LabelMap: "http://192.168.12.113:6080/arcgis/rest/services/3clear_label/MapServer/tile/{z}/{y}/{x}",
      test: "http://192.168.11.152/arcgis/rest/services/FJDistrict/MapServer",
      TestWarm: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
      homeMap: "http://192.168.12.113:6080/arcgis/rest/services/PurplishBlueWorld/MapServer/tile/{z}/{y}/{x}",
    },
    Subdomains: []

  }
};

export function chinaProvider(type, options) {
  return new L.TileLayer.ChinaProvider(type, options);
};
