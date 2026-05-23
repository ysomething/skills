---
name: video-maker
description: "Use this skill when creating high-quality Chinese science explainer videos or other programmatic short videos with a mixed pipeline: Remotion as final compositor, HyperFrames or HTML animation for dynamic clips, Manim for formulas, FFmpeg for post-processing, Chinese-only visible text audits, narration, subtitles, fallbacks, and final MP4 verification."
---

# Video Maker

## Overview

Use this skill to build a complete short-video project from concept to verified MP4. It is optimized for Chinese science explainers that need strong motion design, accurate logic, synchronized narration/subtitles, and a reliable fallback path when HyperFrames, Manim, browser rendering, TTS, or local codecs are incomplete.

Remotion owns the final timeline. HyperFrames and Manim are asset generators only, and FFmpeg is used for audio/video finishing and verification.

## Workflow

1. Lock the video contract first: output path, resolution, frame rate, duration, language rules, topic logic, scene count, narration, subtitle style, and forbidden claims.
2. Scaffold a real runnable project, not a slide deck. Include `AGENTS.md`, `package.json`, `remotion.config.ts`, `src/`, `hyperframes/`, `manim/`, `public/`, `scripts/`, and `out/`.
3. Add hard screen-text rules to `AGENTS.md`. For Chinese videos, all visible natural-language text must be Chinese; formulas may keep symbols such as `A`, `B`, `x`, `p`, `Delta x`, `Delta p`, and `hbar`.
4. Store story data in code: `src/data/scenes.ts`, `src/data/narration.ts`, `src/data/subtitles.ts`, and a whitelist for text audit exceptions.
5. Scan local images, copy them into `public/assets/`, and rename recognizable assets into semantic names. If assets are missing, generate CSS, SVG, Canvas, Three.js, or FFmpeg fallback visuals instead of stopping.
6. Generate HyperFrames clips into `public/generated/hyperframes/` and Manim clips into `public/generated/manim/`. If either tool fails, create no-text dynamic fallback clips and keep all explanatory text in Remotion.
7. Build the Remotion composition as the single final compositor: scene timing, transitions, subtitles, audio, imported generated clips, formula overlays, and visual fallbacks all converge there.
8. Create or import Mandarin narration, normalize timing, and keep subtitles in sync. Windows SAPI with a Chinese voice is an acceptable local fallback when cloud TTS is unavailable.
9. Run a Chinese visible-text audit before final rendering. Use `scripts/audit-chinese-text.mjs` from this skill as a starter or copy it into the target project and tune the whitelist.
10. Render with Remotion, then verify with FFprobe and a contact sheet. Do not call the work done until duration, resolution, frame rate, audio stream, subtitles, and visual samples are checked.

## Quality Rules

- Do not let HyperFrames and Remotion both control the final timeline.
- Do not leave English UI, titles, badges, buttons, or explanatory labels in a Chinese-screen video.
- Do not rely on static image stacking; every scene should have camera motion, particle motion, formula animation, transition motion, or animated emphasis.
- Do not abort just because an optional renderer is missing. Produce a visually acceptable fallback and document it.
- Keep scientific claims conservative. Separate analogy, inference, and established result; explicitly block common wrong claims in `AGENTS.md`.
- Keep subtitles readable: large font, high contrast, bottom centered, short lines, and highlighted keywords.

## Expected Commands

Use or implement these scripts in the target project:

```bash
npm run render:hyperframes
npm run render:manim
npm run audit:zh
npm run render
npm run render:all
```

`render:all` should execute asset generation, formula generation, Chinese audit, final Remotion render, and verification in order.

## Included Helpers

- `scripts/audit-chinese-text.mjs`: conservative scanner for visible English explanatory text in `src`, `hyperframes`, and `manim`.
- `scripts/make-contact-sheet.mjs`: FFmpeg/FFprobe helper that creates a 3x3 visual sample sheet from a rendered video.

Load `references/pipeline-checklist.md` for the step-by-step production checklist. Load `references/epr-case-study.md` when you need a concrete example of the full workflow and its fallbacks.
