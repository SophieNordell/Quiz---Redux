import { updateQuestion } from "./redux/quiz";
import { useState } from "react";
import { deleteQuestion } from "./redux/quiz";

export default function UpdateQuestion({ question }) {
  const [title, setTitle] = useState(question.title);
  const [alt1, setAlt1] = useState(question.alt1);
  const [alt2, setAlt2] = useState(question.alt2);
  const [alt3, setAlt3] = useState(question.alt3);
  const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer);

  function handleUpdate() {
    const newQuestion = {
      title,
      alt1,
      alt2,
      alt3,
      correctAnswer,
      id: question.id,
    };
    updateQuestion(newQuestion);
  }

  function handleDelete(id) {
    deleteQuestion(id);
  }

  return (
    <div className="flex justify-between">
      <div>
        <input
          className="border border-black mr-2"
          value={title}
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="border border-black mr-2"
          value={alt1}
          type="text"
          onChange={(event) => setAlt1(event.target.value)}
        />
        <input
          className="border border-black mr-2"
          value={alt2}
          type="text"
          onChange={(event) => setAlt2(event.target.value)}
        />
        <input
          className="border border-black mr-2"
          value={alt3}
          type="text"
          onChange={(event) => setAlt3(event.target.value)}
        />
        <input
          className="border border-black"
          value={correctAnswer}
          type="text"
          onChange={(event) => setCorrectAnswer(event.target.value)}
        />
      </div>
      <button
        className="bg-green-300 text-white rounded-lg text-xl p-2 mb-1"
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        className="bg-green-300 bg-text-white rounded text-xl p-2 ml-2"
        onClick={() => handleDelete(question.id)}
      >
        Delete
      </button>
    </div>
  );
}
