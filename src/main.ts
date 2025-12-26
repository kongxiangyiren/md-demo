import { createApp } from 'vue'

import App from './App.vue'
import VueMarkdownEditor from './components/md'
import VMdPreview from './components/md/preview'

const app = createApp(App)

app.use(VueMarkdownEditor)

app.use(VMdPreview)

app.mount('#app')
