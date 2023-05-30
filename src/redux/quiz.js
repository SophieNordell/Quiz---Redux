import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizStarted: false,
  currentQuestion: 0,
  showResult: false,
  score: 0,
  questions: [
    {
      title: "Vilken enegidryck är bäst?",
      alt1: "Monster",
      alt2: "Redbull",
      alt3: "Burn",
      correntAnswer: 2,
      id: 1,
    },
    {
      title: "Hur många procent DNA delar vi människor med bananer?",
      alt1: "5%",
      alt2: "25%",
      alt3: "50%",
      correntAnswer: 3,
      id: 2,
    },
    {
      title:
        "Vilket land förbjöd Kalle Anka serien för att Kalle inte har byxor på sig?",
      alt1: "Finland",
      alt2: "Norge",
      alt3: "Sverige",
      correntAnswer: 1,
      id: 3,
    },
  ],
};

export const [
  useQuiz,
  { addQuestion, updateQuestion, deleteQuestion, startQuiz, answerQuestion },
] = createReduxModule("quiz", initialState, {
  addQuestion: (state, question) => {
    return { ...state, questions: [...state.questions, question] };
  },

  updateQuestion: (state, question) => {
    const newQuestion = state.questions.map((qu) => {
      if (qu.id == question.id) {
        return question;
      }
      return qu;
    });
    return {
      ...state,
      questions: newQuestion,
    };
  },
  deleteQuestion: (state, id) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== id),
    };
  },

  startQuiz: (state) => {
    return {
      ...state,
      quizStarted: true,
    };
  },

  answerQuestion: (state, alt) => {
    const question = state.questions[state.currentQuestion];
    let score = state.score;
    let currentQuestion = state.currentQuestion;
    let showResult = state.showResult;

    let correctAnswer = question.correntAnswer == alt;
    if (correctAnswer) {
      score += 1;
    }

    if (currentQuestion != state.questions.length - 1) {
      currentQuestion++;
    } else {
      showResult = true;
    }

    return {
      ...state,
      score,
      currentQuestion,
      showResult,
    };
  },
});
