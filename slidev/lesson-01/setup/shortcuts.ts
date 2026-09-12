import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav, shortcuts) => {
  return shortcuts.map((shortcut) => {
    // Slidev 默认把上下方向键解释为“整页跳转”，会略过 v-click 动画。
    // 这套演示统一为逐步前进 / 后退，避免现场误按后闪过整页内容。
    if (shortcut.name === 'next_down')
      return { ...shortcut, fn: nav.next }

    if (shortcut.name === 'prev_up')
      return { ...shortcut, fn: nav.prev }

    return shortcut
  })
})
