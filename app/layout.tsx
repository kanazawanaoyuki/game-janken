import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "じゃんけんゲーム",
  description: "Next.js + React + TypeScriptで作るシンプルなじゃんけんゲーム"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
