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
【讲者稿｜第 1 页｜最终定稿对应段落 1—5】
# LeiFlow｜AI 第 1 课：从会问到会造

## 把 AI 变成你的个人生产系统

> 【开场】第一分钟先看人，不要看稿。

今天我分享的题目是“从会问到会造，把 AI 变成你的个人生产系统”

大概用时在 1 小时左右，下面我们正式开始。
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
【讲者稿｜第 2 页｜最终定稿对应段落 6—10】
> 【现场互动｜5 分钟】邀请 3～4 位伙伴回答。把关键词临时记在白板或 PPT 空白页上，结尾时回来对照。

正式开始之前，我先摸个底。大家不用给标准答案，想到什么就说什么。

你理解的 AI 是什么？

你知道哪些 AI？

你用过哪些 AI？用在哪里？它帮过你什么，又坑过你什么？
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
【讲者稿｜第 3 页｜最终定稿对应段落 11—11】

今天的分享，我自信甚至有点自负地认为，至少价值一个亿——哈哈，先别鼓掌，也别找我开发票。开个玩笑。

它到底值多少，不看我今天讲得多热闹，要看你听完以后，能不能真做出一个自己天天用的东西。
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
【讲者稿｜第 4 页｜最终定稿对应段落 12—15】
## 一、这不是工具课，是一次“换脑子”

今天我不是以 AI 专家的身份来给大家上课。真论技术，我还排不上号。我只是比大家早走了半步，多折腾了一阵，也多挨了几顿 AI 的打。

有时候我走得快一点，有时候我也走歪了。但好处是：我愿意把怎么走的、哪里摔的、爬起来以后怎么想的，原原本本讲给大家听。

所以，今天不是专家授课，更像一个先踩坑的人回来汇报路况。

市面上很多 AI 课教按钮、教提示词、教今天哪个模型排名第一。这些有没有用？有用。但 AI 产品更新得太快，像商场柜台一样，今天摆一楼，明天挪三楼；按钮今天在左边，下次更新可能就跑右边去了。你辛辛苦苦背会一套操作，过几个月界面一改，又得重新找路。
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
【讲者稿｜第 5 页｜最终定稿对应段落 13—15】
今天我不想把大家训练成“熟练点按钮的人”，我更想和大家讨论三个问题：

1. 我们为什么要用 AI？
2. 怎样从“让 AI 回答问题”，走到“让 AI 帮我们生产东西”？
3. 怎样把一次性的结果，变成可以保存、改进、反复使用的个人资产？

这三个问题想明白了，你就不会天天焦虑到底该选 Codex、Claude、Kimi、WorkBuddy、豆包还是千问。工具会换，脑子里的这套工作方式不会轻易过期。
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
【讲者稿｜第 6 页｜最终定稿对应段落 16—19】
今天一共讲八个概念。我把它们装进三层楼：

- **认知层**：概念、第零世界、能力边界；
- **行动层**：生产制造、Markdown、CLI；
- **资产层**：Grill、Git / GitHub。

有几个词一听像程序员接头暗号，别怕，今天不考英语，也不考编程。它们都是纸老虎，我负责把窗户纸捅破。

先把今天最重要的一句话送给大家：
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
【讲者稿｜第 7 页｜最终定稿对应段落 20—23】
> **AI 最有价值的地方，不只是帮你更快完成原来的工作，而是让你开始做以前不会做、不能做的事，并把它沉淀成可以重复使用的系统。**

说得再短一点：

> **不是替你干一次，而是帮你长出一种新能力。**

> 【PPT 金句页】先出现“替你干一次”，再划掉；出现“长出一种新能力”。第二页再放完整金句。
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
【讲者稿｜第 8 页｜最终定稿对应段落 24—24】
## 二、认知层：别只省力气，要长本事
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
【讲者稿｜第 9 页｜最终定稿对应段落 25—30】
### 1. 概念：一个新词，就是一把新钥匙

第一个概念，就是“概念”本身。

以前我们觉得，概念不就是一个词的定义吗？但有了 AI 以后，一个新概念更像一把钥匙。以前你摸到一扇门，不知道钥匙叫什么，只能在墙边瞎转；现在只要知道一个词，就能让 AI 带你先看一眼门后面有什么。

比如你第一次听到“保险金信托”，可以马上问：

- 它是什么？
- 它解决什么问题？
- 它和普通保险、家族信托有什么区别？
- 哪些人适合，哪些人不适合？
- 初学者最容易误解什么？

问完这几轮，你当然还不能出去冒充专家，但至少不再站在门外，连门牌都看不懂。
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
【讲者稿｜第 10 页｜最终定稿对应段落 31—35】
过去进入一个陌生领域，我们要找书、找课程、找老师，再一点点拼地图。现在 AI 可以先帮你搭一张毛坯地图，你再带着问题去读、去看、去请教真正专业的人。它不能替代学习，但能让你少在荒地里绕圈。

不过这里有个“先有鸡还是先有蛋”的问题：你得先碰到那个概念，才能问它。我们不知道自己不知道什么，就连问题都编不出来。所以，多听、多看、多交流仍然重要。AI 时代不是不用读书了，而是你读得越多，能递给 AI 的钥匙越多。

分享结束后，我会送给大家一个 Markdown 文件：《AI 时代学习地图生成器》。你只要把“我想理解某个工具、技术、学科、方法或领域”，换成自己想学的东西，AI 就能先帮你搭一张学习地图。

别小看这一张地图。有地图不一定不迷路，但没地图，大概率要靠运气。

