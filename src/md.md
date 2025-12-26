```vue
<script setup lang="ts">
<!--ts-->
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <v-md-editor <!--tem--> :include-level="[1, 2, 3, 4, 5, 6]" v-model="text" height="400px"></v-md-editor>
</template>
```
