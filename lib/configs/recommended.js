/*
 * @Author: DivinerWJ 2574114945@qq.com
 * @Date: 2024-01-25 10:45:12
 * @LastEditors: DivinerWJ 2574114945@qq.com
 * @LastEditTime: 2024-01-25 15:28:56
 * @FilePath: /custom-eslintrc/lib/configs/recommended.js
 * @Description: 
 */

module.exports = {
  extends: require.resolve('./base'),
  rules: {
    'vue-hare/no-v-for-index-as-key': 'error',
  }
}
