import { useQuiz } from "./redux/quiz";

function Result() {
  const { score, questions } = useQuiz();

  return (
    <div className="p-10">
      <p>
        Correct answers: {score} / {questions.length}
      </p>
    </div>
  );
}

export default Result;
