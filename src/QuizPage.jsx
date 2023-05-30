import { startQuiz, useQuiz } from "./redux/quiz";
import Quiz from "./Quiz";
import Result from "./Result";

export default function QuizPage() {
  const { showResult, quizStarted } = useQuiz();

  function render() {
    if (showResult) {
      return <Result />;
    } else if (quizStarted) {
      return <Quiz />;
    } else {
      return (
        <button
          className=" bg-green-400 border border-black mt-10 px-2 rounded-md  "
          onClick={() => startQuiz()}
        >
          Starta Quiz
        </button>
      );
    }
  }
  return <div>{render()}</div>;
}
