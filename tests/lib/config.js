/*
 * @Author: DivinerWJ
 * @Date: 2024-01-23 23:59:14
 * @LastEditors: DivinerWJ 2574114945@qq.com
 * @LastEditTime: 2024-01-25 09:09:16
 * @Description: 
 * @FilePath: /custom-eslintrc/tests/lib/config.js
 */


const testConfig = {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    sourceType: 'module'
  },
}

module.exports = {
  testConfig
}