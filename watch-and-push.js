const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const watchFiles = ['index.html', 'ig-eat-keep.index.html'];
let debounceTimer = null;
let isPushing = false;

// ANSI 顏色
const C = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  red:    '\x1b[31m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
  gray:   '\x1b[90m',
};

function tag(str) { return `${C.cyan}${str}${C.reset}`; }
function added(str) { return `${C.green}${str}${C.reset}`; }
function removed(str) { return `${C.red}${str}${C.reset}`; }
function info(str) { return `${C.yellow}${str}${C.reset}`; }
function dim(str) { return `${C.dim}${str}${C.reset}`; }

/**
 * 從 diff hunk 前後的 context 行找出最近的可識別區域名稱
 * 優先順序：id > data-section > aria-label > class > 標籤名稱
 */
function extractAreaName(contextLines) {
  for (const line of contextLines) {
    // id="..." 或 id='...'
    const idMatch = line.match(/\bid=["']([^"']+)["']/);
    if (idMatch) return `#${idMatch[1]}`;

    // data-section / data-name 之類
    const dataMatch = line.match(/\bdata-(?:section|name|label)=["']([^"']+)["']/);
    if (dataMatch) return `[${dataMatch[0]}]`;

    // aria-label
    const ariaMatch = line.match(/\baria-label=["']([^"']+)["']/);
    if (ariaMatch) return `aria:"${ariaMatch[1]}"`;

    // class（取前兩個 class 名）
    const classMatch = line.match(/\bclass=["']([^"']+)["']/);
    if (classMatch) {
      const classes = classMatch[1].trim().split(/\s+/).slice(0, 2).join(' ');
      return `.${classes}`;
    }

    // HTML 標籤本身（取第一個開標籤）
    const tagMatch = line.match(/<(\w[\w-]*)/);
    if (tagMatch) return `<${tagMatch[1]}>`;
  }
  return null;
}

/**
 * 解析 git diff 輸出，回傳每個 hunk 的資訊
 */
function parseDiff(rawDiff) {
  const lines = rawDiff.split('\n');
  const hunks = [];
  let currentHunk = null;
  let contextBuffer = [];

  for (const line of lines) {
    // hunk header: @@ -old,count +new,count @@ optional context
    const hunkMatch = line.match(/^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@(.*)/);
    if (hunkMatch) {
      if (currentHunk) hunks.push(currentHunk);
      currentHunk = {
        oldStart: parseInt(hunkMatch[1]),
        newStart: parseInt(hunkMatch[2]),
        inlineCtx: hunkMatch[3].trim(),
        added: 0,
        removed: 0,
        lines: [],
      };
      contextBuffer = [];
      continue;
    }

    if (!currentHunk) {
      // diff 標頭行，收集做 context
      if (line.startsWith('+++ ') || line.startsWith('--- ')) continue;
      contextBuffer.push(line);
      continue;
    }

    if (line.startsWith('+') && !line.startsWith('+++')) {
      currentHunk.added++;
      currentHunk.lines.push(line.slice(1));
    } else if (line.startsWith('-') && !line.startsWith('---')) {
      currentHunk.removed++;
    } else if (line.startsWith(' ')) {
      currentHunk.lines.push(line.slice(1));
    }
  }
  if (currentHunk) hunks.push(currentHunk);
  return hunks;
}

/**
 * 顯示變更摘要
 */
function showChangeSummary(file, rawDiff) {
  const hunks = parseDiff(rawDiff);
  if (hunks.length === 0) return;

  const time = new Date().toLocaleTimeString('zh-TW', { hour12: false });
  console.log(`\n${C.bold}[${time}] 📝 ${file}${C.reset} 有變更`);
  console.log(dim('  ' + '─'.repeat(50)));

  hunks.forEach((hunk, i) => {
    // 用 hunk 的 lines (context + added) 往前找區域名稱
    const searchLines = [...hunk.lines].reverse();
    const area = extractAreaName(searchLines) || extractAreaName([hunk.inlineCtx]) || '(未知區域)';

    const addStr = hunk.added   > 0 ? added(`+${hunk.added}`)   : '';
    const delStr = hunk.removed > 0 ? removed(`-${hunk.removed}`) : '';
    const changes = [addStr, delStr].filter(Boolean).join(' ');

    console.log(
      `  ${info('第 ' + hunk.newStart + ' 行')}  ${tag(area)}` +
      (changes ? `  ${changes}` : '')
    );
  });

  console.log(dim('  ' + '─'.repeat(50)));
}

function autoPush() {
  if (isPushing) return;
  isPushing = true;
  try {
    // 推前先拉，避免衝突
    execSync('git pull origin master --rebase', { cwd: dir, stdio: 'pipe' });

    // 顯示各檔案的變更摘要（stage 前先 diff）
    for (const file of watchFiles) {
      try {
        const rawDiff = execSync(`git diff -- ${file}`, { cwd: dir }).toString();
        if (rawDiff.trim()) showChangeSummary(file, rawDiff);
      } catch (_) {}
    }

    execSync('git add index.html ig-eat-keep.index.html', { cwd: dir, stdio: 'pipe' });
    const stat = execSync('git diff --cached --stat', { cwd: dir }).toString();
    if (!stat.trim()) {
      isPushing = false;
      return;
    }

    const time = new Date().toLocaleString('zh-TW');
    execSync(`git commit -m "Auto sync: ${time}"`, { cwd: dir, stdio: 'pipe' });
    execSync('git push origin master', { cwd: dir, stdio: 'pipe' });
    console.log(`  ${C.green}✅ 已推送到 GitHub${C.reset}\n`);
  } catch (e) {
    console.error(`  ${C.red}❌ Push 失敗：${C.reset}`, e.message);
  }
  isPushing = false;
}

function autoPull() {
  if (isPushing) return;
  try {
    const result = execSync(
      'git fetch origin && git log HEAD..origin/master --oneline',
      { cwd: dir, stdio: 'pipe' }
    ).toString();
    if (result.trim()) {
      execSync('git pull origin master --rebase', { cwd: dir, stdio: 'pipe' });
      const time = new Date().toLocaleTimeString('zh-TW', { hour12: false });
      console.log(`[${time}] ${C.cyan}⬇️  從 GitHub 拉取更新${C.reset}`);
      result.trim().split('\n').forEach(l => console.log(`  ${dim(l)}`));
      console.log();
    }
  } catch (_) {}
}

watchFiles.forEach(file => {
  const fullPath = path.join(dir, file);
  fs.watch(fullPath, () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(autoPush, 1500);
  });
});

// 每 30 秒檢查 GitHub 是否有新 commit
setInterval(autoPull, 30 * 1000);

console.log(`${C.bold}監聽中${C.reset} — 存檔即顯示變更區域並同步到 GitHub`);
console.log(`${C.dim}每 30 秒自動從 GitHub 拉取更新${C.reset}\n`);
