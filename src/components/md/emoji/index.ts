import emojiJson from './emoji.json'
import creator from '@kangc/v-md-editor/es/plugins/emoji/creator'
import mdEmojiPlugin from 'markdown-it-emoji'
import parserCreator from '@kangc/v-md-editor/es/plugins/emoji/parser-creator'

import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'

export default creator({
  emojiJson,
  parser: parserCreator(mdEmojiPlugin),
})
