```vue
<script setup lang="ts">
<!--ts-->
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <v-md-editor <!--tem--> :include-level="[1, 2, 3, 4, 5, 6]" v-model="text" height="400px"></v-md-editor>
</template>

<style>
/** markdown顶部间距，v-green 和 vue-pro 主题请添加 */
/* .markdown-body {
  padding-top: 20px;
} */

/** 代码块复制按钮 */
.v-md-pre-wrapper.copy-code-mode {
  position: relative;
}
/** 代码块复制按钮位置，请根据主题自行修改 */
.v-md-pre-wrapper.copy-code-mode .v-md-copy-code-btn {
  top: 10px !important;
  right: 20px !important;
  z-index: 9 !important;
}

/** 代码块行号, 请根据主题自行修改 */
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
```
