import { useQuiz, addQuestion } from "./redux/quiz";
import { useState } from "react";
import UpdateQuestion from "./UpdateQuestion";

export default function App() {
  const quizObject = useQuiz();
  const [title, setTitle] = useState();
  const [alt1, setAlt1] = useState();
  const [alt2, setAlt2] = useState();
  const [alt3, setAlt3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  function handleAdd() {
    const quiz = {
      title: title,
      alt1: alt1,
      alt2: alt2,
      alt3: alt3,
      correctAnswer: correctAnswer,
      id: Date.now(),
    };

    addQuestion(quiz);
  }

  return (
    <div className="border">
      <div className=" p-10 ">
        <label>Skriv din fråga här:</label>
        <input
          placeholder="Fråga..."
          id="adminInput"
          className="border border-black ml-2 mr-2"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border"
          type="text"
          placeholder="Alt1"
          onChange={(e) => setAlt1(e.target.value)}
        />
        <input
          className="border"
          placeholder="Alt2"
          type="text"
          onChange={(e) => setAlt2(e.target.value)}
        />
        <input
          className="border"
          placeholder="alt3"
          type="text"
          onChange={(e) => setAlt3(e.target.value)}
        />
        <label> Skriv rätt svar : </label>
        <input
          className="border"
          type="text"
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />

        <button
          className="border border-black rounded-lg ml-2 px-2 bg-slate-600 text-white"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {quizObject.questions.map((question) => {
        return <UpdateQuestion question={question} />;
      })}
    </div>
  );
}
