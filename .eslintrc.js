/*
 * @Author: siwenfeng
 * @Date: 2019-11-06 14:28:06
 * @LastEditTime: 2019-11-06 17:13:06
 * @Description: this is ....
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'quotes': 'off',
    'space-before-function-paren': [2, {'anonymous': 'never', 'named': 'never'}]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
