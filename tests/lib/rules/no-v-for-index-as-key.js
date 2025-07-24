/*
 * @Author: DivinerWJ
 * @Date: 2024-01-23 23:25:41
 * @LastEditors: DivinerWJ 2574114945@qq.com
 * @LastEditTime: 2024-01-25 15:25:50
 * @Description:
 * @FilePath: /custom-eslintrc/tests/lib/rules/no-v-for-index-as-key.js
 */
/**
 * @fileoverview disallow using v-for index as key
 * @author JayW
 */
'use strict'

const rule = require('../../../lib/rules/no-v-for-index-as-key'),
  RuleTester = require('eslint').RuleTester

const { testConfig } = require('../config.js')
const ruleTester = new RuleTester(testConfig)
ruleTester.run('no-v-for-index-as-key', rule, {
  valid: [
    {
      code: `
      <template>
        <div>
          <a-badge v-for="(item, index) in items" :key="item.id">
            <p>{{item}}</p>
          </a-badge>
        </div>
      </template>
      
      <script>
      export default {
      };
      </script>
      `,
    },
    // 测试template元素不需要key（应该通过）
    {
      code: `
      <template>
        <div>
          <template v-for="(item, index) in items">
            <div :key="item.id">{{item}}</div>
          </template>
        </div>
      </template>
      
      <script>
      export default {};
      </script>
      `,
    },
    // 测试slot元素不需要key（应该通过）
    {
      code: `
      <template>
        <div>
          <slot v-for="(item, index) in items">
            <div :key="item.id">{{item}}</div>
          </slot>
        </div>
      </template>
      
      <script>
      export default {};
      </script>
      `,
    },
    // 测试transition元素不需要key（应该通过）
    {
      code: `
      <template>
        <div>
          <transition v-for="(item, index) in items">
            <div :key="item.id">{{item}}</div>
          </transition>
        </div>
      </template>
      
      <script>
      export default {};
      </script>
      `,
    }
  ],
  invalid: [
    {
      code: `
      <template>
        <div>
          <a-badge v-for="(item, index) in items" :key="index">
            <p>{{item}}</p>
          </a-badge>
        </div>
      </template>
      
      <script>
      export default {
      };
      </script>
      `,
      errors: [{ message: "Do not use v-for index as key in v-for loops." }],
    },
    {
      code: `
      <template>
        <div>
          <div v-for="(item, index) in items" :key="index">
            <p>{{item}}</p>
          </div>
        </div>
      </template>
      
      <script>
      export default {
      };
      </script>
      `,
      errors: [{ message: 'Do not use v-for index as key in v-for loops.' }]
    },
    {
      code: `
      <template>
        <div>
          <div v-for="(item, index) in items" :key="index">
            <p>{{item}}</p>
          </div>
        </div>
      </template>
      
      <script setup lang="ts">
      </script>
      `,
      errors: [{ message: 'Do not use v-for index as key in v-for loops.' }]
    }
  ]
})
