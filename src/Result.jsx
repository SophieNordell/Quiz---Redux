import { useQuiz } from "./redux/quiz";

function Result() {
  const { score, questions } = useQuiz();

  return (
    <div>
      <p>
        Correct answers: {score} / {questions.length}
      </p>
    </div>
  );
}

export default Result;