> 【现场演示｜2 分钟】把“我想理解保险金信托”或团队熟悉的主题填进学习地图生成器。
>
> 【备用截图】准备一张输入前、一张生成后的截图。现场网络掉链子时，不要跟网络谈感情，直接切截图。
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
【讲者稿｜第 11 页｜最终定稿对应段落 36—39】
### 2. 第零世界：AI 不一定淘汰你，但会放大人与人的距离

2026 年 1 月，在瑞士达沃斯世界经济论坛期间，《华尔街日报》总编辑 Emma Tucker 采访了 Anthropic CEO 达里奥·阿莫迪（Dario Amodei）。他提出了一个叫“Zeroth World Country”的假设，我们可以翻译成“第零世界国家”。

他描述的是一个需要避免的噩梦情景：如果 AI 带来的生产力和财富高度集中，未来可能出现一个大约一千万人组成的群体——约七百万人在硅谷，三百万人散布在全球。他们形成自己的高增长经济体，与其他人逐渐脱钩。整个经济增长 10% 时，这一小部分人内部可能像增长了 50%。

阿莫迪说得很清楚：这不是理想国，而是一个非常糟糕、甚至近乎反乌托邦的世界。
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
【讲者稿｜第 12 页｜最终定稿对应段落 40—46】
所以，“第零世界”不是号召大家赶紧挤进一个 AI 精英俱乐部，也不是说现在已经有一千万人过上了这种生活。它是在提醒我们：**AI 像一台能力放大器。它能放大一个人的产出，也可能把人与人之间原本不大的差距，越拉越大。**

过去两个人都不会做网站，差距可能不大；现在一个人借助 AI 一周做出网站，另一个人还在讨论“AI 到底有没有用”，几个月以后，差的就不只是一个网站了。

这有点像两个人一起站在机场的自动步道上。一个人顺着走，一个人站在旁边研究自动步道是不是噱头。刚开始只差十米，时间一长，喊都听不见了。

真正值得我们问的是：

> **当 AI 开始拉开生产力差距时，我们怎样不让自己和身边的人掉队？**

答案不是人人都去学编程，也不是必须买最贵的模型。答案是：别只围观，尽早建立与 AI 协作的能力，先解决自己的一个真实问题。

> 【视频插入点｜35～50 秒】播放 WSJ 原始访谈中“Zeroth World Country”片段，中文字幕突出“nightmare”“decoupled”“a really bad world”。
>
> 【备用素材】准备原文截图，角落标注：“情景推演，不是现实统计。”
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
【讲者稿｜第 13 页｜最终定稿对应段落 47—57】
### 3. 能力边界：别把活干完了，把自己也干没了

第三个概念是“边界”。每个人都有自己的认知边界和能力边界：知道什么、能做什么、不会什么，甚至不知道自己不知道什么。

很多人第一次用 AI，是把自己会做的事情交给它：帮我写段话、总结文章、做张图。没问题，省时间也是价值。

但有一种用法要小心：事情交出去了，结果复制回来了，中间发生了什么一概不问。久而久之，活是干完了，人也快被干没了。过去是你用 AI，最后可能变成 AI 用你的轻信完成任务。

这叫“能力卸载”。像导航一样，偶尔用是省事；如果天天从家门口到小区门口都开导航，哪天没信号，你可能连东南西北都得问保安。

我觉得 AI 更大的价值是扩展边界：

- 原来不会做网页，现在能做出自己的网站；
- 原来不敢碰小程序，现在能做出工作助手；
- 原来进入新领域不知道从哪里学，现在能先搭知识地图；
- 原来每周重复做同一件事，现在能把它做成流程和系统。

这里有个看起来反常识的判断：真正开始用 AI 后，你可能先变得更累，而不是更轻松。因为原来不会干的活，现在你敢干了；原来不敢想的东西，现在你想试了。你的工作半径突然变大，像一个人本来只打理一间屋，现在突然多了一层楼。

但这不是永远更累。系统搭好后，重复劳动会减少；省下来的时间，再去解决更值钱的问题。

所以，衡量一个人有没有真正用好 AI，别只问“今天省了几分钟”，还要问：

1. 我有没有获得过去没有的新能力？
2. 我有没有把这次经验留给下一次？
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
【讲者稿｜第 14 页｜最终定稿对应段落 58—60】
研究也说明，AI 的效果不是整齐划一的。一项涉及 5,179 名客服人员的研究发现，AI 使平均生产率提高约 14%，对新手和低技能员工的帮助约为 34%；另一项知识工作实验发现，在适合 AI 的任务里，人做得更快、质量更高，但一旦超出 AI 的能力边界，使用 AI 的人反而更容易得到错误答案。

说白了，AI 的能力不像一堵整齐的墙，而像狗啃过的篱笆：这里高，那里低。它有的题像博士，有的题像喝多了还特别自信的博士。

> 【PPT 数据页】左侧“客服：平均 +14%，新手 +34%”；右侧“边界内：更快更好；边界外：更容易出错”。页脚标明研究对象，别把一组研究讲成宇宙真理。
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
【讲者稿｜第 15 页｜最终定稿对应段落 58—60】
研究也说明，AI 的效果不是整齐划一的。一项涉及 5,179 名客服人员的研究发现，AI 使平均生产率提高约 14%，对新手和低技能员工的帮助约为 34%；另一项知识工作实验发现，在适合 AI 的任务里，人做得更快、质量更高，但一旦超出 AI 的能力边界，使用 AI 的人反而更容易得到错误答案。

说白了，AI 的能力不像一堵整齐的墙，而像狗啃过的篱笆：这里高，那里低。它有的题像博士，有的题像喝多了还特别自信的博士。

