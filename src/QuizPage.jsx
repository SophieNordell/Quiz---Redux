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
        <div className="flex flex-col items-center p-10">
          <img className="w-fit rounded-full " src="quiz.jpg"></img>
          <button
            className=" bg-purple-300 border border-black mt-10 px-5 rounded-full w-fit  "
            onClick={() => startQuiz()}
          >
            Starta Quiz
          </button>
        </div>
      );
    }
  }
  return <div>{render()}</div>;
}
