/*
 * @Author: DivinerWJ 2574114945@qq.com
 * @Date: 2024-01-24 00:54:20
 * @LastEditors: DivinerWJ 2574114945@qq.com
 * @LastEditTime: 2024-01-25 15:25:07
 * @FilePath: /custom-eslintrc/lib/rules/no-v-for-index-as-key.js
 * @Description: 
 */
/**
 * @fileoverview disallow using v-for index as key
 * @author JayW
 */
"use strict";

/** @type {import('eslint').Rule.RuleModule} */

const utils = require('eslint-plugin-vue/lib/utils');

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow using v-for index as key",
      category: "Possible Errors",
      url: null,
    },
    fixable: null,
    schema: [],
    messages: {
      requireKey: "Elements in iteration expect to have 'v-bind:key' directives.",
      notUseIndex: 'Do not use v-for index as key in v-for loops.'
    }
  },

  /** @param {RuleContext} context */
  create(context) {
    /**
     * Check the given element about `v-bind:key` attributes.
     * @param {VElement} element The element node to check.
     */
    function checkKey(element, node) {
      const vForExpression = node.value.expression;
      const keyAttribute = utils.getDirective(element, 'bind', 'key');
      if (!keyAttribute) {
        context.report({
          node,
          messageId: "requireKey"
        });
      } else if (vForExpression && vForExpression.left.length > 1) {
        const indexParam = vForExpression.left[1];
        if (keyAttribute && keyAttribute.value && keyAttribute.value.expression.name === indexParam.name) {
          context.report({
            node: keyAttribute,
            messageId: "notUseIndex"
          });
        }
      }
    }

    return utils.defineTemplateBodyVisitor(context, {
      // 排除不需要key的Vue特殊元素：template, slot, transition, transition-group, keep-alive, component
      "VElement:not([name='template']):not([name='slot']):not([name='transition']):not([name='transition-group']):not([name='keep-alive']):not([name='component']) > VStartTag > VAttribute[directive=true][key.name.name='for']"(node) {
        checkKey(node.parent.parent, node)
      }
   });
  },
};
