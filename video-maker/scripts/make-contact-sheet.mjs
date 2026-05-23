#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const input = process.argv[2];
const output = process.argv[3] || "out/contact-sheet.jpg";

if (!input) {
  console.error("Usage: node make-contact-sheet.mjs <video-file> [output-image]");
  process.exit(1);
}

function run(command, args) {
  const result = spawnSync(command, args, { encoding: "utf8" });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command} failed:\n${result.stderr || result.stdout}`);
  }
  return result.stdout.trim();
}

function ffbin(name) {
  const envName = name === "ffmpeg" ? "FFMPEG_PATH" : "FFPROBE_PATH";
  return process.env[envName] || name;
}

const videoPath = path.resolve(input);
const outPath = path.resolve(output);

if (!fs.existsSync(videoPath)) {
  console.error(`Video not found: ${videoPath}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });

const probeJson = run(ffbin("ffprobe"), [
  "-v",
  "error",
  "-select_streams",
  "v:0",
  "-show_entries",
  "stream=duration,nb_frames,avg_frame_rate",
  "-of",
  "json",
  videoPath,
]);

const stream = JSON.parse(probeJson).streams?.[0] || {};
const duration = Number(stream.duration) || 0;
const [fpsNum, fpsDen] = String(stream.avg_frame_rate || "30/1").split("/").map(Number);
const fps = fpsDen ? fpsNum / fpsDen : 30;
const totalFrames = Number(stream.nb_frames) || Math.max(1, Math.round(duration * fps));

const frames = Array.from({ length: 9 }, (_, index) => {
  const ratio = (index + 0.5) / 9;
  return Math.max(0, Math.min(totalFrames - 1, Math.round(totalFrames * ratio)));
});

const selectExpr = frames.map((frame) => `eq(n\\,${frame})`).join("+");
const filter = `select=${selectExpr},scale=640:360,tile=3x3`;

run(ffbin("ffmpeg"), ["-y", "-i", videoPath, "-vf", filter, "-frames:v", "1", "-update", "1", outPath]);

console.log(`Contact sheet written: ${outPath}`);
