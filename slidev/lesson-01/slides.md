---
theme: default
title: LeiFlow｜AI 第 1 课：从会问到会造
info: |
  面向保险代理人小团队的内部 AI 分享。
  分享人：于雷
author: 于雷
presenter: true
transition: fade-out
aspectRatio: 16/9
canvasWidth: 980
class: cinema cover-slide
---

<div class="photo-bg photo-right" style="background-image:url('/assets/visual-v2/cover-workshop.png')"></div>
<div class="photo-scrim heavy"></div>

<div class="visual-copy cover-copy">
  <div v-motion :initial="{ opacity: 0, y: -18 }" :enter="{ opacity: 1, y: 0, transition: { duration: 650 } }" class="micro-label">LEIFLOW · AI 第 1 课</div>
  <h1 v-motion :initial="{ opacity: 0, x: -70 }" :enter="{ opacity: 1, x: 0, transition: { duration: 760, delay: 120 } }">从会问<br><span>到会造</span></h1>
  <div v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 650, delay: 360 } }" class="cover-subtitle">把 AI 变成你的个人生产系统</div>
  <div class="cover-byline">分享人：于雷</div>
</div>

<!--
开场先看人，不念标题。

这是内部分享，不是专家授课。我只是先踩了一圈坑，回来汇报路况。
-->

<!--
【讲者稿｜第 1 页】
# LeiFlow｜AI 第 1 课

分享之前，先了解了解大家对 AI 的认知情况。

1. 你理解的 AI是什么 ？
-->
---
class: stage dark-stage
---

<div class="micro-label">开场摸底 · 现场互动</div>
<h1 class="stage-title">先别急着听我讲</h1>

<div class="question-stack">
  <div v-click class="question-row"><span>01</span>你理解的 AI 是什么？</div>
  <div v-click class="question-row"><span>02</span>你用过哪些 AI？</div>
  <div v-click class="question-row"><span>03</span>它帮过你什么，又坑过你什么？</div>
</div>

<div class="stage-note">没有标准答案。先记住现在的回答。</div>

<!--
邀请 3—4 位伙伴回答，把关键词写在白板上。结尾再回来对照。
-->

<!--
【讲者稿｜第 2 页】
2. 你知道有哪些 AI ？

3. 你用了哪些 AI ？用在了哪里？获得了哪些帮助？有哪些感触？
-->
---
class: statement paper-stage
transition: slide-up
---

<div class="micro-label ink">先换脑子</div>
<div class="statement-main">今天不教大家<br><span class="strike-soft">背按钮</span></div>

<div v-click class="statement-turn">按钮会搬家，工具会换代。</div>
<div v-click class="statement-answer">真正要带走的是：一套工作方式。</div>

<!--
【讲者稿｜第 3 页】
## 一、特点与不同

虽然，今天的分享，我是以一个比在座各位早走了半步，但愿意公开自己的思考和判断过程，也愿意为自己的结论负责的人的身份给小伙伴分享的。但我还是自信甚至自负地认为，这次分享价值 1 个亿，哈哈哈！开个玩笑哈。这次分享的内容，我准备的思路不太一样，市面基本不会有，其他渠道的 AI 课也不会讲这些。因为我们基本不会讲 AI 工具是什么、怎么用，如果要精准一点的话来定义这次分享的话，我觉得应该是一次认知交流，可以算是一次关于 AI 的元认知交流，希望大家听完以后能转变一些观念，对 AI 的认知有所提高。
-->
---
class: stage dark-stage value-slide
---

<div class="micro-label orange">先说一句大话</div>

<div class="value-wrap">
  <div v-motion :initial="{ opacity: 0, scale: .55 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 700 } }" class="value-number">一个亿</div>
  <div v-click class="value-prefix">我自信，甚至有点自负地认为——</div>
  <div v-click class="value-joke">放心，今天不开发票。</div>
</div>

<!--
停一下等大家笑。价值不看我讲得多热闹，看大家之后能不能做出一个自己天天用的东西。
-->

<!--
【讲者稿｜第 4 页】
一说到观念、认知，大家可能会以为我会讲“AI 的发展史”、“AI 的必要性、重要性”等等，还真不是。我们要讲的乍一听起来好像跟 AI 不怎么搭边。但如果你真的理解和掌握了分享的内容，我想你应该不会再去烦心到底应该去选哪个 AI、到底应该怎么用 AI、到底应该用 AI 做什么。

同时，分享结束时，我猜你的观念可能已经发生了一些变化，你用 AI 的态度和方法，已经悄悄地改变了，这就是我希望大家掌握的“原力”，实现一通百通。

## 二、从概念出发
-->
---
class: stage light-stage
---

<div class="micro-label ink">今天真正讨论的事</div>
<h1 class="stage-title ink">只回答三个问题</h1>

<div class="question-stack light">
  <div v-click class="question-row"><span>01</span>我们为什么要用 AI？</div>
  <div v-click class="question-row"><span>02</span>怎样让 AI 帮我们生产东西？</div>
  <div v-click class="question-row"><span>03</span>怎样把一次结果变成个人资产？</div>
</div>

<!--

-->

<!--
【讲者稿｜第 5 页】
包袱已经丢出去了，那我们从哪里开始呢？我想从几个概念出发，先给大家分享几个概念。看看大家能理解到什么程度，看看通过这几个概念，我们是不是能够转变一下观念，提升一下认知。

### .MD
-->
---
class: stage dark-stage
---

<div class="micro-label orange">八个概念 · 三层结构</div>
<h1 class="stage-title">今天参观三层楼</h1>

<div class="floor-stack">
  <div v-click class="floor floor-1"><b>认知层</b><span>概念 · 第零世界 · 能力边界</span></div>
  <div v-click class="floor floor-2"><b>行动层</b><span>生产制造 · Markdown · CLI</span></div>
  <div v-click class="floor floor-3"><b>资产层</b><span>Grill · Git / GitHub</span></div>
</div>

<div class="stage-note">名字像程序员接头暗号。别怕，都是纸老虎。</div>

<!--
【讲者稿｜第 6 页】
第一个概念：“.md”。

我想问一下大家，你们知道“.md”这个是什么吗？
-->
---
class: statement dark-stage center-stage
---

<div class="micro-label orange">全场最重要的一句话</div>

<div class="big-sentence">
  AI 最有价值的地方，<br>
  <span v-click class="dim-line">不只是替你干一次，</span><br>
  <span v-click class="glow-line">而是让你长出一种新能力。</span>
</div>

<div v-click class="three-beats">
  <span>以前不会做</span><i>→</i><span>现在做出来</span><i>→</i><span>下次还能复用</span>
</div>

<!--
【讲者稿｜第 7 页】
我先给大家看一下这个文件夹。看到这个文件夹里都有什么？对了，是一堆以“.md”为扩展名的文件。他是一种文件格式，这个格式叫 markdown 格式，一种纯文本文件。大家应该比较熟悉“.docx”、“.xlsx”、“.pdf”、“.txt”文件，对吧？是的“.md”的底层也是一种纯文本文件格式和“.txt”是一样的。但他内嵌了标记符号、格式语法，比 txt 要高级一些。但本质还是纯文本格式，不信你手改一下扩展名，两者完全一样，只是用上专门的编辑器，美化的效果才会被显示出来。那为什么一开始我们要讲“.md”一个纯文本格式的文件呢？因为他是最最简单而高效的“人～机”通用语言，硅基生命能理解，碳基生命也能理解。硅基指的什么？就是计算机、芯片。碳基生命就是我们人类啦！所以，你说“.md”重要不重要？

