import { useQuiz, answerQuestion } from "./redux/quiz";

function Quiz() {
  const { questions, currentQuestion } = useQuiz();
  const currentQuestionn = questions[currentQuestion];

  return (
    <div className="flex flex-col space-y-4 w-fit p-10">
      {currentQuestionn.title}
      <button
        className="bg-purple-300 text-green-50 rounded text-xl p-2 mt-5 hover:bg-purple-500 "
        onClick={() => answerQuestion(1)}
      >
        {currentQuestionn.alt1}
      </button>
      <button
        className="bg-purple-300 text-green-50 rounded text-xl p-2 mt-5  hover:bg-purple-500  "
        onClick={() => answerQuestion(2)}
      >
        {currentQuestionn.alt2}
      </button>
      <button
        className="bg-purple-300 text-green-50 rounded text-xl p-2 mt-5  hover:bg-purple-500 "
        onClick={() => answerQuestion(3)}
      >
        {currentQuestionn.alt3}
      </button>
    </div>
  );
}

export default Quiz;
