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
  <div class="playback-hint">空格 / 右方向键 / 点击画面右侧：逐步播放</div>
</div>

<!--
开场先看人，不念标题。
这是内部分享，不是专家授课。我只是先踩了一圈坑，回来汇报路况。
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

---
class: statement paper-stage
transition: slide-up
---

<div class="micro-label ink">先换脑子</div>
<div class="statement-main">今天不教大家<br><span class="strike-soft">背按钮</span></div>

<div v-click class="statement-turn">按钮会搬家，工具会换代。</div>
<div v-click class="statement-answer">真正要带走的是：一套工作方式。</div>

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

---
class: section-stage dark-stage
transition: slide-up
---

<div class="section-count">01</div>
<div class="micro-label orange">认知层</div>
<h1>别只让 AI<br>替你干活</h1>
<div class="section-tagline">先让它扩展你的边界。</div>

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

---
class: stage dark-stage
---

<div class="micro-label orange">概念 → 地图</div>
<h1 class="stage-title">先让 AI 帮你<br>搭一张学习地图</h1>

<div class="demo-frame">
  <AssetPlaceholder id="A01" label="AI 时代学习地图生成器" hint="现场填入“保险金信托”或团队熟悉的真实主题" dark />
</div>

<div class="demo-cue">2 MIN · 主演示</div>

---
class: stage dark-stage
---

<div class="micro-label orange">第零世界 · Zeroth World</div>
<h1 class="stage-title">真正需要警惕的<br>不是新名词</h1>

<div class="video-stage">
  <AssetPlaceholder id="A02" label="WSJ × Dario Amodei 原始访谈" hint="35—50 秒；字幕保留 nightmare / decoupled / a really bad world" dark />
</div>

<div v-click class="bottom-punch">而是生产力红利，最后变成能力鸿沟。</div>

<!--
明确口头说明：这是情景推演，不是现实统计。
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

---
class: section-stage dark-stage
transition: slide-up
---

<div class="section-count">02</div>
<div class="micro-label orange">行动层</div>
<h1>别只聊天<br>开始生产</h1>
<div class="section-tagline">把一个真实问题，做成能反复使用的东西。</div>

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

---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">主演示 · 5—8 分钟</div>
<h1 class="stage-title">只走一条完整链路</h1>

<div class="demo-frame tall">
  <AssetPlaceholder id="A03" label="LeiFlow 助手脱敏演示 / 90 秒备用录屏" hint="本周计划 → 推荐名单 → 邀约话头 → 记录结果 → 面谈提醒" dark />
</div>

<div class="data-todo">待补：使用周数 · 每周节省时间 · 推荐数量 · 实际采用比例</div>

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

---
class: stage dark-stage
---

<div class="micro-label orange">我的 AI 产物墙</div>
<h1 class="stage-title compact-title">不一定成熟，但都不是练习题</h1>

<div class="asset-wall">
  <AssetPlaceholder id="A04" label="个人网站" compact dark />
  <AssetPlaceholder id="A05" label="公众号工作流" compact dark />
  <AssetPlaceholder id="A06" label="港股研究 Skill" compact dark />
  <AssetPlaceholder id="A07" label="团险话术生成器" compact dark />
  <AssetPlaceholder id="A08" label="资产配置工具" compact dark />
  <AssetPlaceholder id="A09" label="每日打卡工具" compact dark />
  <AssetPlaceholder id="A10" label="Git 学习手册" compact dark />
  <AssetPlaceholder id="A11" label="写作训练系统" compact dark />
  <AssetPlaceholder id="A12" label="与峰叔做的视频" compact dark />
</div>

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

---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">现场演示 · 4 分钟</div>
<h1 class="stage-title">同一个文件<br>换软件，内容还在</h1>

<div class="demo-frame tall">
  <AssetPlaceholder id="A13" label="课程文件夹 + Markdown + AGENTS.md / SKILL.md" hint="普通文本打开 → VMark / Obsidian 打开 → 解释它是载体，不是 AI 本身" dark />
</div>

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
  <AssetPlaceholder id="A14" label="终端执行前后对比" hint="提前放大字体；隐藏用户名、敏感路径和任何密钥" dark />
</div>

