import { useState } from "react";

export default function Quiz({ quiz }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  if (!quiz || quiz.length === 0) return null;

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrent(current + 1);
  };

  if (current >= quiz.length)
    return <p className="text-center font-bold">Your Score: {score}/{quiz.length}</p>;

  const q = quiz[current];

  return (
    <div className="border rounded p-4 mb-6 bg-gray-50">
      <p className="font-bold mb-2">{q.question}</p>
      <div className="flex flex-col gap-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.isCorrect)}
            className="border rounded p-2 hover:bg-gray-200 transition"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
