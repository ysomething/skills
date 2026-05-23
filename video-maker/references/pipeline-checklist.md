# Video Maker Pipeline Checklist

## 1. Contract

- Confirm output filename, resolution, FPS, target duration, language, and delivery format.
- Convert relative dates, timeline ranges, and scene timings into absolute seconds.
- Write the scientific or instructional logic chain before designing visuals.
- List forbidden claims and forbidden visible text early.

## 2. Project Structure

Recommended structure:

```text
project/
  AGENTS.md
  package.json
  remotion.config.ts
  src/
    Root.tsx
    MainVideo.tsx
    data/
    components/
    styles.css
  hyperframes/
    compositions/
    scripts/
  manim/
    scenes/
    scripts/
  public/
    assets/
    generated/
      hyperframes/
      manim/
    audio/
  scripts/
  out/
```

The exact names can change, but the ownership boundaries should not: Remotion is final composition, generated clips are inputs, and FFmpeg is finishing/verification.

## 3. Chinese Screen Text

- Put hard language rules in `AGENTS.md`.
- Keep new visible natural-language text Chinese-only for Chinese videos.
- Allow formula symbols and short scientific identifiers only through a whitelist.
- Run the audit before rendering.
- Common replacements:
  - `Conflict` -> `矛盾出现`
  - `Hidden Variables` -> `隐变量`
  - `Bell Inequality` -> `贝尔不等式`
  - `No signal` -> `预测，不是传信号`
  - `Predict` -> `预测`
  - `Signal` -> `信号`
  - `Complete` -> `完备`
  - `Reality` -> `实在性`
  - `Locality` -> `定域性`

## 4. Asset Intake

- Scan the working directory for `jpg`, `jpeg`, `png`, and `webp`.
- Copy useful images into `public/assets/`.
- Rename recognized assets semantically, such as `paper_page.jpg`, `scientists_wide.jpg`, or `coin_flip_photo.jpg`.
- Treat source-document text as historical artifact text; do not add new English headings or labels over it.
- If assets are missing, generate replacements using CSS, SVG, Canvas, Three.js, FFmpeg filters, or AI image generation when appropriate.

## 5. Narration And Subtitles

- Store the full narration in a data file and also in `public/narration.txt`.
- Segment subtitles by scene and sentence timing.
- Keep subtitle lines short and readable for projection.
- Highlight key terms through structured subtitle data rather than hard-coded text spans.
- For local Mandarin fallback on Windows, use `System.Speech.Synthesis.SpeechSynthesizer` and an installed zh-CN voice.

## 6. Generated Clips

- HyperFrames is best for high-energy HTML, GSAP, CSS 3D, Three.js, particles, and code-rain scenes.
- Manim is best for formulas, experiment branches, coordinate axes, and mathematical reveals.
- Render each generated clip with no critical explanatory English baked in.
- On failure, generate a no-text dynamic fallback clip and let Remotion provide the scene text.

## 7. Remotion Composition

- Define `fps`, `width`, `height`, and `durationInFrames` explicitly.
- Use scene data as the source of truth for timing.
- Use `Sequence`, `Audio`, `staticFile`, interpolation, and CSS transforms for final assembly.
- Set `yuv420p`, H.264, AAC, overwrite behavior, and a valid local browser/compositor path when the environment needs it.
- Keep fallback components in Remotion for every generated asset.

## 8. Render And Verify

- Run `npm run render:all`.
- Verify with FFprobe:
  - width and height match the contract
  - FPS matches the contract
  - duration is inside the target window
  - audio stream exists and is close to video duration
- Create a contact sheet and inspect representative frames.
- Re-run the language audit after any late text change.

## 9. Handoff

- Report the final MP4 path.
- Report the verification facts, not just "render succeeded".
- Mention any fallback path used, especially if HyperFrames, Manim, TTS, or browser rendering was substituted.
