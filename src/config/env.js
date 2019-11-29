/*
 * @Author: siwenfeng
 * @Date: 2019-11-06 17:38:34
 * @LastEditTime: 2019-11-06 17:52:55
 * @Description: this is ....
 */
// 配置编译环境和线上环境之间的切换

let baseUrl = '';
// icon图标每次修改的只是版本号
let iconfontVersion = ['567566_pwc3oottzol', '1066523_v8rsbcusj5q'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`
const env = process.env
if (env.NODE_ENV === 'development') {
  baseUrl = ``; // 开发环境地址
} else if (env.NODE_ENV === 'production') {
  baseUrl = ``; // 生产环境地址
} else if (env.NODE_ENV === 'test') {
  baseUrl = ``; // 测试环境地址
}
export {
  baseUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
