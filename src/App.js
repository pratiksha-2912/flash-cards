import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "You are beautiful",
    answer: "yes",
  },
  {
    id: 2,
    question: "React is what",
    answer: "javascript",
  },
  {
    id: 3,
    question: "You are beautiful",
    answer: "yes",
  },
  {
    id: 3,
    question: "building blocks of react",
    answer: "components",
  },
  {
    id: 4,
    question: "what the syntax",
    answer: "JSX",
  },
  {
    id: 5,
    question: "Are you enjoying this",
    answer: "yes",
  },
];

export default function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}
function FlashCards() {
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => {
            handleClick(question.id);
          }}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
