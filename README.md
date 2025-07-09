# Architectour Planner

A React + TypeScript single-page app for crafting custom tours of 20th-century architectural masterpieces.

![screenshot](docs/screenshot.png)


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
   アンバー・スレート・エメラルド・ウッドを基調としたマテリアルパレット。見出しは *Cinzel*、本文は *Inter*.
8. **データの動的ロード**  
   `src/data/works.csv` を Vite の raw import + `d3-dsv` でパースし、画像は `import.meta.glob` で自動解決。

---

## スクリーンショット
（ここに `/docs/screenshot.png` などを配置すると GitHub で見やすくなります）

---

## ローカルデモ
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
npm run build        # 静的ファイルを dist/ へ出力
npm run preview      # ローカルサーバーで dist/ を検証

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
    works.csv              … 建築作品データ（CSV, 画像は id ベースで自動紐付け）
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