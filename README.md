# 建築旅行プランナー 2025 版

世界の名建築を巡る旅程を、ステップ・バイ・ステップのウィザードで直感的に作成できる React + TypeScript アプリケーションです。地図や写真ギャラリーから作品を選び、最適な巡回ルートを自動生成。総距離・総時間・総費用を即座に確認できます。

---

## 主な機能

1. **3 ステップ・ウィザード UI**  
   ① 出発地を選択 → ② 作品を選択（地図 / 写真切替） → ③ ルート確認・共有
2. **ルート自動生成**  
   最近傍法で訪問順を計算し、距離を最小化
3. **交通手段ごとの時間 & 費用見積り**  
   区間ごとに飛行機 / 電車 / バス / 車を選択可
4. **共有 URL**  
   旅程を `?plan=` クエリにエンコードしてシェア
5. **マルチデバイス対応**  
   Tailwind + Flex/Grid でレスポンシブ、写真ギャラリーはモバイルでもスムーズ
6. **多言語対応**  
   i18next により日本語 / 英語トグル
7. **ビジュアルテーマ**  
   アンバー × ストーンのカラーパレット、Google Fonts *Cinzel*（見出し） & *Libre Baskerville*（本文）で巨匠の重厚感を演出

---

## スクリーンショット
（ここに `/docs/screenshot.png` などを配置すると GitHub で見やすくなります）

---

## デモ
ローカル起動後、ブラウザで `http://localhost:5173` を開いてください。

---

## セットアップ
```bash
# 依存パッケージをインストール
npm install

# 開発サーバーを起動（ポート 5173）
npm run dev
```

ビルド：
```bash
npm run build        # production 用静的ファイルを dist/ に出力
npm run preview      # ローカルでビルド済みファイルを検証
```

---

## フォルダ構成（抜粋）
```
src/
  App.tsx                  … 3 ステップウィザードのルート
  components/
    OriginStep.tsx         … 出発地選択 + 背景コラージュ
    SelectWorksStep.tsx    … 地図 / 写真ギャラリー切替
    PlanStep.tsx           … ルート生成 + ミニマップ + TravelPlanPanel
    CleanMapView.tsx       … Leaflet マップ & マーカー
    PhotoSelector.tsx      … 作品サムネイルグリッド
    StepProgress.tsx       … 進捗バー
  context/                 … 選択状態の React Context
  utils/
    routePlanner.ts        … 最近傍法
    transport.ts           … 時間・費用推定
    share.ts               … URL シリアライズ
  data/
    works.ts               … 建築作品データ
    countryCenters.ts      … 国別中心座標
    architects/            … ポートレート画像（背景用）
```

---

## 技術スタック
- **フロントエンド**: React 18, TypeScript, Vite
- **スタイリング**: Tailwind CSS, Google Fonts
- **地図**: React-Leaflet + OpenStreetMap タイル
- **国際化**: i18next

---

## コントリビュート
バグ報告や機能提案、プルリクエストを歓迎します！

---

## ライセンス
MIT License


建築作品を巡る旅程を簡単に作成できる React アプリです。

Travel route planner focusing on architectural works.

## Features

* Select origin country and architectural works to visit
* Generates optimized travel route (nearest-neighbor heuristic)
* Per-segment transport mode selection (flight / train / bus / car)
* Automatic estimation of distance, time and cost per segment and totals
* Shareable URL to reopen the exact plan
* Responsive UI (Sidebars on desktop, drawer navigation on mobile)
* i18n Japanese / English

## Tech Stack

* React 18 + TypeScript + Vite
* TailwindCSS
* React Leaflet + OpenStreetMap tiles
* i18next
* HeadlessUI & Heroicons (drawers, icons)
* clsx (utility)

## Getting Started (Local Dev)

```bash
# 1. install dependencies
npm install

# 2. run dev server (http://localhost:5173 by default)
npm run dev
```

## Build

```bash
npm run build
```

## Share URL

The travel plan can be shared via the **Copy Share URL** button. The full plan state is Base64-encoded in a `?plan=` query parameter.

## Folder Structure (major files)

```
src/
  components/
    CleanMapView.tsx       – Map + markers / polyline
    TravelPlanPanel.tsx    – Route generation, transport mode, costs
    SelectedList.tsx       – List of chosen works
    ui/                    – Reusable Button / Drawer / Card
  context/                 – Selection context
  utils/                   – Route planner, share URL, transport utils
  data/                    – Country centres, sample data
```

## Contributing
Pull requests are welcome! Feel free to open issues / suggestions.

## License
MIT
