import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import createHljsTheme from '@kangc/v-md-editor/lib/theme/hljs'

// highlightjs
import hljs from 'highlight.js'
import html from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('vue', html)

import type MakedownIt from 'markdown-it'

const hljsTheme = createHljsTheme({
  Hljs: hljs,
})
hljsTheme.extend((md: MakedownIt) => {
  // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
  // md.set(option).use(plugin);
})

VMdPreview.vMdParser.theme(hljsTheme)
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'

VMdPreview.use(createCopyCodePlugin())

import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css'

VMdPreview.use(createTodoListPlugin())

import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn'

VMdPreview.use(createKatexPlugin())

export default VMdPreview
