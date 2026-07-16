"use client";

import { useMemo, useState } from "react";

type Operation = "+" | "-" | "×" | "÷";

type Question = {
  a: number;
  b: number;
  op: Operation;
  answer: number;
};

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion(minNum: number, maxNum: number, operations: Operation[]): Question {
  const op = operations[randomInt(0, operations.length - 1)];
  let a = randomInt(minNum, maxNum);
  let b = randomInt(minNum, maxNum);

  if (op === "-" && b > a) {
    [a, b] = [b, a];
  }
  if (op === "×") {
    a = randomInt(1, 10);
    b = randomInt(1, 10);
  }
  if (op === "÷") {
    b = randomInt(2, 10);
    const quotient = randomInt(1, 10);
    a = b * quotient;
  }

  const answer =
    op === "+" ? a + b : op === "-" ? a - b : op === "×" ? a * b : a / b;
  return { a, b, op, answer };
}

export default function MathGame({
  title,
  minNum,
  maxNum,
  operations,
  questionCount = 10,
}: {
  title: string;
  minNum: number;
  maxNum: number;
  operations: Operation[];
  questionCount?: number;
}) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<"none" | "correct" | "wrong">("none");
  const [finished, setFinished] = useState(false);

  const question = useMemo(
    () => generateQuestion(minNum, maxNum, operations),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [round, minNum, maxNum]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim() === "") return;

    const isCorrect = Number(input) === question.answer;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      setFeedback("none");
      setInput("");
      if (round + 1 >= questionCount) {
        setFinished(true);
      } else {
        setRound((r) => r + 1);
      }
    }, 700);
  }

  function restart() {
    setRound(0);
    setScore(0);
    setInput("");
    setFeedback("none");
    setFinished(false);
  }

  if (finished) {
    const stars = score >= questionCount * 0.9 ? 3 : score >= questionCount * 0.6 ? 2 : score >= questionCount * 0.3 ? 1 : 0;
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-2">{title} — Terminé !</h2>
        <p className="text-slate-600 mb-4">
          Score : {score} / {questionCount}
        </p>
        <div className="text-4xl mb-6">
          {"⭐".repeat(stars)}
          {"☆".repeat(3 - stars)}
        </div>
        <button
          onClick={restart}
          className="bg-indigo-600 text-white font-medium px-6 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          Rejouer
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
        <span>{title}</span>
        <span>
          Question {round + 1} / {questionCount}
        </span>
      </div>

      <div className="text-center mb-8">
        <p className="text-5xl font-bold text-slate-900 tracking-wide">
          {question.a} {question.op} {question.b} = ?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          className={`w-32 text-center text-2xl border-2 rounded-xl py-2 outline-none transition ${
            feedback === "correct"
              ? "border-green-500 bg-green-50"
              : feedback === "wrong"
                ? "border-red-500 bg-red-50"
                : "border-slate-300 focus:border-indigo-500"
          }`}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white font-medium px-6 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          Valider
        </button>
      </form>

      {feedback === "correct" && (
        <p className="text-center text-green-600 font-medium mt-4">Bravo ! 🎉</p>
      )}
      {feedback === "wrong" && (
        <p className="text-center text-red-500 font-medium mt-4">
          Pas tout à fait, la réponse était {question.answer}
        </p>
      )}

      <div className="mt-6 text-center text-sm text-slate-500">Score actuel : {score}</div>
    </div>
  );
}