---
class: section-stage dark-stage
transition: slide-up
---

<div class="section-count">03</div>
<div class="micro-label orange">资产层</div>
<h1>别让结果<br>用完就丢</h1>
<div class="section-tagline">验证、保存、复用，才开始变成资产。</div>

---
class: statement dark-stage center-stage
---

<div class="micro-label orange">先把丑话说前面</div>

<div class="big-sentence warning-sentence">
  <span v-motion :initial="{ opacity: 0, scale: .8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 620 } }">全信 AI，</span><br>
  <span v-click class="glow-line">还不如不用 AI。</span>
</div>

<div v-click class="stage-note">它能起草，但不能替你承担发布责任。</div>

---
class: stage light-stage
---

<div class="micro-label ink">我自己吃过的亏</div>
<h1 class="stage-title ink">AI 的错<br>最后会署上你的名字</h1>

<div class="mistake-grid">
  <div v-click class="mistake-card"><span>视频号</span><b>文案出了问题</b><small>峰叔专业而且眼尖，当场看出来了</small></div>
  <div v-click class="mistake-card hot"><span>公众号</span><b>数字乱用了</b><small>评论和嘲讽可没有“AI 代写”免责条款</small></div>
</div>

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

---
class: stage dark-stage demo-slide
---

<div class="micro-label orange">现场演示 · 3 分钟</div>
<h1 class="stage-title">故意埋一个错<br>看它能不能揪出来</h1>

<div class="demo-frame tall">
  <AssetPlaceholder id="A15" label="Grill 成功找错 / 未找错两组结果" hint="发现了，是能力；没发现，也说明不能只靠自检" dark />
</div>

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
  <AssetPlaceholder id="A16" label="GitHub 仓库与版本对比" hint="公开可见不等于可以随便商用；使用前看许可证" dark />
</div>

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

---
class: stage dark-stage
---

<div class="micro-label orange">几个小伙伴真正关心的例子</div>
<h1 class="stage-title compact-title">AI 不替你负责<br>但可以把你的方法变成系统</h1>

<div class="case-grid">
  <div v-click><b>股票研究</b><span>整理公开信息，不保证收益</span><small>A17 · 待补图</small></div>
  <div v-click><b>公众号 / 视频号</b><span>训练表达，积累内容资产</span><small>A18 · 待补图</small></div>
  <div v-click><b>个人网站</b><span>建立自己的数字根据地</span><small>A19 · 待补图</small></div>
  <div v-click><b>微信小程序</b><span>解决身边一个小问题</span><small>A24 · 待补图</small></div>
  <div v-click><b>写小说 / 出书</b><span>先造一套写作引擎</span><small>下一步</small></div>
</div>

<!--
备用截图：A17 股票研究框架；A18 内容流程；A19 网站；A24 写作引擎。
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

---
class: cinema visual-left
---

<div class="photo-bg" style="background-image:url('/assets/visual-v2/intern-keys.png')"></div>
<div class="photo-scrim"></div>

<div class="visual-copy">
  <div class="micro-label orange">最小权限</div>
  <h1>别让实习生开会议室<br>顺手把全家钥匙都给他</h1>
  <p v-click>AI 只需要一份稿，就只给它稿件目录。</p>
  <div class="asset-tag">A20 · 待补 WorkBuddy 授权截图</div>
</div>

---
class: stage dark-stage
---

<div class="micro-label orange">我的日常工具位</div>
<h1 class="stage-title">每件工具，只给一个职位</h1>

<div class="tool-role-grid">
  <div v-click><b>Typeless</b><span>把话变成字</span><small>A21</small></div>
  <div v-click><b>Obsidian</b><span>把材料变成库</span><small>A22</small></div>
  <div v-click><b>VMark</b><span>把长文写清楚</span><small>A23</small></div>
  <div v-click class="wide"><b>Codex / Claude Code / WorkBuddy</b><span>把项目真正做出来</span></div>
</div>

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

---
class: stage dark-stage center-stage
---

<div class="micro-label orange">Q & A · 现场共创</div>
<h1 class="qa-title">拿一个真问题上来</h1>
<div v-click class="qa-subtitle">我们不讨论“AI 将来会怎样”<br>我们现场看它今天能不能干活。</div>

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
