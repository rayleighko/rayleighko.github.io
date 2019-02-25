// Based on prism.js okaidai theme
import React from 'react'
import { Global } from '@emotion/core'

export default () => (
  <Global
    styles={{
      'code[class*="language-"],pre[class*="language-"]': {
        background: 'none',
        textShadow: '0 1px rgba(0, 0, 0, 0.3)',
        fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'break-all',
        wordWrap: 'break-word',
        lineHeight: 1.5,
        tabSize: 4,
        hyphens: 'none',
      },

      'pre[class*="language-"]': {
        color: '#f8f8f2',
        background: '#272822',
        margin: '.5em 0',
      },

      ':not(pre) > code[class*="language-"]': {
        whiteSpace: 'normal',
        wordBreak: 'break-all',
        wordWrap: 'break-word',
      },

      '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
        color: 'slategray',
      },

      '.token.punctuation': {
        color: '#f8f8f2',
      },

      '.namespace': {
        opacity: '.7',
      },

      '.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted': {
        color: '#f92672',
      },

      '.token.boolean, .token.number': {
        color: '#ae81ff',
      },

      '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
        color: '#a6e22e',
      },

      '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable': {
        color: '#f8f8f2',
      },

      '.token.atrule, .token.attr-value, .token.function': {
        color: '#e6db74',
      },

      '.token.keyword': {
        color: '#66d9ef',
      },

      '.token.regex, .token.important': {
        color: '#fd971f',
      },

      '.token.important, .token.bold': {
        fontWeight: 'bold',
      },

      '.token.italic': {
        fontStyle: 'italic',
      },

      '.token.entity': {
        cursor: 'help',
      },
    }}
  />
)