而且我还要告诉大家，你掌握了“.md”文件，你就已经掌握了 AI 。为什么呢？因为任何一个 skill、任何一个 agent、任何一个 AI，他们最终的体现形式就是一个个纯文本“.md”文件。如果不太严谨，但为了便于理解，你就可以认为一个 AI 就是一个纯文本.md 文件，任何一个 AI 产生的结果就是一个纯文本.md 文件。就这么简单，我讲完这个，你们就已经知道AI最本质的东西了。大家是不是不信？

来，我打开一个文件夹，对着给大家看看就明白了。
-->
---
class: section-stage dark-stage
transition: slide-up
---

<div class="section-count">01</div>
<div class="micro-label orange">认知层</div>
<h1>别只让 AI<br>替你干活</h1>
<div class="section-tagline">先让它扩展你的边界。</div>

<!--
【讲者稿｜第 8 页】
只要你安装了 AI ，不管是 claude、openAI、kimi、workbuddy、qwen还是豆包（工作），只要产出了作品，我们把他们统一称为“产物”吧，意思就是用 AI 产出的东西，可能是一张图、一份文件、一个网页或一个程序，也可能是一堆东西。那就一定会有一个文件夹存在了你本地，有些对话不算哈，因为是沙箱，也就是纯陪你聊天，根本不干活。只要真帮你干活的 AI，帮你干出成品了，那就会产出.md 文件。当然你就是对话，没作品产出，但AI 为了认识你，仍然会默默地记下来，写进.md 文件，只不过这是重要文件，他默认的是隐藏起来，怕你不认识他，误删除了。

不信？来，我带你们看看他长啥样，怎么找到他。Mac（苹果电脑）按：shift+alt+ . 他们显示出来了（windows系统：1. 快捷键 `Win + E` 打开【文件资源管理器 / 此电脑】；2. 点顶部菜单栏 **查看**；3. 在「显示 / 隐藏」分组，勾选 **隐藏的项目**。你用的是 claude，就会看到“.claude”、你用的是 codex，就会看到“.codex”、你用 workbuddy，就会看到“workbuddy”。其实这个文件夹就是 AI 的大本营。
-->
---
class: stage light-stage
---

<div class="micro-label ink">概念</div>
<div class="key-layout">
  <div class="giant-char">钥</div>
  <div>
    <h1 class="stage-title ink">知道一个词<br>才能打开一扇门</h1>
    <div v-click class="plain-copy">概念不是定义。<br>概念是进入陌生领域的入口。</div>
  </div>
</div>

<!--
【讲者稿｜第 9 页】
好，接着我们再来看看大本营里面都是些什么？其他暂时都不用去管，最重要的是“.md”文件，claude 是 claude.md文件、codex是 agent.md 这个文件就是“全局规则”，就是你 AI 的总指挥。你们不用理解哈，知道就行，我想告诉大家的是你 AI 的总指挥就是一个“.md” 文件。大家可能都听说过的什么 skill、agent，他们不神秘，也不高深，他们全是“.md”文件。这回大家明白了吧，知道为什么一上来我就给大家讲“.md”。

那这个文件里面是什么呢？能写什么呢？我胡乱改可以吗？没问题，而且必须“行”。你想怎么改就怎么改，而且你会什么语言就用什么语言改，不管是哪国语言，AI 全认识。只要你熟练，啥都行，英语厉害，那最好了；不会英文，只会中文，没问题；一段用英语、一段用中文，还有一段用日语、韩语行不行？没问题。你只需要用自然语言表达就行，AI 全都能读懂。当然，最高效的是英语。
-->
---
class: stage dark-stage
---

<div class="micro-label orange">概念 → 地图</div>
<h1 class="stage-title">先让 AI 帮你<br>搭一张学习地图</h1>

<div class="demo-frame map-compare">
  <figure>
    <img src="/assets/user-v1/a01-learning-map-before-after-01.png" alt="学习地图报告总览页">
    <figcaption>A01 · 从一个问题开始</figcaption>
  </figure>
  <figure v-click>
    <img src="/assets/user-v1/a01-learning-map-before-after-04.png" alt="学习地图概念图页">
    <figcaption>再长出一张概念地图</figcaption>
  </figure>
</div>
<div class="demo-cue">2 MIN · 主演示</div>

<!--
【讲者稿｜第 10 页】
所以，大家看到了吧，你知道了这一点，知道了什么是“.md”，可以说已经超越至少 95% 的人了吧？是不是很简单。

当然，要想编辑这个文件，是需要专门的编辑器的，市面上很多，我比较喜欢免费和极简风格的，不想要太多多余的功能。所以，推荐大家两款：obsidian（黑曜石）、Vmark；Typora、MarkText 也可以，一个收费一个免费。纯文本文件的好处是简单，不用特别费事的去排版，简单几个符号，大概 5 分钟就能学会，然后你就集中精力写你想写的东西就行，根本不用调格式。真想要特别花哨的排版，就让 AI 搞定就行了。

我打开一个文件，给你们说一遍，估计像峰叔已经尝试过的，一次就会了。  
一个“#”是一级标题、两个“#”是二级标题，依此类推，可以一直到六级标题。  
三个“-”就是横线分割线。  
“\*\* \*\* ”就是加粗；  
“1. ”就是自排序；  
还有斜体、下划线，我都很少用。
-->
---
class: stage dark-stage
---

<div class="micro-label orange">第零世界 · Zeroth World</div>
<h1 class="stage-title">真正需要警惕的<br>不是新名词</h1>

<div class="video-stage zeroth-video">
  <img src="/assets/user-v1/a02-zeroth-world.jpg" alt="WSJ 与 Dario Amodei 访谈缩略图">
  <div class="video-overlay">
    <b>WSJ × Dario Amodei</b>
    <span>2026 World Economic Forum · 官方 YouTube</span>
  </div>
  <a class="video-link" href="https://www.youtube.com/watch?v=K7F6ohcBJus" target="_blank">打开官方视频 ↗</a>
</div>

<div v-click class="bottom-punch">而是生产力红利，最后变成能力鸿沟。</div>

<!--
明确口头说明：这是情景推演，不是现实统计。
素材来源：The Wall Street Journal 官方 YouTube，"Watch: Anthropic CEO Dario Amodei From World Economic Forum"（2026-01-20），https://www.youtube.com/watch?v=K7F6ohcBJus 。页面只链接官方原片，不内置下载视频。
-->

<!--
【讲者稿｜第 11 页】
小结一下，掌握了“.md”你就已经抓住了 AI 的大脑。可以说一个智能体就是一个MD、一个 Skill 就是一个 MD、一个产物就一个 MD、一个网页本质上也是一个 MD。所以，“.md”很重要！

好了，现在你们已经是碾压 99% 的人群了。这是一种“原力”吧！
-->
---
class: cinema visual-left
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/airport-gap.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">生产力鸿沟</div>
  <h1>别人站上了<br>移动步道</h1>
  <p v-click>你还在原地讨论：<br>这玩意儿到底算不算路。</p>
</div>

<!--
【讲者稿｜第 12 页】
### 概念

