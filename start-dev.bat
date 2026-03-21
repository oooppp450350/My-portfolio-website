@echo off
echo 啟動即時預覽 + 自動同步...
cd /d %~dp0
start "Auto Push" cmd /k "node watch-and-push.js"
start "Live Server" cmd /k "live-server --port=3000 --open=index.html"
