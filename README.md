# AI Skills for Video Subtitle Workflow

這是一個專為影片字幕處理設計的 AI Skills 集合，提供從音訊轉字幕、優化字幕、設計字卡到生成社群媒體摘要的完整工作流程。

## 📦 包含的 Skills

### 1. Audio to SRT Converter（音訊轉字幕）
將音訊檔案（MP3, WAV, M4A, FLAC 等）轉換為 SRT 字幕檔。

**功能特點：**
- 支援多種音訊格式
- 可自訂每行字數上限（預設 22 字，最少 4 字）
- 自動處理時間軸間隔（< 0.3s 自動合併）
- 自動檢查環境與套件依賴

**使用方式：**
```
請將 audio-example.m4a 轉成 SRT 字幕
```
或
```
convert audio to srt with max 20 characters per line
```

**輸出檔案：** `origin.srt`

---

### 2. SRT Enhancer（字幕優化）
透過比對原稿（origin.md）優化 SRT 字幕的準確性。

**功能特點：**
- 自動修正錯漏字與專有名詞
- 在英文與數字前後加入半形空格
- 保持原有時間軸不變
- 使用 AI 智慧判斷，不依賴腳本

**使用方式：**
```
請優化 origin.srt 字幕檔
```
或
```
enhance srt subtitles using origin.md
```

**前置需求：** 同資料夾需有 `origin.md` 原稿檔案  
**輸出檔案：** `enhanced.srt`

---

### 3. SRT Card Annotator（字卡標註）
在字幕下方智慧新增參考字卡，提升影片資訊傳達效果。

**功能特點：**
- 自動萃取重點詞句（10-16 字）
- 智慧分類字卡類型：
  - 🟡 **金色重點**：核心結論、關鍵一句
  - ⚪ **白色提醒**：建議、提醒、注意事項
  - 🔴 **紅色警告**：風險、錯誤、踩雷
  - 🔵 **藍色列點**：條列、步驟、清單
- 每 10 段字幕至少新增 2 個字卡

**使用方式：**
```
請為 enhanced.srt 加入參考字卡
```
或
```
add reference cards to srt
```

**輸出檔案：** `reference-cards.srt`

---

### 4. SRT Social Summary（社群媒體摘要生成）
根據字幕內容生成適合不同平台的社群媒體貼文。

**功能特點：**
- 支援三大平台：Facebook、Thread、YouTube
- 自動生成吸睛標題與內容摘要
- 智慧推薦相關 Hashtag
- 針對平台特性優化文案風格

**使用方式：**
```
請根據 enhanced.srt 生成影片介紹
```
或
```
generate social media summary from srt
```

**輸出檔案：** `summary.md`

---

## 🚀 完整工作流程

使用 `/gen-video-srt-card-des` 工作流程一次執行所有步驟：

```
/gen-video-srt-card-des
```

這會依序執行：
1. 音訊轉字幕（Audio to SRT）
2. 字幕優化（SRT Enhancer）
3. 字卡標註（SRT Card Annotator）
4. 社群摘要生成（SRT Social Summary）

---

## 📁 專案結構

```
.agent/
├── skills/
│   ├── audio-to-srt/          # 音訊轉字幕
│   ├── srt-enhancer/          # 字幕優化
│   ├── srt-card-annotator/    # 字卡標註
│   └── srt-social-summary/    # 社群摘要
└── workflows/
    └── gen-video-srt-card-des.md  # 完整工作流程
```

---

## 💡 使用建議

1. **準備原稿**：在轉換字幕前，建議先準備好 `origin.md` 原稿檔案，以便後續優化
2. **逐步執行**：初次使用建議逐個 skill 執行，熟悉後再使用完整工作流程
3. **檢查輸出**：每個步驟完成後都會生成對應檔案，建議檢查確認後再進行下一步
4. **自訂參數**：可在指令中指定參數，如字數上限、字卡類型偏好等

---

## 🔧 技術細節

- **AI 驅動**：字幕優化、字卡標註、摘要生成皆使用 AI 智慧判斷
- **Python 腳本**：音訊轉字幕使用 Python + Whisper API
- **格式保持**：所有處理皆保持 SRT 格式完整性與時間軸準確性