第二概念，就是“概念”本身。有了 AI 之后，概念已经不再是以前我们认知的概念啦。以前我们学习时都知道“概念”不就是一个词的定义吗？但在 AI 时代，还真不一样了，因为概念就是认知。我们常说：“人挣不到认知以外的钱”，我们都想多挣点钱，所以都想不断地提高认知。但怎样提高认知呢？以前我们会去学习，向高人学习，现在有了 AI 我告诉大家学习效率会百倍、千倍，甚至是万倍的提升。但有一个前提，你得先知道相关领域的相关概念，因为没有认知，相关领域的概念你是不知道的，你是想是想不出来的。但，一旦你知道了一个概念，问一下 AI，这个领域的大门就被你打开了，你就会快速进入一个新领域。比如，我刚才给大家讲的.md，你可以去问一下 AI ，后面我们还会讲到几个概念，你都去问一问AI，只要会问，他会给你讲得明明白白。你看，在 AI 时代，获取未知领域的概念，是不是提升认知最关键的东西呢？
-->
---
class: stage light-stage
---

<div class="micro-label ink">能力边界</div>
<h1 class="stage-title ink">用完 AI 以后<br>你会不会做更多事了？</h1>

<div class="boundary-grid">
  <div v-click class="boundary-card muted">
    <span>只交任务</span>
    <b>事情做完了</b>
    <small>人没长本事</small>
  </div>
  <div v-click class="boundary-arrow">→</div>
  <div v-click class="boundary-card hot">
    <span>共同建造</span>
    <b>事情做出来</b>
    <small>下次还能复用</small>
  </div>
</div>

<!--
【讲者稿｜第 13 页】
怎样获取相关领域的概念呢？这个没有变，还是要多听、多看、多交流，阅读量、阅读耐力在 AI 时代显然尤为关键。

分享结束后，我会送给大家一个 MD 文件《**AI 时代学习地图生成器（AI Era Learning Map Generator）**》，只要你把里面的“我想理解（工具 / 技术 / 学科 / 方法论 / 领域）”换成你想要学习的东西，AI 都会为你生成一个学习地图，辅助你在较短的时间内攻克任何一个你想了解的新领域。

### 第零世界
-->
---
class: stage dark-stage data-stage
---

<div class="micro-label orange">有用，但不是万能</div>
<h1 class="stage-title">研究给了两句人话</h1>

<div class="metric-grid">
  <div v-click class="metric">
    <b>+14%</b>
    <span>5,179 名客服<br>平均生产率</span>
  </div>
  <div v-click class="metric hot">
    <b>+34%</b>
    <span>新手与低技能员工<br>帮助更明显</span>
  </div>
  <div v-click class="metric warn">
    <b>越界</b>
    <span>看起来会做<br>反而更容易答错</span>
  </div>
</div>

<div class="source-line">Brynjolfsson et al. · Dell’Acqua et al.｜只代表对应研究对象与任务</div>

<!--
【讲者稿｜第 14 页】
下面我们接着讲第三个概念：“第零世界”。

我们都知道第一世界、第二世界、第三世界。现在有了一个“第零世界”的提法，并引进了社会上的广泛讨论。
-->
---
class: cinema visual-left
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/jagged-fence.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">JAGGED FRONTIER</div>
  <h1>AI 的边界<br>像狗啃过</h1>
  <p v-click>有些任务强得吓人。<br>有些任务一本正经地胡说八道。</p>
</div>

<!--
【讲者稿｜第 15 页】
那什么是“第零世界”呢？

