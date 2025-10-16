import { useState } from "react";

export default function Quiz() {
  const questions = [
    { id: 1, question: "React is a library for?", options: ["UI", "Backend", "Database"], answer: "UI" },
    { id: 2, question: "useState is a?", options: ["Hook", "Component", "Class"], answer: "Hook" }
  ];

  const [score, setScore] = useState(0);

  const handleAnswer = (q, option) => {
    if(option === q.answer) setScore(score + 1);
  };

  return (
    <div className="container my-5">
      <h3 className="mb-4">Quiz</h3>
      {questions.map(q => (
        <div key={q.id} className="mb-3">
          <p>{q.question}</p>
          {q.options.map(option => (
            <button key={option} className="btn btn-outline-primary me-2 mb-2" onClick={()=>handleAnswer(q, option)}>
              {option}
            </button>
          ))}
        </div>
      ))}
      <h4 className="mt-4">Score: {score}/{questions.length}</h4>
    </div>
  );
}
