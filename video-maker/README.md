# video-maker

`video-maker` 是一个用于制作高质量中文科普短视频的 Codex skill。它沉淀了一条从脚本、分镜、素材整理，到程序化动画、中文审计、旁白字幕、最终渲染和成片验收的完整流程。

这个 skill 特别适合物理、数学、工程、人工智能等主题的中文讲解视频。目标不是生成普通幻灯片，而是构建可以真实运行、可复用、可验收的视频项目。

## 核心定位

- 使用 Remotion 作为最终总合成器，统一控制时间线、字幕、音频和素材合成。
- 使用 HyperFrames 或 HTML 动画生成高动态片段，例如粒子、转场、赛博界面、代码雨和视觉爆发。
- 使用 Manim 生成公式、数学图像、物理实验示意和分叉逻辑动画。
- 使用 FFmpeg 做转码、压缩、音频处理、抽帧检查和最终验收。
- 强制检查中文画面文字，避免中文视频里混入英文标题、英文按钮或英文解释性标签。
- 在 HyperFrames、Manim、TTS 或浏览器渲染不可用时，使用可接受的本地 fallback，不中断交付。

## 推荐目录

每个视频项目建议使用类似结构：

```text
project/
  AGENTS.md
  package.json
  remotion.config.ts
  src/
  hyperframes/
  manim/
  public/
  scripts/
  out/
```

其中 Remotion 只负责最终合成，HyperFrames 和 Manim 只负责生成素材，FFmpeg 负责后期与验证。不要让多个工具同时争夺最终时间线控制权。

## 标准流程

1. 先锁定视频契约：输出文件、分辨率、帧率、时长、语言规则、目标受众和必须讲清楚的逻辑链。
2. 写入 `AGENTS.md`：明确画面文字规则、物理或专业内容边界、禁用表述和渲染前检查项。
3. 整理素材：扫描本地图片，复制到 `public/assets/`，缺失素材用 CSS、SVG、Canvas、Three.js 或 FFmpeg 生成替代画面。
4. 拆分数据：把场景、旁白、字幕和文字审计白名单放入 `src/data/`。
5. 生成片段：HyperFrames 输出到 `public/generated/hyperframes/`，Manim 输出到 `public/generated/manim/`。
6. 合成视频：Remotion 读取素材、音频、字幕和场景数据，输出最终 MP4。
7. 后期验收：运行中文文字审计、FFprobe 参数检查和 FFmpeg 抽帧联系表检查。

## 常用命令

目标视频项目通常应该提供这些脚本：

```bash
npm run render:hyperframes
npm run render:manim
npm run audit:zh
npm run render
npm run render:all
```

`render:all` 应该按顺序完成素材生成、公式生成、中文审计、最终渲染和验收检查。

## 附带工具

- `scripts/audit-chinese-text.mjs`：扫描可能显示到画面的字符串，发现英文解释性文本时失败。
- `scripts/make-contact-sheet.mjs`：从最终视频抽取九宫格联系表，便于快速检查画面节奏和字幕可读性。

## 参考资料

- `references/pipeline-checklist.md`：完整制作清单。
- `references/epr-case-study.md`：EPR 佯谬中文科普视频的实际案例记录。

## 新增 skill 约定

这个仓库采用“一个 skill 一个文件夹”的结构。以后新增 skill 时，直接在仓库根目录创建新的小写连字符目录，例如：

```text
another-skill/
  SKILL.md
  README.md
  agents/
  references/
  scripts/
```

`SKILL.md` 保持给 agent 使用的精简操作说明；`README.md` 用中文写给人看，说明这个 skill 的用途、目录和推荐用法。
