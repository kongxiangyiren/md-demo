<script setup lang="ts">
import { ref, watch } from 'vue'
import test from './test.md?raw'
import md from './md.md?raw'
const text = ref('')
text.value = test

import theme from 'juejin-markdown-themes'
const q = new URL(window.location.href).searchParams

const zT = ref(q.get('zt') || Object.keys(theme)[0])

const modules = import.meta.glob('/node_modules/highlight.js/styles/*.css', {
  eager: true,
  query: '?url',
  import: 'default',
})
// console.log(modules)

const highlightThemes: string[] = []
for (let path in modules) {
  const name = path.replace(/(\.css)$/i, '').replace('/node_modules/highlight.js/styles/', '')
  highlightThemes.push(name)
}
const hT = ref(q.get('ht') || 'github')
function getThemeUrl() {
  // 请注意，这不包括子目录中的文件
  const url = new URL(
    `../node_modules/juejin-markdown-themes/dist/${zT.value}.min.css`,
    import.meta.url,
  ).href
  console.log(`juejin-markdown-themes/dist/${zT.value}.min.css`)

  document.getElementById('md-theme-url')?.remove()

  document.head.innerHTML += `<link id="md-theme-url" rel="stylesheet" href="${url}">`

  if (
    zT.value &&
    theme[zT.value] &&
    theme[zT.value]?.highlight &&
    highlightThemes.includes(theme[zT.value]?.highlight!)
  ) {
    hT.value = theme[zT.value]?.highlight!
  } else {
    hT.value = 'github'
  }
}
getThemeUrl()
watch(zT, (newValue) => {
  getThemeUrl()
})

function getHUrl() {
  // 请注意，这不包括子目录中的文件
  const url = new URL(`../node_modules/highlight.js/styles/${hT.value}.css`, import.meta.url).href

  console.log(`highlight.js/styles/${hT.value}.css`)

  document.getElementById('h-theme-url')?.remove()
  document.head.innerHTML += `<link id="h-theme-url" rel="stylesheet" href="${url}">`
}
getHUrl()

watch(hT, (newValue) => {
  getHUrl()
})

import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/abbott.css'
import 'codemirror/theme/abcdef.css'
import 'codemirror/theme/ambiance-mobile.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/ayu-dark.css'
import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/bespin.css'
import 'codemirror/theme/blackboard.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/colorforth.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/duotone-dark.css'
import 'codemirror/theme/duotone-light.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/elegant.css'
import 'codemirror/theme/erlang-dark.css'
import 'codemirror/theme/gruvbox-dark.css'
import 'codemirror/theme/hopscotch.css'
import 'codemirror/theme/icecoder.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/isotope.css'
import 'codemirror/theme/juejin.css'
import 'codemirror/theme/lesser-dark.css'
import 'codemirror/theme/liquibyte.css'
import 'codemirror/theme/lucario.css'
import 'codemirror/theme/material-darker.css'
import 'codemirror/theme/material-ocean.css'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/mbo.css'
import 'codemirror/theme/mdn-like.css'
import 'codemirror/theme/midnight.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/moxer.css'
import 'codemirror/theme/neat.css'
import 'codemirror/theme/neo.css'
import 'codemirror/theme/night.css'
import 'codemirror/theme/nord.css'
import 'codemirror/theme/oceanic-next.css'
import 'codemirror/theme/panda-syntax.css'
import 'codemirror/theme/paraiso-dark.css'
import 'codemirror/theme/paraiso-light.css'
import 'codemirror/theme/pastel-on-dark.css'
import 'codemirror/theme/railscasts.css'
import 'codemirror/theme/rubyblue.css'
import 'codemirror/theme/seti.css'
import 'codemirror/theme/shadowfox.css'
import 'codemirror/theme/solarized.css'
import 'codemirror/theme/ssms.css'
import 'codemirror/theme/the-matrix.css'
import 'codemirror/theme/tomorrow-night-bright.css'
import 'codemirror/theme/tomorrow-night-eighties.css'
import 'codemirror/theme/ttcn.css'
import 'codemirror/theme/twilight.css'
import 'codemirror/theme/vibrant-ink.css'
import 'codemirror/theme/xq-dark.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/theme/yeti.css'
import 'codemirror/theme/yonce.css'
import 'codemirror/theme/zenburn.css'

