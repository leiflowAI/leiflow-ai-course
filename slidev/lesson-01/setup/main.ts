import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  if (typeof document === 'undefined')
    return

  // Chrome 自动翻译会把 Slidev 的无障碍提示文字改写并暴露到画面上。
  document.documentElement.lang = 'zh-CN'
  document.documentElement.translate = false
  document.body.classList.add('notranslate')

  const meta = document.createElement('meta')
  meta.name = 'google'
  meta.content = 'notranslate'
  document.head.appendChild(meta)
})
