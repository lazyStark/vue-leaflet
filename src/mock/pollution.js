/*
 * @Author: siwenfeng
 * @Date: 2019-11-28 17:33:27
 * @LastEditTime: 2019-11-29 12:00:20
 * @Description: this is ....
 */
import Mock from 'mockjs'
const data1 = {
  "result": "00000000",
  "msg": "success",
  "data": [
    {
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                "116.40681797148441",
                "39.883330525786555"
              ]
            },
            "properties": {
              "id": 1,
              "no2": 56,
              "staName": "景山公园",
              "pm25": 119,
              "o3": 111,
              "so2": 19,
              "aqi": 156,
              "pm10": 236,
              "staCode": "371103411",
              "primarypol": "null",
              "aqilevel": "1",
              "time": "2019-10-22 15:00:00",
              "co": 1.5
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                "116.39763593673707",
                "39.90577767315247"
              ]
            },
            "properties": {
              "id": 2,
              "no2": 37,
              "staName": "天安门广场",
              "pm25": 98,
              "o3": 155,
              "so2": 26,
              "aqi": 129,
              "pm10": 171,
              "staCode": "371103410",
              "primarypol": "null",
              "aqilevel": "3",
              "time": "2019-10-22 15:00:00",
              "co": 1.1
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                "116.39963150024415",
                "39.875031372245765"
              ]
            },
            "properties": {
              "id": 3,
              "no2": 37,
              "staName": "永定门",
              "pm25": 98,
              "o3": 155,
              "so2": 26,
              "aqi": 129,
              "pm10": 171,
              "staCode": "371103410",
              "primarypol": "null",
              "aqilevel": "2",
              "time": "2019-10-22 15:00:00",
              "co": 1.1
            }
          }
        ]
      },
      "time": "2019-10-22 15:00:00"
    }
  ]
}
const data2 = {
  "result": "00000000",
  "msg": "success",
  "data": [
    {
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                "116.40949633592612",
                "39.909933747131305"
              ]
            },
            "properties": {
              "id": 1,
              "no2": 56,
              "staName": "北京饭店",
              "pm25": 119,
              "o3": 111,
              "so2": 19,
              "aqi": 156,
              "pm10": 236,
              "staCode": "371103411",
              "primarypol": "null",
              "aqilevel": "1",
              "time": "2019-10-22 15:00:00",
              "co": 1.5
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                "116.39720333366056",
                "39.91735973105024"
              ]
            },
            "properties": {
              "id": 2,
              "no2": 37,
              "staName": "故宫博物院",
              "pm25": 98,
              "o3": 155,
              "so2": 26,
              "aqi": 129,
              "pm10": 171,
              "staCode": "371103410",
              "primarypol": "null",
              "aqilevel": "3",
              "time": "2019-10-22 15:00:00",
              "co": 1.1
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                "116.40901560089118",
                "39.926364635389014"
              ]
            },
            "properties": {
              "id": 3,
              "no2": 37,
              "staName": "中国美术馆",
              "pm25": 98,
              "o3": 155,
              "so2": 26,
              "aqi": 129,
              "pm10": 171,
              "staCode": "371103410",
              "primarypol": "null",
              "aqilevel": "2",
              "time": "2019-10-22 15:00:00",
              "co": 1.1
            }
          }
        ]
      },
      "time": "2019-10-22 15:00:00"
    }
  ]
}
export default ({ mock }) => {
  if (!mock) return;
  Mock.mock(RegExp('/poll/type'), 'post', (options) => {
    console.log('/*mock拦截成功,返回经纬度!*/')
    const { type } = JSON.parse(options.body);
    if (type === 'wu') {
      return {
        data: data1
      }
    } else {
      return {
        data: data2
      }
    }
  })
}
