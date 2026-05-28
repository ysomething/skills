# skills

这是我的个人 Codex skills 统一仓库，用于集中管理本地常用的 AI 编程、视频制作、动画生成、素材理解和后期处理相关 skill。

本仓库遵循一个核心原则：

> 一个 skill 一个文件夹，所有 skill 直接放在仓库根目录。

---

## 1. 仓库定位

这个仓库不是某一个单独项目，而是我的本地 Codex 能力仓库。

它用于保存：

* Codex / Claude Code / Cursor / Antigravity 可读取的 skill；
* 视频制作、动画生成、公式可视化、素材理解等工作流说明；
* 每个 skill 的 `SKILL.md`、`README.md`、参考资料和脚本；
* 未来我自己维护或改造过的自定义 skill。

它不用于保存：

* 视频成片；
* 渲染输出；
* 虚拟环境；
* node_modules；
* 临时文件；
* API key；
* 项目私密配置；
* 大体积素材文件。

---

## 2. 当前目录结构

```text
skills/
├─ ECC/
├─ gsap/
├─ hyperframes/
├─ remotion/
├─ taste-skill/
├─ Understand-Anything/
├─ video-maker/
├─ video-use/
├─ .gitignore
└─ README.md
```

每个文件夹就是一个独立 skill 或 skill 集合。

---

## 3. 当前已收录的 skill

### ECC

用途：

* 综合型 Codex / Claude Code 能力集合；
* 其中包含 Manim 相关能力；
* 适合数学、物理、公式、图表和概念解释动画。

在我的视频工作流中，ECC 主要用于：

* 贝尔不等式可视化；
* `S ≤ 2` 和 `S > 2.5` 的数据图；
* 纠缠态公式展示；
* 物理概念黑板风动画；
* 统计点阵和坐标轴动画。

---

### gsap

用途：

* 使用 GSAP 做高级网页动效；
* 管理复杂动画 timeline；
* 做文字、卡片、粒子轨迹、路径运动和转场动画。

在我的视频工作流中，GSAP 主要用于：

* 标题入场；
* 关键字高亮；
* 卡片转场；
* 粒子轨迹增强；
* 科技感 UI 动效；
* Remotion 或 Hyperframes 中的局部动画增强。

---

### hyperframes

用途：

* 使用 HTML / CSS / GSAP 风格生成视频；
* 适合网页式、信息流式、科技风格动效；
* 可作为 Remotion 之外的补充视频生成方案。

在我的视频工作流中，Hyperframes 主要用于：

* 赛博风片段；
* 数据面板；
* 网页式信息动画；
* 片头片尾视觉包装；
* 快速生成短视频风格动效。

---

### remotion

用途：

* 使用 React / TypeScript 程序化生成视频；
* 管理主视频时间轴；
* 合成字幕、配音、图片、动画和视频片段；
* 输出最终 MP4。

在我的视频工作流中，Remotion 是主工程工具，主要用于：

* 主时间轴；
* 字幕同步；
* 配音对齐；
* 镜头编排；
* 片头片尾；
* 最终合成。

---

### taste-skill

用途：

* 辅助视觉审美、风格分析和创意判断；
* 帮助判断一个视频、图片或设计是否高级、清爽、统一。

在我的视频工作流中，taste-skill 主要用于：

* 参考国奖视频风格；
* 判断画面是否拥挤；
* 分析配色、节奏和视觉层级；
* 提升成片审美质量。

---

### Understand-Anything

用途：

* 辅助理解复杂文档、图片、视频素材和项目结构；
* 在正式生成内容前，先帮助 Codex 看懂输入材料。

在我的视频工作流中，Understand-Anything 主要用于：

* 阅读文案；
* 理解项目结构；
* 分析参考视频；
* 整理字幕；
* 提取镜头脚本；
* 总结素材用途。

---

### video-maker

用途：

* 面向中文科普短视频的混合渲染流水线；
* 覆盖 Remotion、Hyperframes、Manim、FFmpeg、旁白字幕和最终验收；
* 适合从文案到成片的完整视频制作流程。

在我的视频工作流中，video-maker 主要用于：

* 快速生成视频工程；
* 组织分镜；
* 生成旁白和字幕；
* 建立 fallback 方案；
* 输出 build report；
* 做最终验收。

---

### video-use

用途：

* 对视频素材进行清点、剪辑、波形查看、时间轴预览和后期处理；
* 依赖 FFmpeg / FFprobe；
* 适合辅助把多个素材合成最终视频。

在我的视频工作流中，video-use 主要用于：

* 素材 inventory；
* 视频片段检查；
* 音频波形查看；
* 初步剪辑；
* 时间轴预览；
* 成片检查；
* 输出 `final.mp4` 前的后期辅助。

注意：

