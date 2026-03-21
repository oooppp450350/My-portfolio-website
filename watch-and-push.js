const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const watchFiles = ['index.html', 'ig-eat-keep.index.html'];
let debounceTimer = null;
let isPushing = false;

function autoPush() {
  if (isPushing) return;
  isPushing = true;
  try {
    // 推前先拉，避免衝突
    execSync('git pull origin master --rebase', { cwd: dir });
    execSync('git add index.html ig-eat-keep.index.html', { cwd: dir });
    const diff = execSync('git diff --cached --stat', { cwd: dir }).toString();
    if (!diff.trim()) {
      isPushing = false;
      return;
    }
    const time = new Date().toLocaleString('zh-TW');
    execSync(`git commit -m "Auto sync: ${time}"`, { cwd: dir });
    execSync('git push origin master', { cwd: dir });
    console.log(`[${time}] ✅ 已同步到 GitHub`);
  } catch (e) {
    console.error('Push 失敗：', e.message);
  }
  isPushing = false;
}

function autoPull() {
  if (isPushing) return;
  try {
    const result = execSync('git fetch origin && git log HEAD..origin/master --oneline', { cwd: dir }).toString();
    if (result.trim()) {
      execSync('git pull origin master --rebase', { cwd: dir });
      const time = new Date().toLocaleString('zh-TW');
      console.log(`[${time}] ⬇️  從 GitHub 拉取更新：\n${result.trim()}`);
    }
  } catch (e) {
    // 靜默忽略拉取錯誤（如網路暫時中斷）
  }
}

watchFiles.forEach(file => {
  const fullPath = path.join(dir, file);
  fs.watch(fullPath, () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(autoPush, 1500);
  });
});

// 每 30 秒檢查一次 GitHub 是否有新 commit
setInterval(autoPull, 30 * 1000);

console.log('監聽中，存檔即自動同步到 GitHub...');
console.log('每 30 秒自動從 GitHub 拉取更新...');
