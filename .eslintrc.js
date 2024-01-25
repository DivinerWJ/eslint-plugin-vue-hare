/*
 * @Author: DivinerWJ 2574114945@qq.com
 * @Date: 2024-01-23 23:13:40
 * @LastEditors: DivinerWJ 2574114945@qq.com
 * @LastEditTime: 2024-01-25 09:12:03
 * @FilePath: /custom-eslintrc/.eslintrc.js
 * @Description: 
 */
"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
  rules: {
    "node/no-extraneous-require": ["error", {
      "allowModules": ["vue-eslint-parser"]
    }]
  }
};
