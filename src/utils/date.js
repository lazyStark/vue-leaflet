/*
 * @Author: siwenfeng
 * @Date: 2019-11-06 18:10:14
 * @LastEditTime: 2019-11-27 16:17:44
 * @Description: this is ....
 */
/* eslint-disable */
export const calcDate = (date1, date2) => {
  var date3 = date2 - date1;

  var days = Math.floor(date3 / (24 * 3600 * 1000))

  var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数  
  var hours = Math.floor(leave1 / (3600 * 1000))

  var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数  
  var minutes = Math.floor(leave2 / (60 * 1000))

  var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数  
  var seconds = Math.round(date3 / 1000)
  return {
    leave1,
    leave2,
    leave3,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}
/**
 * 日期格式化
 */
export function dateFormat(date) {
  let format = 'yyyy-MM-dd hh:mm:ss';
  if (date != 'Invalid Date') {
    var o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length == 1 ? o[k] :
          ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }
  return '';

}
export function dateToString(date, fmt) {
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
export function getWeek(date) {
  let week = '';
  if (date.getDay() === 1) {
    week = '一'
  } else if (date.getDay() === 2) {
    week = '二'
  } else if (date.getDay() === 3) {
    week = '三'
  } else if (date.getDay() === 4) {
    week = '四'
  } else if (date.getDay() === 5) {
    week = '五'
  } else if (date.getDay() === 6) {
    week = '六'
  } else {
    week = '日'
  }
  return week;
}
/**
 * string转date格式
 * @returns {Date} yyyyMMddHHmm
 */
export function stringtoDate(str) {
  // 正则 去除所有非数字字符
  str = str.replace(/[^0-9]+/g, '');
  let year = Number(str.substr(0, 4));
  let month = Number(str.substr(4, 2));
  let day = Number(str.substr(6, 2));
  let hour = Number(str.substr(8, 2));
  let min = Number(str.substr(10, 2));
  let reDate = new Date();
  if (month === 0) month = 1;
  if (day === 0) day = 1;
  reDate.setFullYear(year);

  // 实际月份减一
  reDate.setMonth(month - 1, 1);

  reDate.setDate(day);
  reDate.setHours(hour);
  reDate.setMinutes(min);
  reDate.setSeconds(0);
  return reDate;
}

/**
 * 时间加减对应的函数
 * @param interval
 * @param number
 * @param date
 * @returns {Date}
 */
export function dateAdd(date, interval, number) {
  let date1 = new Date();
  date1.setTime(date.getTime());
  let k = {
    'y': 'FullYear',
    'M': 'Month',
    'd': 'Date',
    'h': 'Hours',
    'm': 'Minutes',
    's': 'Seconds'
  };
  let n = {
    'q': 3,
    'w': 7
  };
  eval('date1.set' + k[interval] + '(date1.get' + k[interval] + '()+' + ((n[interval] || 1) * number) + ')');
  return date1;
}
/**
 * 小于10以下添加0
 * @param num
 * @returns num
 */
export function addZero(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}
/**
 * 用于格式化时间
 * @param fmt
 * @returns {*}
 * @constructor
 */
export function format(date, fmt) {
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
/**
 * table 动态头部处理
 * data:[]
 * */
export function tableHeader(data) {
  let dataArray = [];
  for (let i = 0; i < data.length; i++) {
    let dataObject = {};
    if (data[i] === 'null' || data[i] === null) {
      dataObject.prop = 'name' + i;
      dataObject.label = '';
    } else {
      dataObject.prop = 'name' + i;
      dataObject.label = data[i];
    }
    dataArray.push(dataObject);
  };
  return dataArray;
}
/**
 * table 数据处理
 * data:[]
 * */
export function dataProcess(data) {
  let dataObject = {};
  for (let i = 0; i < data.length; i++) {
    let namekey = 'name' + i;
    if (data[i] === 'null' || data[i] === null) {
      dataObject[namekey] = '';
    } else {
      if (typeof (data[i]) === 'number') {
        dataObject[namekey] = data[i].toFixed(3);
      } else {
        dataObject[namekey] = data[i];
      }

    }
  };
  return dataObject;
}
/**
 * 根据后台返回数据将数据以等级分级
 * @param data
 */
export function getSeriesData(data, element, timetype) {
  var series = []

  var ArrayData = []
  for (var i = 0; i < 6; i++) {
    ArrayData[i] = {}
    ArrayData[i].type = 'scatter'
    if (i === 0) {
      ArrayData[i].name = '优'
      ArrayData[i].color = '#4bdb57'
    } else if (i === 1) {
      ArrayData[i].name = '良'
      ArrayData[i].color = '#eccd00'
    } else if (i === 2) {
      ArrayData[i].name = '轻度'
      ArrayData[i].color = '#ff7e00'
    } else if (i === 3) {
      ArrayData[i].name = '中度'
      ArrayData[i].color = '#e63c1b'
    } else if (i === 4) {
      ArrayData[i].name = '重度'
      ArrayData[i].color = '#b60064'
    } else {
      ArrayData[i].name = '严重'
      ArrayData[i].color = '#7e0123'
    }

    ArrayData[i].data = []
  }

  for (var i = 0; i < data.length; i++) {
    var subdata = data[i]
    var value = subdata[element]
    var levelcolor = getPollColor(element, value, timetype)
    var seriesdata = {}
    if (timetype === 'day') {
      seriesdata.x = fxUtil(subdata['wind16direction'])
    } else {
      seriesdata.x = subdata['winddirection']
    }
    seriesdata.y = subdata['windspeed']
    seriesdata.element = value
    ArrayData[levelcolor.level].data.push(seriesdata)
  }

  // 放在series对象中
  for (var i = 0; i < 6; i++) {
    series.push(ArrayData[i])
  }
  console.log(series)
  return series
}
