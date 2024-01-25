/*
 * @Author: DivinerWJ
 * @Date: 2024-01-23 23:13:39
 * @LastEditors: DivinerWJ 2574114945@qq.com
 * @LastEditTime: 2024-01-25 15:24:53
 * @Description: 
 * @FilePath: /custom-eslintrc/lib/index.js
 */
/**
 * @fileoverview disallow using v-for index as key
 * @author JayW
 */
"use strict";

const requireIndex = require("requireindex");

// import all rules in lib/rules
const rules = requireIndex(__dirname + "/rules");

module.exports = {
  rules,
  configs: {
    recommended: require('./configs/recommended'),
  },
  processors: {
    '.vue': require('eslint-plugin-vue/lib/processor')
  },
}
