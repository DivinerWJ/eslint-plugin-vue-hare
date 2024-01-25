/*
 * @Author: DivinerWJ 2574114945@qq.com
 * @Date: 2024-01-25 10:44:10
 * @LastEditors: DivinerWJ 2574114945@qq.com
 * @LastEditTime: 2024-01-25 10:47:31
 * @FilePath: /custom-eslintrc/lib/configs/base.js
 * @Description: 
 */

module.exports = {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['vue-hare'],
}
