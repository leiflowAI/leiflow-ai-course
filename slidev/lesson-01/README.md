# LeiFlow AI 第 1 课 Slidev

《从会问到会造：把 AI 变成你的个人生产系统》的配套演示项目。

当前为视觉第二版：50 页短句推进型结构，使用大字号、宽留白、电影感隐喻图与逐步揭示动画。真实软件截图和录屏仍按 A01—A24 编号留有替换位置。

## 本地运行

建议使用 Node.js 24 LTS。Slidev 官方最低要求为 Node.js 20.12，但部分当前依赖不支持奇数版本 Node.js。

```bash
npm install
npm run dev
```

## 构建与导出

```bash
npm run build
npm run export:pdf
npm run export:pptx
```

Slidev 导出的 PPTX 以整页图片为主，正式演示优先使用浏览器中的 Slidev 播放模式。

本项目只处理本人准备或可信来源的图片、视频和录屏。若未来部署为公开网站，发布前重新执行 `npm audit` 并复核 Slidev 上游依赖。

## 文件说明

- `slides.md`：演示正文和讲者备注；
- `style.css`：全局视觉样式；
- `components/AssetPlaceholder.vue`：待补素材占位组件；
- `素材清单.md`：A01 至 A24 的素材规格和脱敏要求；
- `public/assets/visual-v2/`：已生成并纳入项目的统一风格隐喻图；
- `public/assets/` 其他位置：后续补入 A01—A24 的真实截图和录屏。

## 演示方式

- 空格或右方向键：逐项揭示内容；
- 左方向键：退回上一步；
- `O`：总览；
- `P`：演讲者模式。

动画是叙事的一部分。正式演示优先使用浏览器中的 Slidev，不建议把 PPTX 作为主播放文件。

课程定稿位于外层项目的 `课程文稿/` 入口中。演示稿只提炼屏幕内容，不复制完整演讲稿。
