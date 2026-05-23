# EPR Paradox Case Study

This case study records the successful workflow for a Chinese EPR paradox explainer video.

## Delivery Contract

- Final file: `out/epr-paradox-final.mp4`
- Resolution: 1920 x 1080
- Frame rate: 30 FPS
- Duration target: 80 to 95 seconds
- Actual verified duration: about 92 seconds
- Language: Mandarin narration, Chinese subtitles, Chinese visible explanatory text

## Timeline

| Time | Scene | Purpose | Visual Direction |
| --- | --- | --- | --- |
| 0-8s | 硬币与量子 | Start from classical uncertainty | Saturated red, yellow, blue; spinning coin; glowing particles |
| 8-17s | 定域实在性 | Define realism and locality | Blue-white glass cards |
| 17-27s | EPR 论文登场 | Historical setup | Vintage paper zoom; Chinese title overlays |
| 27-37s | 纠缠粒子分离 | Establish correlated pair | Deep blue-purple space; split particles |
| 37-48s | 实验选择一 | Measure position branch | Cyber cyan branch timeline |
| 48-59s | 实验选择二 | Measure momentum branch | Orange-purple branch timeline |
| 59-70s | 不确定性冲突 | Show uncertainty principle | Black-red warning; formula reveal |
| 70-82s | 隐变量类比 | Coin analogy for hidden variables | Green code-rain and gold coin |
| 82-92s | 贝尔悬念 | Tease testable next question | Black-gold particles and final question |

## Scientific Guardrails

- Do not say entanglement enables faster-than-light communication.
- Do not show one particle sending a signal to the other.
- Do not show the same particle pair being measured for position and momentum in sequence.
- Do not claim EPR proved quantum mechanics wrong.
- Correct framing: EPR argued quantum mechanics might be incomplete.
- Distinguish two mutually exclusive experimental choices.

## Screen Text Rules

All new visible explanatory text was Chinese. Banned English terms were replaced:

- `Conflict` -> `矛盾出现`
- `Hidden Variables` -> `隐变量`
- `Bell Inequality` -> `贝尔不等式`
- `No signal` -> `预测，不是传信号`

Latin formula symbols were allowed for physics notation, for example `A`, `B`, `x`, `p`, `Delta x Delta p >= hbar / 2`.

## Fallback Lessons

HyperFrames and Manim should be treated as optional generators. In the EPR build, local renderer issues required fallback generation:

- HyperFrames browser/cache setup was incomplete.
- Manim Python entrypoint was incomplete.
- The first FFmpeg fallback using test pattern filters looked like engineering test bars and was rejected.
- A better fallback used dynamic math-gradient filters with no baked text, then Remotion supplied Chinese labels, subtitles, particles, and camera motion.

Useful fallback pattern:

```text
nullsrc -> geq animated sine gradients -> hue/eq/format -> short MP4 clip
```

## Verification Used

- `scripts/audit-chinese-text.mjs` passed over source display text.
- FFprobe verified resolution, FPS, audio stream, and duration.
- FFmpeg generated a 3x3 contact sheet from representative frames for visual inspection.

The important production habit is to verify the artifact itself, not only the render command exit code.
