# skills

这里是个人 Codex skills 的统一仓库。以后所有自定义 skill 都放在这个仓库里，并且遵循“一个 skill 一个文件夹”的规则。

这个 README 是总说明：它负责规定仓库结构、新增 skill 的约定、提交前检查方式，以及每个 skill 内部应该如何组织说明文档。

## 仓库结构

每个 skill 都直接放在仓库根目录，不再额外嵌套一层 `skills/`。

```text
skills/
  video-maker/
    SKILL.md
    README.md
    agents/
    references/
    scripts/
```

新增 skill 时，目录名使用小写英文和连字符，例如：

```text
my-new-skill/
another-video-tool/
```

## 每个 skill 的必备文件

- `SKILL.md`：给 Codex agent 读取的核心操作说明，必须包含合法的 YAML frontmatter。
- `README.md`：给人看的中文说明，解释这个 skill 的用途、目录、使用流程和维护约定。

推荐目录：

- `agents/`：放面向不同 agent 或平台的配置，例如 `openai.yaml`。
- `references/`：放较长的参考资料、案例、清单、规范和背景说明。
- `scripts/`：放可以复用的自动化脚本。
- `assets/`：仅在确实需要模板、图片、字体或其他静态资源时添加。

不要在 skill 目录里堆放临时文件、渲染输出、缓存、测试产物或本地私密配置。

## 新增 skill 流程

1. 在仓库根目录创建新文件夹，文件夹名使用小写连字符。
2. 编写 `SKILL.md`，说明这个 skill 什么时候使用、能做什么、核心流程是什么。
3. 编写中文 `README.md`，让人可以快速理解这个 skill 的用途和维护方式。
4. 如果有复杂流程，把长文档放入 `references/`，不要把 `SKILL.md` 写得过长。
5. 如果有可复用自动化，把脚本放入 `scripts/`，并在 README 中说明用途。
6. 提交前运行必要校验，确保 skill 元数据和脚本能正常解析。
7. 一个提交尽量只新增或修改一个明确的 skill，方便以后回滚和追踪。

## `SKILL.md` 编写约定

`SKILL.md` 是给 agent 用的，不是给人慢慢读的长教程。它应该短、准、能直接指导行动。

建议包含：

- 什么时候触发这个 skill。
- 主要工作流。
- 关键边界和禁区。
- 需要加载的参考文件。
- 可直接运行或复用的脚本。

不建议包含：

- 大段背景故事。
- 已经可以放进 `README.md` 的人类说明。
- 一次性项目细节。
- 临时路径、账号、密钥或机器私密配置。

## `README.md` 编写约定

每个 skill 内部都要有中文 `README.md`。它面向人类维护者，重点解释：

- 这个 skill 解决什么问题。
- 适合哪些场景。
- 推荐目录结构。
- 标准使用流程。
- 附带脚本和参考资料的用途。
- 后续维护和新增内容的注意事项。

可以保留工具名、文件名、命令名和代码标识，例如 `Remotion`、`FFmpeg`、`SKILL.md`、`npm run render`，但正文说明尽量使用中文。

## 提交前检查

新增或修改 skill 后，至少做这些检查：

```bash
python quick_validate.py <skill-folder>
node --check <script-file>
git status --short --branch
git diff --stat
```

如果 skill 内有多个脚本，逐个做语法检查或运行对应的 dry run。不要把缓存、构建产物、视频输出、音频输出或本地临时文件提交进仓库。

## 当前 skill

- `video-maker`：用于制作高质量中文科普短视频的混合渲染流水线，覆盖 Remotion、HyperFrames、Manim、FFmpeg、中文审计、旁白字幕、fallback 和最终验收。
