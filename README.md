# game-janken

Next.js + React + TypeScript で作った、学習用のシンプルなじゃんけんゲームです。

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` を開くとゲームを遊べます。

## ファイル構成

```text
.
├─ app/
│  ├─ globals.css        # 全体スタイル
│  ├─ layout.tsx         # 共通レイアウト
│  └─ page.tsx           # トップページ
├─ components/
│  └─ JankenGame.tsx     # じゃんけんUI + ロジック
├─ package.json
└─ tsconfig.json
```