```text
video-use 的 Python 环境建议放在：
D:\code\skills\video-use\.venv

不要把 .venv 提交进 GitHub。
不要把 edit/、final/、renders/ 等输出目录提交进 GitHub。
```

---

## 4. 本地相关工具

除了本仓库中的 skills，我的本地工作流还依赖一些全局工具。

### FFmpeg

路径：

```text
D:\code\Settings\ffmpeg
```

核心命令：

```powershell
ffmpeg -version
ffprobe -version
```

用途：

* 视频转码；
* 视频压缩；
* 视频拼接；
* 音频提取；
* 字幕烧录；
* 读取视频元数据；
* 检查时长、分辨率、帧率和码率。

---

### Blender MCP

路径：

```text
D:\code\MCP\blender-mcp
```

用途：

* 让 Codex 通过 MCP 控制 Blender；
* 创建或修改 3D 场景；
* 生成实验装置、光路、晶体、探测器等三维镜头。

Blender 插件文件：

```text
D:\code\MCP\blender-mcp\addon.py
```

推荐 MCP server 路径：

```text
D:\code\MCP\blender-mcp\.venv\Scripts\blender-mcp.exe
```

注意：

```text
MCP server 不属于 skills 仓库。
D:\code\MCP 不提交到本仓库。
```

---

## 5. 我的量子纠缠微视频推荐工作流

当前最推荐的组合是：

```text
Codex 总调度
├─ Remotion：主时间轴、字幕、合成
├─ GSAP：局部高级动效
├─ Hyperframes：网页感科技动效
├─ ECC / Manim：公式、图表、物理解释动画
├─ Blender MCP：3D 实验装置和光路镜头
├─ video-use：素材清点和剪辑辅助
└─ FFmpeg：转码、拼接、压缩和成片检查
```

---

## 6. 工具分工原则

### Remotion

负责：

* 主工程；
* 视频时间轴；
* 字幕和旁白同步；
* 合成各类片段；
* 输出最终视频。

不建议负责：

* 复杂 3D 实验装置；
* 繁重公式推导动画。

---

### GSAP

负责：

* 局部高级动效；
* 文字动画；
* 卡片动画；
* 粒子轨迹；
* 转场增强。

不建议负责：

* 完整视频主工程；
* 后期剪辑。

---

### ECC / Manim

负责：

* 公式动画；
* 贝尔不等式；
* 数据图表；
* 坐标轴；
* 统计结果；
* 黑板风物理解释。

不建议负责：

* 整部科普视频所有画面；
* 复杂 3D 实验装置。

---

### Blender MCP

负责：

* 3D 实验场景；
* 激光；
* BBO 晶体；
* 纠缠光子对；
* Alice / Bob 探测器；
* 相机和灯光。

不建议负责：

* 整部视频主线；
* 字幕；
* 公式推导；
* 最终剪辑合成。

---

### video-use / FFmpeg

负责：

* 素材清点；
* 时间轴检查；
* 波形查看；
* 剪辑辅助；
* 格式转换；
* 成片压缩；
* 最终检查。

不建议负责：

* 文案创作；
* 物理解释动画；
* 3D 建模。

---

## 7. 新增 skill 规范

新增 skill 时，目录名使用小写英文和连字符，例如：

```text
my-new-skill/
another-video-tool/
```

每个 skill 推荐包含：

```text
skill-name/
├─ SKILL.md
├─ README.md
├─ references/
├─ scripts/
├─ agents/
└─ assets/
```

必备文件：

* `SKILL.md`：给 Codex agent 读取的核心操作说明；
* `README.md`：给人看的中文说明。

推荐目录：

* `references/`：较长的参考资料、案例、规范和背景说明；
* `scripts/`：可复用自动化脚本；
* `agents/`：面向不同 agent 或平台的配置；
* `assets/`：仅在确实需要模板、图片或静态资源时添加。

---

## 8. SKILL.md 编写约定

`SKILL.md` 是给 agent 用的，不是给人慢慢读的长教程。

建议包含：

* 什么时候触发这个 skill；
* 主要工作流；
* 关键边界；
* 禁止事项；
* 需要读取的参考文件；
* 可直接运行的命令或脚本。

不建议包含：

* 大段背景故事；
* 一次性项目细节；
* 私密路径；
* API key；
* 临时账号；
* 大量不稳定信息。

---

## 9. README.md 编写约定

每个 skill 内部都应该有中文 `README.md`，面向人类维护者。

建议包含：

* 这个 skill 解决什么问题；
* 适合哪些场景；
* 推荐目录结构；
* 标准使用流程；
* 附带脚本用途；
* 后续维护注意事项。

---

## 10. 提交前检查

提交前先运行：

```powershell
cd D:\code\skills

git status --short --branch
git diff --stat
```

检查是否误提交：

```powershell
git status --short
```

重点确认不要提交：

