import VueMarkdownEditor from '@kangc/v-md-editor/lib/codemirror-editor'
import '@kangc/v-md-editor/lib/style/codemirror-editor.css'
import createHljsTheme from '@kangc/v-md-editor/lib/theme/hljs'

// highlightjs
import hljs from 'highlight.js'
import html from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('vue', html)

import type MakedownIt from 'markdown-it'

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror'
// mode
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/vue/vue'
// edit
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/matchbrackets'
// placeholder
import 'codemirror/addon/display/placeholder'
// active-line
import 'codemirror/addon/selection/active-line'
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'
// style
import 'codemirror/lib/codemirror.css'

VueMarkdownEditor.Codemirror = Codemirror

const hljsTheme = createHljsTheme({
  Hljs: hljs,
})
hljsTheme.extend((md: MakedownIt) => {
  // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
  // md.set(option).use(plugin);
})

VueMarkdownEditor.vMdParser.theme(hljsTheme)

import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'

VueMarkdownEditor.use(createCopyCodePlugin())

// import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'

// VueMarkdownEditor.use(createLineNumbertPlugin())

import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css'

VueMarkdownEditor.use(createTodoListPlugin())

import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn'

VueMarkdownEditor.use(createKatexPlugin())

import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index'
import '@kangc/v-md-editor/lib/plugins/tip/tip.css'

VueMarkdownEditor.use(createTipPlugin())

export default VueMarkdownEditor
