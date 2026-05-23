#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || process.cwd());
const scanDirs = (process.argv[3] ? process.argv.slice(3) : ["src", "hyperframes", "manim"]).map((dir) =>
  path.join(root, dir),
);

const extensions = new Set([".tsx", ".ts", ".jsx", ".js", ".html", ".py"]);
const ignoredDirs = new Set([
  "node_modules",
  ".git",
  "dist",
  "build",
  "out",
  "public/generated",
  ".cache",
  ".remotion",
]);

const bannedTerms = [
  "Conflict",
  "Hidden Variables",
  "Bell Inequality",
  "No signal",
  "Predict",
  "Signal",
  "Complete",
  "Reality",
  "Locality",
  "Measurement",
  "Position",
  "Momentum",
  "Quantum",
  "Classical",
];

const allowedWords = new Set([
  "EPR",
  "A",
  "B",
  "C",
  "x",
  "p",
  "dx",
  "dp",
  "hbar",
  "src",
  "className",
  "style",
  "href",
  "http",
  "https",
  "mp4",
  "wav",
  "jpg",
  "jpeg",
  "png",
  "webp",
  "svg",
  "tsx",
  "ts",
  "jsx",
  "js",
  "py",
  "html",
]);

function shouldIgnorePath(filePath) {
  const normalized = filePath.split(path.sep).join("/");
  return [...ignoredDirs].some((part) => normalized.includes(`/${part}/`) || normalized.endsWith(`/${part}`));
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const output = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (shouldIgnorePath(fullPath)) continue;
    if (entry.isDirectory()) {
      output.push(...walk(fullPath));
    } else if (extensions.has(path.extname(entry.name))) {
      output.push(fullPath);
    }
  }
  return output;
}

function lineNumber(content, index) {
  return content.slice(0, index).split(/\r?\n/).length;
}

function stripLikelyCode(value) {
  return value
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[./\\][\w./\\-]+/g, " ")
    .replace(/\b[\w-]+\.(tsx?|jsx?|py|html|css|json|mp4|wav|png|jpe?g|webp|svg)\b/gi, " ")
    .replace(/\b(?:import|from|export|const|let|var|function|return|className|style|id|type)\b/g, " ");
}

function hasChinese(value) {
  return /[\u3400-\u9fff]/.test(value);
}

function suspiciousEnglishWords(value) {
  const cleaned = stripLikelyCode(value);
  const words = cleaned.match(/[A-Za-z][A-Za-z-]{1,}/g) || [];
  return words.filter((word) => !allowedWords.has(word) && !allowedWords.has(word.toUpperCase()));
}

function extractStrings(filePath, content) {
  const ext = path.extname(filePath);
  const matches = [];

  if (ext === ".html") {
    const textNode = />\s*([^<>{}][^<>]*?)\s*</g;
    for (const match of content.matchAll(textNode)) {
      const value = match[1].replace(/\s+/g, " ").trim();
      if (value) matches.push({ value, index: match.index + match[0].indexOf(match[1]) });
    }
  }

  const stringLiteral = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  for (const match of content.matchAll(stringLiteral)) {
    const value = match[2].replace(/\s+/g, " ").trim();
    if (!value) continue;
    if (value.includes("${")) continue;
    matches.push({ value, index: match.index });
  }

  return matches;
}

const issues = [];

for (const filePath of scanDirs.flatMap(walk)) {
  const content = fs.readFileSync(filePath, "utf8");
  for (const item of extractStrings(filePath, content)) {
    const lowerValue = item.value.toLowerCase();
    for (const term of bannedTerms) {
      if (lowerValue.includes(term.toLowerCase())) {
        issues.push({
          filePath,
          line: lineNumber(content, item.index),
          kind: "banned-term",
          detail: term,
          value: item.value,
        });
      }
    }

    const englishWords = suspiciousEnglishWords(item.value);
    if (englishWords.length > 0 && !hasChinese(item.value)) {
      issues.push({
        filePath,
        line: lineNumber(content, item.index),
        kind: "english-display-text",
        detail: [...new Set(englishWords)].join(", "),
        value: item.value,
      });
    }
  }
}

if (issues.length > 0) {
  console.error(`Chinese visible-text audit failed: ${issues.length} issue(s).`);
  for (const issue of issues) {
    const relative = path.relative(root, issue.filePath);
    console.error(`- ${relative}:${issue.line} [${issue.kind}] ${issue.detail}`);
    console.error(`  ${issue.value}`);
  }
  process.exit(1);
}

console.log("Chinese visible-text audit passed.");
