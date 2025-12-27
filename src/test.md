# 1

::: tip
dsa
:::

$$\sum_{i=1}^n a_i=0$$

**粗体**
_斜体_
~~删除线~~

> 引用

- 无序列表

1. 有序列表
   1.1. 有序列表

| column1  | column2  | column3  |
| -------- | -------- | -------- |
| content1 | content2 | content3 |

- [x] xx

[链接](http://)

`code`

![Description](./favicon.ico)

## 2

### 3

#### 4

```vue
<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <v-md-editor :include-level="[1, 2, 3, 4, 5, 6]" v-model="text" height="400px"></v-md-editor>
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