const cT = [
  '',
  '3024-day',
  '3024-night',
  'abbott',
  'abcdef',
  'ambiance-mobile',
  'ambiance',
  'ayu-dark',
  'ayu-mirage',
  'base16-dark',
  'base16-light',
  'bespin',
  'blackboard',
  'cobalt',
  'colorforth',
  'darcula',
  'dracula',
  'duotone-dark',
  'duotone-light',
  'eclipse',
  'elegant',
  'erlang-dark',
  'gruvbox-dark',
  'hopscotch',
  'icecoder',
  'idea',
  'isotope',
  'juejin',
  'lesser-dark',
  'liquibyte',
  'lucario',
  'material-darker',
  'material-ocean',
  'material-palenight',
  'material',
  'mbo',
  'mdn-like',
  'midnight',
  'monokai',
  'moxer',
  'neat',
  'neo',
  'night',
  'nord',
  'oceanic-next',
  'panda-syntax',
  'paraiso-dark',
  'paraiso-light',
  'pastel-on-dark',
  'railscasts',
  'rubyblue',
  'seti',
  'shadowfox',
  'solarized',
  'ssms',
  'the-matrix',
  'tomorrow-night-bright',
  'tomorrow-night-eighties',
  'ttcn',
  'twilight',
  'vibrant-ink',
  'xq-dark',
  'xq-light',
  'yeti',
  'yonce',
  'zenburn',
]

function mdText(ct: string) {
  return md
    .replace(
      '<!--ts-->',
      `import 'juejin-markdown-themes/dist/${zT.value}.min.css';\nimport 'highlight.js/styles/${hT.value}.css';\n${ct === '' ? '' : "import 'codemirror/theme/" + ct + ".css';"}`,
    )
    .replace(
      '<!--tem-->',
      ct === '' ? '' : `:codemirror-config="{theme: '${ct}'}" :codemirror-style-reset="false"`,
    )
}
const c = ref(q.get('c') || '')
watch(c, (newValue) => {
  window.location.replace(
    `${window.location.origin}${window.location.pathname}?zt=${zT.value}&ht=${hT.value}&c=${newValue}`,
  )
})
</script>

<template>
  <label for="pet-select">选择主题：</label>
  <select name="pets" id="pet-select" v-model="zT">
    <option v-for="value in Object.keys(theme)" :value="value">{{ value }}</option>
  </select>
  <br />
  <label for="pet-select">选择代码高亮主题：</label>
  <select name="pets" id="pet-select" v-model="hT">
    <option v-for="value in highlightThemes" :value="value">{{ value }}</option>
  </select>
  <br />
  <label for="pet-select">选择代码主题：</label>
  <select name="pets" id="pet-select" v-model="c">
    <option v-for="value in cT" :value="value">{{ value }}</option>
  </select>

  <div style="width: 80%; margin: 0 auto">
    <v-md-editor
      :codemirror-config="
        c !== ''
          ? {
              theme: c,
            }
          : {}
      "
      :codemirror-style-reset="c !== '' ? false : true"
      :include-level="[1, 2, 3, 4, 5, 6]"
      v-model="text"
      height="400px"
    ></v-md-editor>

    <v-md-preview :text="mdText(c)"></v-md-preview>
  </div>
</template>

<style>
.v-md-pre-wrapper.copy-code-mode {
  position: relative;
}
.v-md-pre-wrapper.copy-code-mode .v-md-copy-code-btn {
  top: 10px !important;
  right: 20px !important;
  z-index: 9 !important;
}
/* 
.v-md-pre-wrapper.line-numbers-mode {
  position: relative;
  overflow: hidden;
}
.line-numbers-wrapper {
  position: absolute;
  top: 45px;
  bottom: 16px;
  left: 16px;
  z-index: 1;

  border-right: 1px solid #ddd;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 5px;
  background-color: #f8f8f8;

  padding: 0 10px;
  width: 35px;
  font-size: 18px;
  line-height: 1.75;
  text-align: right;
}

.line-numbers-wrapper span {
  color: #999;
}

.line-numbers-wrapper span:first-of-type {
  display: inline-block;
  padding-top: 14px;
}

.line-numbers-mode pre code {
  padding-left: 60px !important;
} */
</style>