> 【PPT 数据页】左侧“客服：平均 +14%，新手 +34%”；右侧“边界内：更快更好；边界外：更容易出错”。页脚标明研究对象，别把一组研究讲成宇宙真理。
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
【讲者稿｜第 16 页｜最终定稿对应段落 61—62】
## 三、行动层：别只跟 AI 谈恋爱，要一起过日子

### 4. 生产制造：做你自己真正天天用的东西
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
【讲者稿｜第 17 页｜最终定稿对应段落 63—68】
我们以前都用 AI 做过什么？问问题、写文案、做图片、做视频，对吧？这些当然都算。

但很多时候，我们和 AI 聊得热火朝天，关掉窗口以后，电脑里什么也没有，工作也没有发生变化。那感觉很像认识了一个特别能聊的网友：天天给你提供情绪价值，就是没来帮你搬过一次家。

所以我今天想强调另一个词：**生产制造**。

这个词听起来很大，像要买地、盖厂房、上流水线。其实对普通人来说，生产制造就是：把一个真实问题，变成一个可以反复使用的东西。

它可以是一套模板、一张清单、一份知识库、一条自动化流程、一个网页、一个小工具，甚至一个小程序。

李笑来常讲“学—练—用—造”。学了不用，知识只是脑子里的库存；用了不造，每次还得从头再来。真正的跃迁，是把自己的经验造进一个东西里，让它下一次继续替你工作。
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
【讲者稿｜第 18 页｜最终定稿对应段落 69—71】
那应该造什么？别一上来就想造航空母舰。先找一颗每天扎你三次的钉子，给自己造一把锤子。

我的答案就一句：

> **做你自己真正天天用的东西。**
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
【讲者稿｜第 19 页｜最终定稿对应段落 66—71】
这个词听起来很大，像要买地、盖厂房、上流水线。其实对普通人来说，生产制造就是：把一个真实问题，变成一个可以反复使用的东西。

它可以是一套模板、一张清单、一份知识库、一条自动化流程、一个网页、一个小工具，甚至一个小程序。

李笑来常讲“学—练—用—造”。学了不用，知识只是脑子里的库存；用了不造，每次还得从头再来。真正的跃迁，是把自己的经验造进一个东西里，让它下一次继续替你工作。

那应该造什么？别一上来就想造航空母舰。先找一颗每天扎你三次的钉子，给自己造一把锤子。

我的答案就一句：

> **做你自己真正天天用的东西。**
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
【讲者稿｜第 20 页｜最终定稿对应段落 72—76】
#### 我的主案例：LeiFlow 助手

这是我自己开发的“LeiFlow 助手”微信小程序。它不是为了证明我会编程——这件事也确实证明不了——而是为了解决我每天真实面对的问题。

它按照咱们的销售流程来辅助工作：列名单—邀约—初次面谈—缔结面谈—售后服务。

比如列名单阶段，我每周会制定周计划。如果不知道列谁，LeiFlow 助手会根据我已经整理和脱敏的信息、人员标签和前期进展，按照 3721 的规则辅助推荐名单。开始邀约后，它可以生成有针对性的邀约话头；记录邀约结果后，再提醒我准备面谈素材。

过去“列谁、约谁、怎么约、怎么谈”这几个问题，经常像四个债主一样在脑子里轮番敲门。现在它还只是 V0.2，远谈不上完美，但至少我把一部分焦虑从脑子里搬进了系统里。
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
【讲者稿｜第 21 页｜最终定稿对应段落 77—80】
这就是我理解的生产制造：不再一遍遍问 AI“我该怎么办”，而是把自己的经验、规则和流程，逐渐造进一个能反复使用的东西里。

> 【主演示｜5～8 分钟】只演示一条完整链路：“本周计划 → 推荐名单 → 生成邀约话头 → 记录结果 → 面谈提醒”。千万别把每个按钮都点一遍，我们不是在做产品验收。
>
> 【数据待补】补充实际使用周数、每周节省时间、推荐名单数量和采用比例。客户姓名、电话、标签、对话全部用虚构或脱敏数据。
>
> 【备用素材】五个步骤各备一张截图，再准备一段不超过 90 秒的录屏。软件可以临场罢工，分享不能跟着罢工。

以前我虽然有一点编程底子，但薄得比指甲盖还薄。严格一点说，那都不能叫底子，最多算电脑上落过一层编程的灰。

现在因为有了 Vibe Coding——用自然语言描述需求，让 AI 协助写代码、改代码、查问题——我才敢动手，而且真做出了自己能用的东西。
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
【讲者稿｜第 22 页｜最终定稿对应段落 79—82】
以前我虽然有一点编程底子，但薄得比指甲盖还薄。严格一点说，那都不能叫底子，最多算电脑上落过一层编程的灰。

现在因为有了 Vibe Coding——用自然语言描述需求，让 AI 协助写代码、改代码、查问题——我才敢动手，而且真做出了自己能用的东西。

当然，Vibe Coding 不是“闭着眼睛让 AI 随便写”。闭着眼睛开车也叫 Vibe Driving，结果大家都知道。功能能不能用、数据安不安全、结果对不对，最终还得由使用者负责。

但它确实把“从一个念头到做出原型”的门槛，从一堵墙降成了一道坎。墙我翻不过去，坎我还迈不过去吗？
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
【讲者稿｜第 23 页｜最终定稿对应段落 83—89】
#### 我的 AI 产物墙

除了微信小程序，我还折腾了这些东西：