```text
.venv/
node_modules/
edit/
final/
renders/
outputs/
*.mp4
*.mov
*.wav
.env
```

如果有 Python 脚本，可以检查：

```powershell
python -m py_compile path\to\script.py
```

如果有 Node 脚本，可以检查：

```powershell
node --check path\to\script.js
```

---

## 11. 推荐 push 流程

```powershell
cd D:\code\skills

git status --short --branch

git add .

git commit -m "Update Codex skills collection"

git push origin main
```

如果首次配置远程仓库：

```powershell
git remote add origin https://github.com/ysomething/skills.git
git branch -M main
git push -u origin main
```

如果远程已有提交：

```powershell
git pull --rebase origin main
git push origin main
```

---

## 12. 安全注意事项

### 不要提交敏感信息

不要提交：

```text
.env
API key
token
cookie
账号密码
私密路径配置
```

### 不要提交大体积产物

不要提交：

```text
视频成片
音频成片
渲染缓存
临时素材
node_modules
Python 虚拟环境
```

### 谨慎使用 Blender MCP

Blender MCP 可以让 Codex 修改 Blender 场景，甚至执行 Blender Python 代码。

建议：

```text
只在可信项目中启用 Blender MCP
大型修改前先保存 .blend 备份
第一次连接时先让 Codex “只读取场景，不要修改物体”
不要执行来源不明的 Blender Python 脚本
```

---

## 13. 下次做视频项目时的启动流程

1. 打开项目目录；
2. 启动 Codex；
3. 输入 `/mcp` 检查 MCP；
4. 如果要用 Blender，先打开 Blender 并启动 BlenderMCP；
5. 让 Codex 先读项目结构，不要立刻改文件；
6. 拆分镜头；
7. 分配工具；
8. 先做 30 秒样片；
9. 再扩展完整视频；
10. 最后用 FFmpeg / video-use 检查成片。

---

## 14. 常用提示词

### 项目分析

```text
请先阅读当前项目结构，不要修改任何文件。
请告诉我：
1. 当前项目主要文件；
2. 视频入口文件；
3. 素材目录；
4. 输出目录；
5. 可以直接运行的命令；
6. 当前最可能的问题。
```

### 素材清点

```text
请使用 video-use 的工作流清点当前项目中的视频、音频、图片和字幕素材。
不要修改源文件。
请输出素材列表、时长、分辨率、帧率、音频情况和推荐用途。
所有输出放到 edit/ 目录。
```

### Blender 3D 镜头

```text
请通过 Blender MCP 创建一个量子纠缠实验装置的 3D 场景。
要求：
1. 中央放置 BBO 晶体；
2. 一束紫色 405nm 激光射入晶体；
3. 两束纠缠光子从晶体向左右两侧飞出；
4. 左右两侧分别放置 Alice 和 Bob 的偏振测量装置；
5. 使用科技感暗色背景；
6. 先只创建场景并保存，不要渲染最终视频；
7. 给我说明创建了哪些物体、材质、灯光和相机。
```

### Manim / ECC 公式动画

```text
请使用 ECC 中的 Manim 能力制作贝尔不等式解释动画。
内容包括：
1. 显示经典上限 S ≤ 2；
2. 显示实验结果 S > 2.5；
3. 用一条线表示经典上限；
4. 用数据柱或数据点表示实验结果突破；
5. 动画风格要清晰、克制、适合物理教学；
6. 输出独立 mp4 片段，供 Remotion 合成。
```

### Remotion 主视频合成

```text
请使用 Remotion 构建主视频时间轴。
要求：
1. 读取旁白文案和字幕；
2. 将 Blender 片段、Manim 片段、图片素材和字幕合成；
3. 保持 1920x1080，30fps；
4. 字幕不遮挡主体；
5. 所有输出放到 edit/ 或 dist/ 目录；
6. 给出运行和渲染命令。
```

### 成片检查

```text
请检查 final.mp4。
要求：
1. 使用 ffprobe 读取时长、分辨率、帧率、码率、音频参数；
2. 检查是否超过 3 分钟；
3. 检查文件大小；
4. 检查是否有明显黑屏、静音、字幕错位；
5. 输出 final_check_report.md；
6. 如果有问题，给出修复命令。
```

---

## 15. 当前核心目标

这个仓库的目标是让我可以持续积累自己的 Codex skills 工作流。

当前最重要的方向是：

```text
量子纠缠微视频
物理科普动画
Remotion 程序化视频
Manim 公式图表动画
Blender 3D 实验镜头
video-use / FFmpeg 后期检查
```

一句话总结：

> 这个仓库是我的本地 AI 视频制作能力库。它让 Codex 不只是写代码，而是可以读文案、拆镜头、做动画、控制 Blender、合成视频、检查成片，并持续沉淀成可复用的工作流。
