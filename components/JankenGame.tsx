"use client";

import { useState } from "react";

type Hand = "グー" | "チョキ" | "パー";
type GameResult = "勝ち" | "負け" | "あいこ";

const hands: Hand[] = ["グー", "チョキ", "パー"];

const judgeResult = (playerHand: Hand, computerHand: Hand): GameResult => {
  if (playerHand === computerHand) {
    return "あいこ";
  }

  if (
    (playerHand === "グー" && computerHand === "チョキ") ||
    (playerHand === "チョキ" && computerHand === "パー") ||
    (playerHand === "パー" && computerHand === "グー")
  ) {
    return "勝ち";
  }

  return "負け";
};

export default function JankenGame() {
  const [playerHand, setPlayerHand] = useState<Hand | null>(null);
  const [computerHand, setComputerHand] = useState<Hand | null>(null);
  const [result, setResult] = useState<GameResult | null>(null);

  const playGame = (selectedHand: Hand) => {
    const randomIndex = Math.floor(Math.random() * hands.length);
    const randomComputerHand = hands[randomIndex];
    const gameResult = judgeResult(selectedHand, randomComputerHand);

    setPlayerHand(selectedHand);
    setComputerHand(randomComputerHand);
    setResult(gameResult);
  };

  const resetGame = () => {
    setPlayerHand(null);
    setComputerHand(null);
    setResult(null);
  };

  return (
    <main className="container">
      <section className="card">
        <h1>じゃんけんゲーム</h1>
        <p className="description">手をひとつ選んで、コンピューターと勝負しましょう。</p>

        <div className="buttonRow">
          {hands.map((hand) => (
            <button key={hand} className="handButton" onClick={() => playGame(hand)}>
              {hand}
            </button>
          ))}
        </div>

        <div className="resultArea">
          <p>
            あなたの手: <strong>{playerHand ?? "未選択"}</strong>
          </p>
          <p>
            コンピューターの手: <strong>{computerHand ?? "未選択"}</strong>
          </p>
          <p>
            結果: <strong>{result ?? "まだ勝負していません"}</strong>
          </p>
        </div>

        <button className="resetButton" onClick={resetGame}>
          もう一回 / リセット
        </button>
      </section>
    </main>
  );
}