- 自己的网站 [leiflow.com](http://www.leiflow.com)，用来汇集工具、文章和视频；
- 公众号内容工作流，辅助完成选题、初稿、配图和排版；
- 港股公开信息分析与决策辅助 Skill；
- 团险话术生成器、资产配置分析工具；
- 每日打卡工具、Git / GitHub 学习手册；
- 写作分析与训练系统；
- 我和峰叔用即梦折腾的视频；
- 下一步准备做的写书工具引擎。

它们有的能用，有的还很粗糙，有的可能过几天又被我推翻。但没关系，自己的孩子刚出生也不会百米冲刺。先让它出生，再慢慢养。

这些东西有一个共同点：不是拿来摆造型，而是我自己真想用。

> 【PPT／截图墙】用九宫格展示。每格只放“截图＋名称＋解决的问题”，快速扫过，不逐项打开。
>
> 【公众号数据待补】标注统计区间、发布篇数、起始与当前粉丝数、单篇平均耗时；“当前 1,275 位粉丝”配同日后台截图。

公众号这件事我必须补一句：AI 可以替我干很多活，但不能替我挨骂，更不能替我承担发布责任。过去吃过亏，后面讲 Grill 时再说。
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
【讲者稿｜第 24 页｜最终定稿对应段落 90—93】
### 5. Markdown：长得朴素，但特别能扛活

下面讲一个看起来技术、其实五分钟能入门的概念：`.md`。

`.md` 是 Markdown 文件的扩展名。它和 `.txt` 一样，可以用纯文本保存内容；不同的是，Markdown 约定了一套简单的标记语法，可以表示标题、列表、加粗、引用等结构。

如果把 Word 比作一套装修好的房子，Markdown 更像一个标准集装箱：看起来没那么花哨，但结实、好搬、到哪里都容易打开。人能读，AI 也能读；今天用 Obsidian，明天换 VMark，内容还在那里，不容易被某个软件绑架。
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
【讲者稿｜第 25 页｜最终定稿对应段落 94—100】
为什么 AI 时代要了解 Markdown？因为它：

- 人能直接读；
- AI 容易处理；
- 不依赖某一个软件；
- 容易搜索、修改和版本管理；
- 很适合保存规则、知识、提示和长文稿。

很多 AI 工具会使用 `AGENTS.md`、`CLAUDE.md`、`SKILL.md` 这样的文件，保存人写给 AI 的规则或技能说明。

我原稿里为了让大家记住，说得特别猛：“掌握 `.md`，就掌握了 AI 的大脑。”这句话当比喻很带劲，当技术事实就吹过头了。AI 当然不只是 Markdown，它还有模型、代码、数据、工具、运行环境和权限。

更准确也不失劲儿的说法是：

> **Markdown 不是 AI 的大脑，但它是人和 AI 之间非常好用的一张工作台。**

你把规则、知识和要求摆在这张工作台上，人看得懂，AI 也接得住。仅仅知道这一点，就已经比只会在聊天框里打一行字，往前跨了一大步。
-->
---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">现场演示 · 4 分钟</div>
<h1 class="stage-title">同一个文件<br>换软件，内容还在</h1>

<div class="demo-frame tall">
  <img class="demo-shot" src="/assets/user-v1/a13-markdown-workbench.png" alt="Markdown 工作台截图">
</div>

<!--
【讲者稿｜第 26 页｜最终定稿对应段落 101—106】
> 【现场演示｜4 分钟】打开当前课程文件夹：展示本稿 `.md` 源文件；切换 VMark 或 Obsidian；展示一个 `AGENTS.md` 或 `SKILL.md`；最后强调“它是载体，不是 AI 本身”。

macOS 显示隐藏文件的快捷键是 `Command + Shift + .`。Windows 可以在文件资源管理器的“查看—显示”中勾选“隐藏的项目”。有些 AI 工具会建立 `.codex`、`.claude` 等配置目录，但不同工具结构不同，也不是所有对话都会自动在本地生成文件。

Markdown 常用语法就那么几个：

- 一个 `#` 是一级标题，两个 `##` 是二级标题；
- `---` 可以表示分隔线；
- 两对星号可以表示**加粗**；
- `1.` 可以建立有序列表；
- `>` 可以建立引用。

别被这些符号吓住。它们比麻将规则少多了，峰叔试一次估计就会。

所以，掌握 Markdown 不等于掌握了整个 AI，但确实得到了一种低门槛、可迁移、能积累的人机协作语言。这块“原力”，是真的。
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
【讲者稿｜第 27 页｜最终定稿对应段落 107—115】
### 6. CLI：GUI 是展厅，CLI 是车间

第六个概念是 CLI，也就是命令行界面。Mac 上常见的是终端，Windows 上常见的是 PowerShell 或命令提示符。

一看到黑窗口，大家可能本能地后退半步：这不是黑客和程序员才用的吗？先别跑，它就是一层窗户纸。

GUI，也就是图形界面，像展厅或前台：直观、漂亮、点一点就能用。CLI 更像后厨或车间：没那么好看，但文件、程序和任务可以在那里接起来，真正批量干活。

两者不是谁高级、谁淘汰谁。请客户当然去前厅，炒菜当然进后厨。你不能因为后厨不好看，就让厨师在餐桌上炒菜。

在命令行环境里：

- 文件可以被程序读取；
- 多个步骤可以组合；
- 重复工作可以批量运行；
- 不同工具可以连接；
- AI 可以在获得授权的范围内操作更完整的项目环境。

所以，CLI 的价值不是逼我们去背命令，而是让我们看到：AI 不只会坐在聊天框里回答问题，它还可以卷起袖子，到工作现场去读文件、改文件、运行任务。

能聊天的是网友，能一起干活的才是搭档。
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

<!--
【讲者稿｜第 28 页｜最终定稿对应段落 112—116】
在命令行环境里：

- 文件可以被程序读取；
- 多个步骤可以组合；
- 重复工作可以批量运行；
- 不同工具可以连接；
- AI 可以在获得授权的范围内操作更完整的项目环境。

所以，CLI 的价值不是逼我们去背命令，而是让我们看到：AI 不只会坐在聊天框里回答问题，它还可以卷起袖子，到工作现场去读文件、改文件、运行任务。

能聊天的是网友，能一起干活的才是搭档。

> 【现场演示｜3 分钟】在终端中让 AI 列出课程文件、读取一个 Markdown 文件、给出摘要。只演示三步，不现场安装，不秀复杂命令。
>
> 【备用截图】提前放大字体，隐藏用户名、敏感路径和任何密钥。终端一旦变成蚂蚁字，台下会集体假装看懂。
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
【讲者稿｜第 29 页｜最终定稿对应段落 117—118】
## 四、资产层：产物要留下，错误要拦下

### 7. Grill：全信 AI，还不如不用 AI
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

<!--
【讲者稿｜第 30 页｜最终定稿对应段落 119—123】
第七个概念，Grill。

娜姐，这个英文词是什么意思？这里可以理解为“追问、盘问、拷问”。

先把我态度最鲜明的一句话拍在这里：

> **如果你全信 AI，那还不如不用 AI。**

这句话严格讲当然有点猛，但我就是希望大家记住。因为 AI 最危险的时候，不是它老老实实说“我不知道”，而是它不知道，却说得比知道还像知道。
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

<!--
【讲者稿｜第 31 页｜最终定稿对应段落 124—135】
它可能没有故意骗你，但你照样可能被骗。它不会脸红，也不会在引用一个不存在的数据时突然咳嗽两声提醒你。

所以，拿到一个重要结果以后，可以顺手再发一句：

> **Grill yourself to improve, not to tear yourself down.**<br>
> 检查并挑战你刚才的回答，目的是改进，而不是全部推翻。

这不是魔法咒语。让 AI 自己检查，就像让写完作业的人再检查一遍：通常有用，但不能保证把所有错都找出来。它只是给我们加一道便宜、简单、随手能做的检查。

不想记英文，就记这句中文：

> **请检查刚才的回答：哪里可能错了，哪些数字要核实，重要依据在哪里？**

对我们这群保险代理人来说，先别一上来学复杂的验证工程。先养成两个动作：**重要内容，多问一遍；关键数字，点开看一眼。**

我为什么对这件事这么敏感？因为挨过打。

上次我和峰叔做视频号，AI 生成的文案里有问题。好在峰叔专业、眼尖，一眼看出来了，不然发出去以后，AI 不尴尬，尴尬的是我们。

最近还有一篇公众号文章，AI 乱用了数字，引来不少评论和嘲讽。那一刻我深刻体会到：AI 写得有多快，评论区打脸就能有多快。

这两次教训让我明白一句话：

> **活可以交给 AI，责任不能外包。**
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
【讲者稿｜第 32 页｜最终定稿对应段落 125—138】
所以，拿到一个重要结果以后，可以顺手再发一句：

> **Grill yourself to improve, not to tear yourself down.**<br>
> 检查并挑战你刚才的回答，目的是改进，而不是全部推翻。

这不是魔法咒语。让 AI 自己检查，就像让写完作业的人再检查一遍：通常有用，但不能保证把所有错都找出来。它只是给我们加一道便宜、简单、随手能做的检查。

不想记英文，就记这句中文：

> **请检查刚才的回答：哪里可能错了，哪些数字要核实，重要依据在哪里？**

对我们这群保险代理人来说，先别一上来学复杂的验证工程。先养成两个动作：**重要内容，多问一遍；关键数字，点开看一眼。**

我为什么对这件事这么敏感？因为挨过打。

上次我和峰叔做视频号，AI 生成的文案里有问题。好在峰叔专业、眼尖，一眼看出来了，不然发出去以后，AI 不尴尬，尴尬的是我们。

最近还有一篇公众号文章，AI 乱用了数字，引来不少评论和嘲讽。那一刻我深刻体会到：AI 写得有多快，评论区打脸就能有多快。

这两次教训让我明白一句话：

> **活可以交给 AI，责任不能外包。**

大家先记一个最简单的三步法：

1. **问一遍**：让 AI 完成初稿；
2. **查一遍**：让 AI 找问题、列出处；
3. **人定稿**：保险、投资、健康、法律和公开发布的内容，由人最后确认。

等用熟了，再去做交叉验证、找一手来源、让两个模型互相挑刺。先学会刹车，再研究赛车空气动力学。别因为安全方法太复杂，最后连车都不上。
-->
---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">现场演示 · 3 分钟</div>
<h1 class="stage-title">故意埋一个错<br>看它能不能揪出来</h1>

<div class="demo-frame tall">
  <img class="demo-shot" src="/assets/user-v1/a15-grill-before-after.png" alt="Grill 找错前后对比">
</div>

<!--
【讲者稿｜第 33 页｜最终定稿对应段落 139—139】
> 【现场演示｜3 分钟】准备一段故意混入错误数字的保险科普文案。让 AI 初答，再输入 Grill 指令。最后强调：“找出来了，说明自检有用；没找出来，正好证明不能只靠自检。”
>
> 【备用素材】保存一次成功找错和一次没有找错的结果。无论现场是哪种结果，都有话讲。
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
【讲者稿｜第 34 页｜最终定稿对应段落 136—138】
大家先记一个最简单的三步法：

1. **问一遍**：让 AI 完成初稿；
2. **查一遍**：让 AI 找问题、列出处；
3. **人定稿**：保险、投资、健康、法律和公开发布的内容，由人最后确认。

等用熟了，再去做交叉验证、找一手来源、让两个模型互相挑刺。先学会刹车，再研究赛车空气动力学。别因为安全方法太复杂，最后连车都不上。
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
【讲者稿｜第 35 页｜最终定稿对应段落 142—145】
我们写稿子、做方案，经常出现这样的文件名：

> 最终版<br>
> 最终修改版<br>
> 最终修改版 2<br>
> 这次真的是最终版<br>
> 打死也不改最终版

最后谁也不知道哪个才是最终版。更惨的是，昨天删掉的那句话今天突然觉得特别好，却已经找不回来了。

Git 就像给项目装了一台时光机。它记录每一次重要修改，让我们知道改了什么，需要时还能回到过去。
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
【讲者稿｜第 36 页｜最终定稿对应段落 140—149】
### 8. Git / GitHub：给作品装一台时光机

第八个概念是 Git 和 GitHub。听起来更技术，但今天只讲它们能救什么命，不讲命令。

我们写稿子、做方案，经常出现这样的文件名：

> 最终版<br>
> 最终修改版<br>
> 最终修改版 2<br>
> 这次真的是最终版<br>
> 打死也不改最终版

最后谁也不知道哪个才是最终版。更惨的是，昨天删掉的那句话今天突然觉得特别好，却已经找不回来了。

Git 就像给项目装了一台时光机。它记录每一次重要修改，让我们知道改了什么，需要时还能回到过去。

我自己的网站和重要文稿都在使用 Git。事实上，这份课稿的原稿、一稿、二稿和我们的审稿对话，现在也已经进入 Git，并同步到了 GitHub 私有仓库。刚才那个“最终版 2”的笑话，至少以后不用再发生在这门课上。

GitHub 是一个托管 Git 仓库并提供协作功能的平台。上面有大量公开项目，也可以建立私有仓库。你可以学习别人的项目，也可以在许可证允许的范围内复制、修改和继续开发。

但注意：GitHub 是仓库，不是菜市场试吃区。看得见，不等于可以随便拿；能下载，也不等于能商用。使用前要看许可证、README、维护情况和安全风险。

这是我的网站仓库：[github.com/leiflowAI/leiflow-website](https://github.com/leiflowAI/leiflow-website)。
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

<!--
【讲者稿｜第 37 页｜最终定稿对应段落 150—150】
> 【现场演示｜2 分钟】打开课程文稿私有仓库或网站仓库，展示项目文件、提交历史和版本对比。重点讲“后悔药”，不教学 Git 命令。
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
【讲者稿｜第 38 页｜最终定稿对应段落 151—153】
讲完八个概念，真正的主线只有一条：

> **用概念打开认知边界，用 AI 做出真实产物，再把产物验证、保存并不断改进。**

> 【PPT 总结图】概念 → 边界 → 生产 → 验证 → 保存 → 复用。做成循环，不要做成一条死路。
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
</div><!--
真实素材：A17 股票研究框架；A18 公众号数据；A19 网站首页；A24 小程序集合。
-->

<!--
【讲者稿｜第 39 页｜最终定稿对应段落 154—174】
## 五、几个小伙伴真正关心的例子

### 1. 炒股：AI 可以帮你研究，但不会替你赔钱

舟舟提出想用 AI 炒股。说是炒股，其实首先是想更快地查询和整理股票信息：公司基本情况、公告、财报、风险因素和交易思路。

AI 很适合整理公开资料、建立研究清单、比较多种观点，也可以把分析方法做成 Skill。但它不能保证信息完整、数据实时，更不能保证收益。

如果哪个每月一两百块钱的 AI 真能保证炒股赚钱，人家还卖什么订阅？早就自己悄悄发财去了。

我做过港股公开信息分析与决策辅助 Skill。它的价值不是预测涨跌，而是减少遗漏，逼着自己每次都按同一套框架分析。最后按不按下买入键，责任还在自己的手指头上。

> 【截图展示｜不做实盘演示】展示脱敏研究框架：公司—财务—行业—风险—估值—反方观点—待核实信息。页脚注明“仅作研究方法展示，不构成投资建议”。

### 2. 公众号、视频号：AI 可以代笔，不能代你做人

我建议大家尝试做公众号或视频号，不一定为了追流量，而是为了训练表达、积累自己的内容资产。

我和峰叔都在尝试把选题、整理、初稿、配图、排版等环节自动化。这里的“自动化”不是无人负责，而是 AI 负责搬砖，人负责建筑图纸和最终验收。

你自己的经历、判断、立场、幽默，不能全让 AI 代替。否则文章可能很通顺，但把名字一换，张三李四都能发——这次二稿为什么要改，原因也在这里。

> 【流程图】想法／素材 → AI 整理 → 人补经历和判断 → Grill 检查 → 人核验数字 → 排版 → 人确认发布。

### 3. 个人网站：平台是摊位，网站是自己的门牌

这是我的网站 leiflow.com。我把工具、文章和视频放在上面，逐渐形成自己的数字根据地。

公众号、视频号像在大商场里租摊位，流量大，但规则和入口在人家手里；个人网站像自己的门牌，哪怕刚开始访客不多，东西放在哪里、怎样组织，更多由自己决定。

网站目前部署在新加坡服务器，因此不走中国大陆服务器常见的 ICP 备案流程；但网站内容、数据处理和面向用户提供的服务，仍然要根据实际情况遵守相关规则。服务器在境外，不等于人也飞到了规则之外。

> 【现场展示｜2 分钟】打开首页和最能代表你的一个工具页。准备首页全页截图作备用。

### 4. 微信小程序：别先改变世界，先解决一个麻烦

微信小程序不是只有大公司才能做。大家可以从一个很小的问题开始：每日打卡、面谈准备、家庭保单整理、活动报名、学习清单，都可以先做一个自己使用的原型。

别一上来就喊“我要改变保险行业”。先解决一个每天让你皱眉的小麻烦。能连续用一个月，就已经比一百个宏大构想值钱。

> 【PPT 提问】“如果只做一个自己天天用的小工具，你最想解决什么问题？”邀请每个人写下一句话。
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
【讲者稿｜第 40 页｜最终定稿对应段落 175—179】
### 5. 写小说、出书：我想造的不是一本书，是一条生产线

这是我的下一个打算。我想看看能不能圆自己的写书梦。

但我准备做的可能不只是一本书，而是一套辅助选题、资料整理、结构设计、写作、审稿和版本管理的写书工具引擎。

让 AI 帮我写一段，是临时找了一个枪手；和 AI 建起一套写作系统，才像有了自己的编辑部。当然，这个编辑部目前可能只有我一个人，剩下的全是硅基同事。

这就是“从会问到会造”：不只让 AI 给一次答案，而是和它一起建立一套长期工作的系统。
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
【讲者稿｜第 41 页｜最终定稿对应段落 180—185】
## 六、开始使用 AI 的几个地基条件

### 1. AI 的选择

#### 海外工具

如果真想用 AI 做复杂、需要持续迭代的东西，我个人目前常用和推荐的是 OpenAI Codex 与 Anthropic Claude Code。最近我使用 Codex 和 GPT-6 Astra 的体验很好，但这是我的使用感受，不是武林盟主榜，更不代表每个人必须照抄。

工具排行榜有点像足球联赛积分榜。第一名当然值得看，但你要踢的是自己的比赛。选择时先问三件事：

- 它能不能完成你的任务？
- 你用得顺不顺手？
- 成本和数据风险能不能接受？
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
【讲者稿｜第 42 页｜最终定稿对应段落 186—189】
使用海外工具通常会遇到几个现实门槛：

- **网络条件**：咱们团队内部都知道“梯子”是什么，我也不假装这道门槛不存在。但今天不把课变成搭建教程。具体使用要根据身份、单位规定和实际用途自行判断；公务、涉密、公司敏感环境不要使用未经批准的工具或线路。
- **账号与地区**：不同产品支持的地区不同，注册要求会变化，以官方当日说明为准。
- **订阅支付**：价格、支付方式和额度经常调整。尽量走官方支持的渠道，不要把主账号、密码和验证码交给来路不明的第三方。
- **数据安全**：客户身份、联系方式、健康资料、保单、资产情况和公司内部材料，不要直接上传到未经批准的服务。

> 【PPT 提示页】只显示四个词：网络、账号、支付、数据。具体经验口头聊，不展示节点、账号、支付凭证和搭建步骤。

我的原则是：难度高、需要长时间协作的任务，用能力更强的工具；简单重复的事情，用成本较低、访问方便的工具。买菜不用开装甲车，打硬仗也别只带水果刀。
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
【讲者稿｜第 43 页｜最终定稿对应段落 192—196】
不过给权限时，记住一个原则：**只给完成任务所必需的最小权限。**

把 AI 当成一个刚来的实习生。让它整理会议室资料，就给会议室钥匙；别图省事，把家门、保险柜和地下车库钥匙一起塞给它，再说“我相信科技”。

如果只处理一篇稿子，就只给稿件目录；如果只是演示，就使用专门的演示文件夹。完成后再看它生成、修改了哪些文件。通讯录和客户资料必须脱敏。

费用和积分变化很快，我当前使用的套餐可以作为个人经验口头介绍，但正式 PPT 上标注“截至 2026 年 9 月”，分享当天再看一次官方价格。别让一张过期价目表，毁了整堂讲认知的课。

> 【现场展示｜2 分钟】打开 WorkBuddy 的文件夹和权限界面，演示只选择课程演示目录。
>
> 【备用截图】准备文件夹选择、权限提示、生成文件位置三张图。
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
【讲者稿｜第 44 页｜最终定稿对应段落 197—209】
### 2. 配套工具

#### Typeless：嘴比手快，就让嘴先干

Typeless 是语音转文字工具。我喜欢它，不只是因为识别率不错，还因为它会整理语气词、分段和编号。

我的嘴明显比手快。以前脑子已经跑到第三段，手还堵在第一句；现在可以先“口喷”出来，再人工修改。它像先替我把一车砖卸下来，至于最后砌成什么样，还得我自己动手。

它是收费软件，具体价格和支付方式以官方为准。建议使用官方或正规授权渠道，避免来源不明的共享账号。

> 【现场演示｜1 分钟】口述一段未经整理的话，展示 Typeless 输出，再指出仍需人工检查的人名、数字和专业名词。

#### Obsidian：我的外接大脑仓库

Obsidian 很适合管理 Markdown 文件、建立个人知识库。它支持双向链接，也便于 AI 在获得授权后读取和整理。我把资料库放在 iCloud 中，在手机和电脑间同步。

它当然不是真正的大脑，不会替我思考；但至少能避免我的想法像袜子一样，洗完以后永远少一只。

#### VMark：让工具安静一点

VMark 是李笑来开发的 Markdown 编辑器，风格极简，我写长文时经常使用。网址：[vmark.app](https://vmark.app/)。

我喜欢它的原因也简单：写东西的时候，工具最好安静一点。一个编辑器如果天天比作者更有表现欲，我会嫌它吵。

> 【截图展示】三款工具各放一张界面图，只讲“语音输入—知识管理—专注写作”三个定位。
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
【讲者稿｜第 45 页｜最终定稿对应段落 210—216】
## 七、最后别只记八个词，记住一套动作

讲到这里，我们回到开头。

AI 不只是什么？不只是一个陪你聊天、替代搜索、顺便夸你问题问得很好的工具。

AI 可以是什么？可以是与你共同阅读、思考、生产、检查和积累的工作伙伴。

怎么开始？不要等学会全部功能，也别先收藏八百条提示词。先找一个每天重复出现、让你烦得最具体的问题。

我原来总结过三个凡是，确实有点夸张，但它负责把大家从岸上踹进水里：

> 凡是干事，先想到 AI；<br>
> 凡是解题，马上用 AI；<br>
> 凡是创造，依托好 AI。
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
【讲者稿｜第 46 页｜最终定稿对应段落 217—219】
光踹下水还不够，还得教大家别呛着。再加一组更稳的：

> **凡是重复任务，先想能否交给 AI；**<br>
> **凡是重要结论，必须追到证据；**<br>
> **凡是成功做过一次，尽量沉淀成可复用系统。**

第一组三个凡是负责“先用起来”，第二组负责“别乱用、别白用、别只用一次”。
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
【讲者稿｜第 47 页｜最终定稿对应段落 220—222】
最后送大家一个五字诀：

> **用—验—改—存—复用。**

先用起来，验证结果，继续修改，保存产物，下一次再复用。循环几次以后，AI 才算真正进入你的工作，而不是永远住在聊天框里，天天和你谈人生。
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
【讲者稿｜第 48 页｜最终定稿对应段落 223—223】
> 【PPT 行动页】请每个人写下：“未来七天，我要用 AI 做出的一个真实产物。”不要写“学习 AI”，要写一个能看见、能拿走、下周能展示的东西。
-->
---
class: stage dark-stage center-stage
---

<div class="micro-label orange">Q & A · 现场共创</div>
<h1 class="qa-title">拿一个真问题上来</h1>
<div v-click class="qa-subtitle">我们不讨论“AI 将来会怎样”<br>我们现场看它今天能不能干活。</div>

<!--
【讲者稿｜第 49 页｜最终定稿对应段落 224—230】
## 八、答疑与现场共创

最后，我们来解答大家的问题。也可以现场挑一个真实但不涉及客户隐私的小问题，一起看看怎样从一句模糊需求，逐渐做出一个能用的产物。

听和想都重要，但对 AI 来说，最后还是要落到一个字：**用**。

别等准备好了再开始。用 AI 这件事很像学游泳，站在岸上把自由泳理论背到第八章，入水以后照样可能喝一口。

分享只是开始。希望以后我们多交流，也多展示自己的 AI 作品。更希望大家在 AI 的帮助下，不断扩展能力边界，把保险展业里的具体问题一个个解决掉。

工具可以换，模型可以换，真正留在我们身上的，应该是越来越强的判断力、创造力和行动力。

多多赚钱，事业长虹。谢谢大家！
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
【讲者稿｜第 50 页｜最终定稿对应段落 232—235】
## 分享者备忘：正式分享前需要补齐的素材

- [ ] LeiFlow 助手完整链路的脱敏演示数据；
- [ ] LeiFlow 助手使用前后时间变化、使用周数和采用比例；
- [ ] 公众号统计起止日期、发布篇数、粉丝增长和单篇耗时；
- [ ] 公众号后台数据截图；
- [ ] “第零世界”原始访谈短视频及中文字幕；
- [ ] Markdown 文件夹、`AGENTS.md` / `SKILL.md` 示例截图；
- [ ] CLI 三步演示录屏或截图；
- [ ] Grill 成功找错与未找错各一份备用结果；
- [ ] GitHub 提交历史与版本对比截图；
- [ ] 网站首页全页截图；
- [ ] WorkBuddy 文件夹选择和权限界面截图；
- [ ] Typeless 语音输入前后对比截图；
- [ ] 所有软件价格和套餐在分享当天复核，并标注日期；
- [ ] 所有现场演示准备截图或录屏备份；
- [ ] 全部客户姓名、电话、头像、标签、对话、保单和健康资料完成脱敏。

## 数据与资料来源

1. The Wall Street Journal, *Watch: Anthropic CEO Dario Amodei From World Economic Forum*, 2026-01-20：[视频](https://www.youtube.com/watch?v=K7F6ohcBJus)
2. Erik Brynjolfsson, Danielle Li, Lindsey R. Raymond, *Generative AI at Work*, NBER Working Paper 31161：[研究页面](https://www.nber.org/papers/w31161)
3. Fabrizio Dell’Acqua et al., *Navigating the Jagged Technological Frontier*：[论文](https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf)
4. OpenAI, *GPT-6 Astra Model*：[官方模型页](https://developers.openai.com/api/docs/models/gpt-6-astra)
5. GitHub Docs, *About Git*：[官方说明](https://docs.github.com/en/get-started/using-git/about-git)
6. 国家互联网信息办公室，《人工智能生成合成内容标识办法》：[官方文件](https://www.cac.gov.cn/2025-03/14/c_1743654685899683.htm)
7. 国家金融监督管理总局，《保险销售行为管理办法》：[官方文件](https://www.nfra.gov.cn/cn/view/pages/governmentDetail.html?docId=1129945&generaltype=1&itemId=)
-->