“第零世界”的提法，出自于 2026 年 1 月，瑞士达沃斯世界经济论坛 《The Journal》（《华尔街日报》WSJ）的访谈，Anthropic CEO 达里奥・阿莫迪（Dario Amodei ）提出了“Zeroth World”：“由于 AI 的崛起，全世界正在浮现一个‘第零世界国度’，大约 1000 万人 —— 其中 700 万在硅谷，300 万散布全球。他们由硅谷核心从业者 + 全球分散的顶尖技术、资本、科研人群 组成，他们把前沿 AI 作为生产力杠杆，形成一套**自闭环经济循环的**独立经济体，整体宏观 GDP 增长 10%，但这个圈层内部仿佛实现 50% 的增长。这项技术的威力足以造成如此巨大的撕裂”。相关报道([https\://inf.news/en/tech/416a5e430ee361ad9092e523c6bc4020.html/4](https://inf.news/en/tech/416a5e430ee361ad9092e523c6bc4020.html/4))。核心观点：AI 可能让一小部分人获得远超传统社会分层的生产能力，形成一个与其他经济系统逐渐脱钩的高效率群体。
-->
---
class: section-stage dark-stage
transition: slide-up
---

<div class="section-count">02</div>
<div class="micro-label orange">行动层</div>
<h1>别只聊天<br>开始生产</h1>
<div class="section-tagline">把一个真实问题，做成能反复使用的东西。</div>

<!--
【讲者稿｜第 16 页】
我们知道，第一世界，指超级大国。毛主席说两个超级大国，美国和苏联。有的也说是资本主义发达国家。第二世界，指发达国家。西欧、日本、加拿大、澳大利亚。也有的是相对于资本广义而言的社会主义阵营国家。第三世界，发展中国家。不结盟、亚非拉落后国家。但不管怎样传统的第一世界、第二世界、第三世界，主要按照国家、地区、经济发展水平划分。

而新提出的“第零世界 Zeroth World”：是**跨国家的人群圈层**，不是主权国家，是靠 AI 生产力能力划分。不是你出生在哪个国家、不是你拥有多少学历、不是你使用哪个 AI 产品、而是你能不能借助 AI 处理过去无法处理的任务，并把这种能力沉淀成稳定系统。“第零世界”的本质是一个人的能力、产出和行动范围已经被 AI 大幅拓展之后，所进入的新工作现实。AI 将会塑造一个新的跨越国界的国度，想想是不是还挺吓人。当然，如果真是这样，你想进入这个国度呢，还是留在原地呢？

### 能力边界/认知边界
-->
---
class: cinema visual-left
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/chat-wont-move.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">从聊天到生产</div>
  <h1>AI 可以陪你聊<br>但不会替你搬家</h1>
  <p v-click>想法不落地，聊一万轮也只是聊天记录。</p>
</div>

<!--
【讲者稿｜第 17 页】
第四个概念，我们讲进“边界”。每个人都有自己的能力边界和认知边界。也就是一个人当前知道什么、能做什么、不会什么、甚至不知道自己不知道什么。

AI 最有价值的地方不仅仅是提高效率，而是拓展边界、扩展边界。现在大多数人用 AI 是“能力卸载”，把任务交出去，虽然工作确实轻松了，但非常容易失去理解和判断。所以，正确使用 AI 的姿势是；看看使用 AI 后，你的能力边界、认知边界是不是得到了扩展，是不是获得了新能力、新认知。这时候，你应该是更累了，而不是更轻松了。因为你的能力和认知得到拓展之后，单位时间里你可干的事儿更多了。以前不会干、干不成的事儿，现在可以干了，而且可以干成了。这才是衡量 AI 使用深度的指标。要看自己获得了什么新能力，以及能否把改进沉淀进下一次工作。形成“递归”和“自我进化”。
-->
---
class: cinema visual-left
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/nail-hammer.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">生产什么？</div>
  <h1>先别造航母<br>先钉眼前这颗钉子</h1>
  <p v-click>做你自己真正天天用的东西。</p>
</div>

<!--
【讲者稿｜第 18 页】
### 生产制造

第五个概念，生产制造。  
我想问问大家，我们之前都是怎么用 AI 的？用 AI 做过些什么事儿？ 解答问题、做图片、做视频，对吧？这些当然可以。但我想告诉大家的是“生产制造”。别忘记了，我们刚才讲到了“第零世界”他们的特点之一就高效的生产能力，GDP 增长 10%～50%。所以，我们用 AI 一定要从事生产制造。  
一说生产制造，特别容易让人觉得这个词特别大，离我们好像很远，好像只有工程师、设计师才能搞生产制造，其实不是的。李笑来就常讲“学-练-用-造”，我们不是为了学习而学习，是为了提高生产力而学习，最终的目的就是为了生产。有了 AI 的加持，会让生产制造变得轻松，我们每个人都可以进行生产制造，而且可以说就应该或者说是必须要进行生产制造。  
也只有按生产制造的标准来用 AI，你才真能用好 AI ，才能真正感受到 AI 的强大，也才能真正提升自己。  
那生产制造什么呢？  
答案是：做你自己真正天天用的东西。
-->
---
class: stage light-stage
---

<div class="micro-label ink">普通人的“生产制造”</div>
<h1 class="stage-title ink">把一个真实问题<br>变成一个可复用的东西</h1>

<div class="object-row">
  <div v-click><b>模板</b><span>下次直接改</span></div>
  <div v-click><b>清单</b><span>不再靠记性</span></div>
  <div v-click><b>流程</b><span>重复自动跑</span></div>
  <div v-click><b>工具</b><span>自己天天用</span></div>
</div>

<!--
【讲者稿｜第 19 页】
我给大家看看我最近生产制造的东西。

这是我自己开发的“LeiFlow 助手”微信小程序，专门辅助我按照咱们的销售流程：列名单-邀约-初次面谈-缔结面谈-售后服务，在每个流程上都按照我的个人习惯来辅助工作。列名单阶段，每周我会制定一个周计划，列出一周打算邀约的人，不知道列谁，LeiFlow助手会根据通讯录里人员的情况、标签以及前期工作的进展，按照 3721 的规则，自动为我推荐一批名单。有了这个小程序，没人可列的问题基本解决了，至少不再为列名单焦虑了。开始邀约后，LeiFlow 助手还会为我生成针对性的邀约话头，甚至可以直接复制转发到微信，记录邀约后，他又会及时提醒我进行面谈准备，给我提供面谈素材。现在这个版本仅仅是 V0.2，连 1.0 都还没到，我已经开始不再耽心列谁、约谁、怎么约、怎么谈的问题了。

要说以前，我虽然有一点编程的底子，但这底子浅得连指甲壳都没不过，基本可以忽略不计。但现在正是因为有了 Vibe coding---氛围编程(自然语言引导 AI 生成代码，人只关注最终功能表现，不逐行阅读、审查 AI 产出源码的开发模式)，我才敢去尝试，而且也真能做出满足自己需要的真东西。
-->
---
class: stage dark-stage
---

<div class="micro-label orange">我的主案例</div>
<h1 class="stage-title">LeiFlow 助手，不是作品<br>是我的工作系统 V0.2</h1>

<div class="flow-line">
  <div v-click><span>01</span>本周计划</div>
  <i v-click>→</i>
  <div v-click><span>02</span>推荐名单</div>
  <i v-click>→</i>
  <div v-click><span>03</span>邀约话头</div>
  <i v-click>→</i>
  <div v-click><span>04</span>记录结果</div>
  <i v-click>→</i>
  <div v-click><span>05</span>面谈提醒</div>
</div>

<div class="stage-note">不证明我会编程，只解决我每天真遇到的问题。</div>

<!--
【讲者稿｜第 20 页】
除了微信小程序，我还架了自己的网站 \[[http\://www\.leiflow\.com](http://www.leiflow.com)]  
不断地挂接自己用着不错的小工具、文章、视频等等，等于有了自己的数字资产根据地。梯子大家肯定知道，我在这上面花了不少钱，还总是不可控，总会在最关键的时候出问题，今天断明天断，找人解决费时费力。最后，干脆我自己架了一个。现在非常稳定，快一年了，国俊给我支付了 300 元现在也只用我这个。当然这个只能在咱们内部说说，不能公开讲，但我自己知道我不会拿这个去挣钱，干违规的事儿，只是满足自己学习、工作的需要，架设的成本大幅低于订阅别人的。

我的公众号文章、贴图全是自动化生成和发布的，我只是定期的提出新要求、新方向就好了。日更完全不再是不可能的事儿，保持日更的前提下，再自己创作，既是一种学习，也是一种训练。粉丝慢慢在涨。这才 2 个多月，我的公众号已经有 1275 个粉丝了。
-->
---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">主演示 · 5—8 分钟</div>
<h1 class="stage-title">只走一条完整链路</h1>

<div class="demo-frame tall assistant-demo">
  <div class="assistant-screens">
    <img src="/assets/user-v1/a03-leiflow-assistant-1.png" alt="LeiFlow 助手首页截图">
    <img v-click src="/assets/user-v1/a03-leiflow-assistant-2.png" alt="LeiFlow 助手任务结果截图">
  </div>
  <div class="assistant-demo-copy">
    <span class="asset-id">A03 · 现场主演示</span>
    <b>本周计划 → 推荐名单 → 邀约话头 → 记录结果</b>
    <small>现场打开 WorkBuddy / LeiFlow；两张截图只作断网备份。</small>
  </div>
</div>

<div class="data-todo">待补：使用周数 · 每周节省时间 · 推荐数量 · 实际采用比例</div>

<!--
【讲者稿｜第 21 页】
我还弄了港股打新的分析与决策 skill，要不是受国家 CRS 的管控，收益还是不错的。还有各种小工具，什么团险话术生成器、资产配置分析，甚至每日打卡，Git/GitHub 学习手册、写作分析与训练系统，我和峰叔还折腾用即梦生成视频，反正弄了不少东西。

其实就一条，**做你自己真正天天用的东西。**
-->
---
class: statement paper-stage
---

<div class="micro-label ink">Vibe Coding</div>
<div class="programming-line">
  以前我虽然有一点编程底子，<br>
  <span v-click class="strike-soft">浅得基本可以忽略。</span>
</div>

<div v-click class="programming-punch">说是底子，更像鞋底上粘了点编程的灰。</div>
<div v-click class="statement-answer">现在，我敢把一个想法做成能用的东西。</div>

<!--
【讲者稿｜第 22 页】
### CLI

第六个概念，CLI。这个可能略显专业，但其实就是一层窗户纸。有知道的伙伴吗？那大家是不是知道 GUI ？

GUI 是指图形界面。我们用 AI，无论是海外的还是国内的，最一开始无论是网页端还是客户端，基本全是 GUI，有个对话框，我们在对话框里与 AI 对话。他的特点是直观、美观，但缺点也很多。比如：是暗箱，喜欢刨根问底的人有时候就不知道 AI 都做了啥，做了哪些步，有点稀里糊涂的感觉；还有我们前面讲到了要生产制造，生产制造出来的产品、作品、产物，放在哪里、是什么样子，不容易看到。长时间使用之后，目录一大堆找点东西非常低效。GUI 下我还遇到过特别讨厌的问题就是中断，AI 正按照你的指令干着活呢，电脑进入睡眠状态了，AI 干的活就自动停止了。
-->
---
class: stage dark-stage
---

<div class="micro-label orange">我的 AI 产物墙</div>
<h1 class="stage-title compact-title">不一定成熟，但都不是练习题</h1>

<div class="asset-wall">
  <div class="asset-wall-card"><img src="/assets/user-v1/a04-website.png" alt="个人网站"><b>A04 · 个人网站</b></div>
  <div class="asset-wall-card live"><span class="live-badge">LIVE</span><b>A05 · 公众号工作流</b><small>现场打开 WorkBuddy</small></div>
  <div class="asset-wall-card live"><span class="live-badge">LIVE</span><b>A06 · 港股研究 Skill</b><small>现场打开研究工具</small></div>
  <div class="asset-wall-card"><img src="/assets/user-v1/a07-group-insurance.png" alt="团险话术生成器"><b>A07 · 团险话术</b></div>
  <div class="asset-wall-card"><img src="/assets/user-v1/a08-allocation-tool.png" alt="资产配置工具"><b>A08 · 资产配置</b></div>
  <div class="asset-wall-card"><img src="/assets/user-v1/a09-checkin.png" alt="每日打卡工具"><b>A09 · 每日打卡</b></div>
  <div class="asset-wall-card"><img src="/assets/user-v1/a10-git-guide.png" alt="Git 学习手册"><b>A10 · Git 手册</b></div>
  <div class="asset-wall-card"><img src="/assets/user-v1/a11-writing-system.png" alt="写作训练系统"><b>A11 · 写作训练</b></div>
  <div class="asset-wall-card live"><span class="live-badge">LIVE</span><b>A12 · 与峰叔做的视频</b><small>现场打开素材文件夹</small></div>
</div>

<!--
【讲者稿｜第 23 页】
CLI 是什么呢？是命令行。大家一定还记得 Dos 命令吧？就是那种界面。在Mac 电脑就是指“终端”，windows 叫 CMD，命令提示符 Command Prompt。大家可能会想，我又不想学计算机编程，用命令行方式也太麻烦了吧？我告诉大家还真不是。它代表一种工作方式：

- 文件可以被程序读取；
-->
---
class: cinema visual-left
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/markdown-container.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">Markdown</div>
  <h1>内容的集装箱</h1>
  <p v-click>外表不花哨，装得下、搬得走、<br>很多工具都认。</p>
</div>

<!--
【讲者稿｜第 24 页】
- 多个任务可以组合；

- 工作可以批量运行；
-->
---
class: stage light-stage
---

<div class="micro-label ink">为什么是 Markdown？</div>
<h1 class="stage-title ink">不是 AI 的大脑<br>但确实是一块好地基</h1>

<div class="verb-grid">
  <div v-click><b>人能读</b><span>纯文本</span></div>
  <div v-click><b>AI 能处理</b><span>结构清楚</span></div>
  <div v-click><b>不被锁住</b><span>跨软件迁移</span></div>
  <div v-click><b>能积累</b><span>搜索 · 修改 · 版本</span></div>
</div>

<!--
【讲者稿｜第 25 页】
- 不同工具可以连接；

- AI 可以操作一个更完整的计算机环境。
-->
---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">现场演示 · 4 分钟</div>
<h1 class="stage-title">同一个文件<br>换软件，内容还在</h1>

<div class="demo-frame tall">
  <img class="demo-shot" src="/assets/user-v1/a13-markdown-workbench.png" alt="Markdown 工作台截图">
</div>

<!-- 原稿提示：第一个概念是 .md。它本质是纯文本文件，却能被人和 AI 同时读懂。打开同一个文件夹，先用普通文本看，再用 VMark 或 Obsidian 看，说明它是载体，不是 AI 本身。 -->

<!--
【讲者稿｜第 26 页】
因此，CLI 的认知价值是让你看到：AI 不只是聊天窗口里的回答者，也可以成为工作系统中的执行者和协调者。

我给大家演示一下，什么是 CLI。然后就不多讲了，大家可以问问 AI，关键是真正用起来。

### Grill
-->
---
class: cinema gui-cli-visual
---

<div class="photo-bg" style="background-image:url('/assets/visual-v3/gui-cli-showroom-workshop.png')"></div>
<div class="photo-scrim top-bottom"></div>

<div class="visual-title">
  <div class="micro-label orange">GUI × CLI</div>
  <h1>一个像前厅，一个像后厨</h1>
</div>

<div v-click class="room-caption room-left">
  <b>GUI</b><span>直观、漂亮，适合点选与展示</span>
</div>
<div v-click class="room-caption room-right">
  <b>CLI</b><span>能连接、能批量，适合让 AI 卷起袖子干活</span>
</div>

<div v-click class="visual-bottom-line">能聊天的是网友，能一起干活的才是搭档。</div>

<!--
【讲者稿｜第 27 页】
第七个概念，Grill。

娜姐，这个英文单词是啥意思？对，是拷问。大家在用 AI 时，AI 给出结果后，一定要把这句发给他“grill yourself”，或者更准确一点：“grill yourself to improve，not to tear yourself down”。你再看看结果。反复这样你的 AI 就会越来越强。
-->
---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">现场演示 · 3 分钟</div>
<h1 class="stage-title">别教命令，只看三步</h1>

<div class="terminal-steps">
  <div v-click><span>01</span>列出课程文件</div>
  <div v-click><span>02</span>读取一份 Markdown</div>
  <div v-click><span>03</span>给出摘要</div>
</div>

<div class="demo-frame short">
  <img class="demo-shot" src="/assets/user-v1/a14-cli-demo.png" alt="终端执行前后对比">
</div>

<!-- 原稿提示：CLI 就是命令行。这里不讲命令，只展示列出课程文件、读取一份 Markdown、给出摘要三步。 -->

<!--
【讲者稿｜第 28 页】
为什么呢？因为有句话说：“如果你全信 AI，那还不如不用 AI”。在 AGI 没有正式出来之前，现在的 AI 本质上都是大语言模型，都在是海量的资料中猜你的需要，所以，幻觉、造假是会经常出现的，所以，正式的、重要的事情，一定不要全信 AI，一定要加上这一句。我是在被 AI 坑过很多次以后才开始重视这个事情的。上次和峰叔做视频号，AI 生成的文案，好在峰叔专业而且眼尖，一眼看出了问题，数据造假，否则我就发出去了，多影响形象。最近还有 1 条公众号也是给我乱用了数字，引来了不少嘲讽和评论。

所以，Grill，代表的是一种“反向拷问”机制。李笑来更苛刻，他会用两种相互 PK，而且还专门写了一个插件，相互印证。通常人会让 AI：帮我完成任务。而 Grill 的做法是继续追问：你的假设是什么？你有没有遗漏条件？你的证据在哪里？最强反例是什么？怎样证明你可能错了？简单一句grill yourself，拷问一下你自己，英文最好，中文也没问题。长一点，你就用“grill yourself to improve，not to tear yourself down”，“拷问你自己，为了改进，而非为了推翻”。核查、验证是用 AI 真正制造必不可少的一步，大家一定要有这个意识。
-->
---
class: section-stage dark-stage
transition: slide-up
---

<div class="section-count">03</div>
<div class="micro-label orange">资产层</div>
<h1>别让结果<br>用完就丢</h1>
<div class="section-tagline">验证、保存、复用，才开始变成资产。</div>

<!--
【讲者稿｜第 29 页】
### Git / GitHub

第八个概念，git 和 github。这两个概念就更加技术一点了。我也犹豫要不要讲给大家。但想了想了，虽然难懂一点，而且一开始大家可能也涉及不到，用不上。但你的头脑时要是不知道有这么个东西，说不定会走很多弯路。所以，索性还是说给大家，但不展开讲了。

git 就是一个版本管理机制，有了他就不会怕后续的修改错误，我们写稿子、做文案，经常版本 1、版本 2 的，等改的多了都不知道哪改哪没改了，万一改错了再回去，不知道怎么办。git 就能很好的解决这个问题。对于软件、编程这个就太重要了。写东西也非常重要。我现在自己的网站、写的重要的文稿全用了 git。
-->
---
class: statement dark-stage center-stage
---

<div class="micro-label orange">先把丑话说前面</div>

<div class="big-sentence warning-sentence">
  <span v-motion :initial="{ opacity: 0, scale: .8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 620 } }">全信 AI，</span><br>
  <span v-click class="glow-line">还不如不用 AI。</span>
</div>

<div v-click class="stage-note">它能起草，但不能替你承担发布责任。</div>

<!-- 原稿：为什么要把丑话说在前面？因为如果你全信 AI，那还不如不用 AI。AI 能起草，但不能替你承担发布责任。 -->

<!--
【讲者稿｜第 30 页】
github 就更重要了，他是一个开源的线上仓库。注重个人数字资产的人人都就方注册一个 github 账号。你要是想做个小工具，做个可漂亮的网站、插件，去 github上搜索，找一个类似的 fork 到本地，然后让 AI 帮你改就成了你自己的东西。github 是开源的，什么资源都有。英文书、中文书、各种各样的软件。这是我的仓库地址：[https\://github.com/leiflowAI/leiflow-website](https://github.com/leiflowAI/leiflow-website)

再具体的我就不讲了，大家去问 AI 好了。
-->
---
class: stage light-stage mistake-slide
---

<div class="micro-label ink">我自己吃过的亏</div>
<h1 class="stage-title ink">AI 的错<br>最后会署上你的名字</h1>

<div class="mistake-grid">
  <div v-click class="mistake-card"><span>视频号</span><b>文案出了问题</b><small>峰叔专业而且眼尖，当场看出来了</small></div>
  <div v-click class="mistake-card hot"><span>公众号</span><b>数字乱用了</b><small>评论和嘲讽可没有“AI 代写”免责条款</small></div>
</div>

<!-- 原稿：上次和峰叔做视频号，AI 生成的文案里有数据造假，好在峰叔专业而且眼尖，一眼看出了问题。最近还有一篇公众号乱用了数字，引来了不少嘲讽和评论。 -->

<!--
【讲者稿｜第 31 页】
好了，讲 8 个概念。不知道大家听了感受如何？我估计可能会是云里雾里的。但没关系，就是记住这 8 个词：.MD、概念、第零世界、边界、生产制造、CLI、Grill、Git / GitHub，有空了问问 AI 就行。

下面的第三部分，我想用几个实例，也是上次动意组织这次分享时，我问大家想用 AI 做什么时，大家提出来的，我想给大家带一笔，说说如果是我做，会怎么做。
-->
---
class: cinema visual-left grill-visual
---

<div class="photo-bg" style="background-image:url('/assets/visual-v3/grill-quality-gate.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">Grill · 盘问与自检</div>
  <h1>活可以交给机器<br>责任不能外包</h1>
  <div v-click class="grill-prompt">
    哪些地方可能错了？<br>
    哪些数字需要核实？<br>
    重要依据在哪里？
  </div>
  <p v-click>AI 再审一遍。<b>人做最后质检。</b></p>
</div>

<!--
【讲者稿｜第 32 页】
## 三、几个实例

### （一）炒股

舟舟提出想用 AI 炒股，说是炒股，其实就是想查询和了解相关股票的信息，公司的基本情况、股票交易的策略等等。这个其实各个 AI 都有现成的 skill。说到 skill，我突然想到了 skill、agent 这两个词大家都知道是啥吧，其实也可以直接问 AI。
-->
---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">现场演示 · 3 分钟</div>
<h1 class="stage-title">故意埋一个错<br>看它能不能揪出来</h1>

<div class="demo-frame tall">
  <img class="demo-shot" src="/assets/user-v1/a15-grill-before-after.png" alt="Grill 找错前后对比">
</div>

<!-- 原稿提示：AI 给出结果后，一定要追问：你的假设是什么？有没有遗漏条件？证据在哪里？重要内容要核查、验证，最后由人做质检。 -->

<!--
【讲者稿｜第 33 页】
如果推荐，我就推荐大家国内的你就用 workbuddy 就行了，他是腾讯的一个 AI 集成，与我们知道的什么 deepseek、kimi、openclaw、qwen、豆包，不太一样的地方是他不再仅仅是一个沙箱对话框，他是一个可以真正干活的 AI，所有的大模型都可以选择。

我打开我的 workbuddy 给大家看看。
-->
---
class: stage light-stage
---

<div class="micro-label ink">先养成一个最小习惯</div>
<h1 class="stage-title ink">重要内容，多问一遍<br>关键数字，点开看一眼</h1>

<div class="verify-steps">
  <div v-click><b>问一遍</b><span>让 AI 完成初稿</span></div>
  <div v-click><b>查一遍</b><span>找问题、列出处</span></div>
  <div v-click><b>人定稿</b><span>关键内容自己负责</span></div>
</div>

<!--
【讲者稿｜第 34 页】
### （二）公众号、视频号

首先说，我建议大家都做做公众号、视频号，不是为了流量，而是为了积累个人的数字资产。现在做公众号真的非常方便。峰说和我都已经全自动化了。既能积累资产，也是学习的一种手段。
-->
---
class: stage dark-stage
---

<div class="micro-label orange">你一定见过这种文件夹</div>
<h1 class="stage-title compact-title">“最终版”从来不是最后一版</h1>

<div class="version-stack">
  <div v-click>方案_最终版.docx</div>
  <div v-click>方案_最终修改版.docx</div>
  <div v-click>方案_最终修改版2.docx</div>
  <div v-click class="panic">方案_这个真的是最终版.docx</div>
</div>

<!--
【讲者稿｜第 35 页】
我也给大家展示一下。我用 workbuddy 全自动化生成公众号的过程。

### （三）个人网站

这是我的网站。你们也可以自己尝试做一个。自己对外的形象，也是个性化的表达。
-->
---
class: cinema visual-left
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/git-time-machine.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">Git / GitHub</div>
  <h1>给数字资产<br>装一台时光机</h1>
  <p v-click>知道改了什么。<br>也知道怎样回到过去。</p>
</div>

<!--
【讲者稿｜第 36 页】
我的网站架在新加坡，不需要备案。网址：leiflow\.com

### （四）微信小程序
-->
---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">现场演示 · 2 分钟</div>
<h1 class="stage-title">Git 不讲命令<br>只看三个位置</h1>

<div class="github-steps">
  <div v-click><span>01</span>项目文件</div>
  <div v-click><span>02</span>提交历史</div>
  <div v-click><span>03</span>前后对比</div>
</div>

<div class="demo-frame short">
  <img class="demo-shot" src="/assets/user-v1/a16-git-history.png" alt="GitHub 仓库与版本对比">
</div>

<!-- 原稿提示：Git 是版本管理机制，能知道改了什么，也能回到过去。演示项目文件、提交历史和前后对比三个位置即可。 -->

<!--
【讲者稿｜第 37 页】
这是我前面讲到的微信小程序“leiflow 助手”。大家也可以尝试用小程序来解决我们日常生活中的问题。

### （五）写小说、出书
-->
---
class: stage light-stage cycle-slide
---

<div class="micro-label ink">八个概念，其实只有一条线</div>
<h1 class="stage-title ink">从陌生，到变成自己的资产</h1>

<div class="cycle-row">
  <div v-click><b>概念</b><span>打开入口</span></div>
  <i v-click>→</i>
  <div v-click><b>边界</b><span>长出能力</span></div>
  <i v-click>→</i>
  <div v-click><b>生产</b><span>做出东西</span></div>
  <i v-click>→</i>
  <div v-click><b>验证</b><span>减少胡说</span></div>
  <i v-click>→</i>
  <div v-click><b>保存</b><span>持续改进</span></div>
</div>

<!--
【讲者稿｜第 38 页】
这是我的下一个打算，看看能不能圆了自己的梦。当然我要写的不是一本书，应该是一个写书的工具引擎。

## 四、地基条件

### （一 ）AI 的选择
-->
---
class: stage dark-stage
---

<div class="micro-label orange">几个小伙伴真正关心的例子</div>
<h1 class="stage-title compact-title">AI 不替你负责<br>但可以把你的方法变成系统</h1>

<div class="case-grid">
  <div v-click class="case-with-thumb"><img src="/assets/user-v1/a17-stock-framework.png" alt="港股研究框架"><b>股票研究</b><span>整理公开信息，不保证收益</span><small>A17 · 仅作研究框架示例</small></div>
  <div v-click class="case-with-thumb"><img src="/assets/user-v1/a18-wechat-stats.png" alt="公众号数据截图"><b>公众号 / 视频号</b><span>训练表达，积累内容资产</span><small>A18</small></div>
  <div v-click class="case-with-thumb"><img src="/assets/user-v1/a19-website-home.png" alt="个人网站首页"><b>个人网站</b><span>建立自己的数字根据地</span><small>A19</small></div>
  <div v-click class="case-with-thumb"><img src="/assets/user-v1/a24-mini-programs.png" alt="微信小程序集合"><b>微信小程序</b><span>解决身边一个小问题</span><small>A24</small></div>
  <div v-click><b>写小说 / 出书</b><span>先造一套写作引擎</span><small>下一步</small></div>
</div>

<!-- 原稿：我建议大家做公众号、视频号，不是为了流量，而是为了积累个人数字资产。网站、小程序、股票研究、写作引擎，都是把自己真正天天用的东西做出来。 -->

<!--
真实素材：A17 股票研究框架；A18 公众号数据；A19 网站首页；A24 小程序集合。
-->

<!--
【讲者稿｜第 39 页】
虽然前面我们说了不讲 AI 的使用技巧，但使用 AI 的地基条件还是要给大家说说的。

#### 1. 海外
-->
---
class: statement paper-stage center-stage
---

<div class="micro-label ink">关于写作</div>
<div class="big-sentence ink">
  用 AI 写一篇文章，<br>
  是替你抄一次作业。
</div>
<div v-click class="writing-line">用 AI 练写作，是给自己请了一个<br><b>不嫌你烦、随时在岗的陪练。</b></div>

<!--
【讲者稿｜第 40 页】
我个人推荐，你要是真的想要用 AI 来从事生产制造，做些自己真正能用起来的真东西，我极力推荐首选海外的，现阶段看 openAI 的 codex、Anthropic 的 claude code 二选一，或者两个都用最好。最近来看，就牛的当属 openAI 的 codex，GPT-6 Astra 确实太牛了。

前置条件：
-->
---
class: stage light-stage
---

<div class="micro-label ink">工具怎么选？</div>
<h1 class="stage-title ink">别先看排行榜<br>先看它能不能把活干完</h1>

<div class="tool-questions">
  <div v-click><span>01</span>它能不能完成你的任务？</div>
  <div v-click><span>02</span>你是否真的用得顺手？</div>
  <div v-click><span>03</span>成本和数据风险能否接受？</div>
</div>

<!--
【讲者稿｜第 41 页】
- 梯子。这个是海外软件的第一道门槛。大多数人全在这儿，卡在了门外。说是不合规。其实呢，是没有真懂。你要是用梯子就是想干违法的事儿，那就是违法。但你自己最清楚你要干什么，自己是什么身份。你是公务员、涉密单位，坚决别用。但都不涉及，又是为了进步，怎么能被这个吓退呢？这个不多说了。想要实干的私下找我，我一对一帮你们。

- 下载 APP。或者说为了获得 codex、claude 的账号，你需要一个海外账号。这是卡人的第二道门槛，其实也简单，你沉下心来，看看我的视频号，里面就有攻略，3 分钟搞定。

- 注册账号。下载到了 ChatGPT、Claude 后，首先要注册账号，Claude 最好用海外邮箱，比如：google 的 gmail.com，GPT 我一直用的是 QQ 邮箱。claude 注册流程里要海外地址，豆包一下就行了。
-->
---
class: stage dark-stage
---

<div class="micro-label orange">使用海外工具的现实门槛</div>
<h1 class="stage-title compact-title">这部分不装清高，也不教细节</h1>

<div class="four-words">
  <div v-click>网络</div>
  <div v-click>账号</div>
  <div v-click>支付</div>
  <div v-click class="hot">数据</div>
</div>

<div class="stage-note">梯子保留口头分享；公务、涉密、客户敏感环境不要乱用。</div>

<!--
【讲者稿｜第 42 页】
- 订阅。这个其实是最痛苦的一步。因为 claude、codex 都不能用国内的支付系统，无论是微信、支付宝还是银行卡、信用卡。但，万能的互联网，没有解决不了的问题。wildAI可以搞定一切。费用的话，两个我都用的是 Plus 版，每个月都是 24 美元左右。基本够用了。

过了这四关，你就通关了，通关后的快乐那是相当的长久。你的能力边界将会持续打开。
-->
---
class: cinema visual-left
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/intern-keys.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy permission-copy">
  <div class="micro-label orange">最小权限</div>
  <h1>别让实习生开会议室<br>顺手把全家钥匙都给他</h1>
  <p v-click>AI 只需要一份稿，就只给它稿件目录。</p>
  <div class="asset-tag">A20 · 现场打开 WorkBuddy；截图作断网备份</div>
</div>

<!--
【讲者稿｜第 43 页】
海外的特点是贵，但真的好用，适合干高难度的东西，比如：建立知识体系、开发小程序、深入交流与思考，但因为贵，也考虑 token 的用量，简单重复的事情就交给国内 AI，可以有效控制成本。至于用哪个大模型，你自己感受就行，难的事儿上最聪明的，比如：GPT-6，简单的 GPT-5 就够用了，这个大家自己搜索吧。

#### 2.国内
-->
---
class: stage dark-stage
---

<div class="micro-label orange">我的日常工具位</div>
<h1 class="stage-title">每件工具，只给一个职位</h1>

<div class="tool-role-grid">
  <div v-click class="tool-role-with-image"><img src="/assets/user-v1/a21-typeless.png" alt="Typeless 截图"><b>Typeless</b><span>把话变成字</span><small>A21</small></div>
  <div v-click class="tool-role-with-image"><img src="/assets/user-v1/a22-obsidian.png" alt="Obsidian 截图"><b>Obsidian</b><span>把材料变成库</span><small>A22</small></div>
  <div v-click class="tool-role-live"><span class="live-badge">LIVE</span><b>VMark</b><span>把长文写清楚</span><small>A23 · 现场打开</small></div>
  <div v-click class="wide"><b>Codex / Claude Code / WorkBuddy</b><span>把项目真正做出来</span></div>
</div>

<!--
【讲者稿｜第 44 页】
国内 AI，不知道大家都在用哪个，我估计豆包都在用，我也用，主要是回答临时问题，平替了过去的搜索引擎，完全免费。其实现在的豆包也分为对话和工作两项，只是大模型不能选择太多。对话就是和你聊，不干活；工作是真的能完成具体的事情了，做个 PPT、添加 skill 也是可以用的。其他的还有智谱的 GLM、Kimi的 K3、千问、DeepSeek，我个人推荐 WorkBuddy，他是腾讯的产品，与公众号、小程序比较友好，而且大模型可选，思路上也更贴近 OpenClaw，主要目的是帮你干活，所以，是你的 Buddy。

一句话带一下怎么用，最重要是选择本地文件夹和给定允许访问的权限，我一般都允许完全访问，因为电脑上也没什么重要东西，重要的东西我都存在活动硬盘，用的时候才插到电脑上。大家可以根据自己的情况来定，完全访问他就可以真的动你文件夹里的东西以及计算机运行环境。如果不指定文件夹，WorkBuddy 会根据对话的日期建立文件夹，多了就容易混乱、容易找不到东西了。

费用方面，还是要订阅的，我现在标准版 4000 积分+送的 6000 积分已经不够用了，升级了高级版，每个月 199 元。但我觉得还是值得的。不太难的东西，我都交给他干了，比如公众号自动化，他做得很好。
-->
---
class: stage dark-stage
transition: slide-up
---

<div class="micro-label orange">我原来的“三个凡是”</div>
<h1 class="stage-title compact-title">确实夸张。但我就是怕你不用。</h1>

<div class="three-rules loud">
  <div v-click>凡是干事，<b>先想到 AI。</b></div>
  <div v-click>凡是解题，<b>马上用 AI。</b></div>
  <div v-click>凡是创造，<b>依托好 AI。</b></div>
</div>

<!--
【讲者稿｜第 45 页】
### （二）工具

说完 AI 的选择，我再说说配套的效率工具软件。
-->
---
class: stage light-stage
---

<div class="micro-label ink">再加三个，负责走稳</div>
<h1 class="stage-title ink compact-title">先用起来，也别把脑子交出去</h1>

<div class="three-rules steady">
  <div v-click>凡是重复任务，<b>先想能否交给 AI。</b></div>
  <div v-click>凡是重要结论，<b>必须追到证据。</b></div>
  <div v-click>凡是成功结果，<b>沉淀成可复用系统。</b></div>
</div>

<div class="stage-note ink">第一组负责迈出第一步；第二组负责走得更远、更稳。</div>

<!--
【讲者稿｜第 46 页】
1. Typeless

是个语音转文字的软件，非常好用。识别率就不说了，关键他会帮你自动整理，去掉语气词，分段、分层加序号，写文章、发文字非常高效。直接口喷他就整理成非常不错的文字。我还专门买了一个放在桌面的麦克风，写东西直接说就行，极力推荐大家试试。不过他是收费软件，你可以去万能的淘宝买个便宜的，国俊是这么干的，否则每个月 12 美元，支持支付宝支付。
-->
---
class: cinema flywheel-visual
---

<div class="photo-bg" style="background-image:url('/assets/visual-v3/production-flywheel.png')"></div>
<div class="photo-scrim top-bottom"></div>

<div class="visual-title centered">
  <div class="micro-label orange">个人生产系统飞轮</div>
  <h1>最后只记五个字</h1>
</div>

<div v-click class="flywheel-label fly-use"><b>用</b><span>先动手</span></div>
<div v-click class="flywheel-label fly-check"><b>验</b><span>查结果</span></div>
<div v-click class="flywheel-label fly-change"><b>改</b><span>再调整</span></div>
<div v-click class="flywheel-label fly-store"><b>存</b><span>留版本</span></div>
<div v-click class="flywheel-label fly-reuse"><b>复用</b><span>下一次更快</span></div>

<div v-click class="visual-bottom-line">先用起来；验证结果；持续修改；保存下来；下次再用。</div>

<!--
【讲者稿｜第 47 页】
2. Obsidian

Markdown 编辑器，比较专业，非常适合建立知识库、知识体系。双链结构，AI 调用非常方便。我是放在了 icloud 云盘，所以，手机、电脑实时同步。免费。

3. Vmark
-->
---
class: stage light-stage action-slide
---

<div class="micro-label ink">7 天行动</div>
<h1 class="stage-title ink">别写“我要学 AI”</h1>

<div v-click class="action-question">
  只做一个你自己天天用的小工具，<br>
  <b>你最想解决什么问题？</b>
</div>

<div v-click class="action-fill">七天后，我要拿出：________________________</div>

<!--
【讲者稿｜第 48 页】
李笑来自己写的免费软件，也非常好用。极简风格，写东西我都用这个。网址：[https\://vmark.app/](https://vmark.app/)。

好了，我要分享的就是这些，可以与大家设想的不太一样，但我觉得有了 AI，我们从 what、why、how ，转变为要更加关注 what和why ，至于 how 就交给 AI 好了。
-->
---
class: stage dark-stage center-stage
---

<div class="micro-label orange">Q & A · 现场共创</div>
<h1 class="qa-title">拿一个真问题上来</h1>
<div v-click class="qa-subtitle">我们不讨论“AI 将来会怎样”<br>我们现场看它今天能不能干活。</div>

<!--
【讲者稿｜第 49 页】
送大家三个凡是。凡是干事，先想到 AI ； 凡是解题，马上用 AI ； 凡是创造，依托好 AI 。

## 五、答疑
-->
---
class: cinema visual-left closing-slide
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/swimming-theory.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">最后一句</div>
  <h1>在岸上研究一百小时<br>也学不会游泳</h1>
  <p v-click>AI 也是。<br><b>先下水，再调整姿势。</b></p>
  <div v-click class="closing-thanks">谢谢大家 · 多多赚钱 · 事业长虹</div>
</div>

<!--
结尾回到开场三个问题，邀请大家用一句话说出变化。
-->

<!--
【讲者稿｜第 50 页】
最后一个环节，我想来解答一下大家的疑问。也可以手把手帮大家解决一些实际问题。我们一起交流交流。听和想都没啥用，对于 AI 就一个字“用”。

好了，大家如果没有问题了，那今天的分享就到此结束，谢谢大家。分享只是开始，希望日后我们多交流，多多展示自己的 AI 作品，也希望在 AI 的加持下，能力边界不断扩展，保险展业问题也迎丸而解，多多赚钱、事业长虹。
-->
