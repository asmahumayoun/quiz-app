import React, { useState } from "react";
import { questions } from "../questions";
import Question from "./Question";

function QuestionPage({
  score,
  setScore,
  setShowQuestionsPage,
  setShowFinalPage,
}) {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div>
      <Question
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        questions={questions}
        setShowQuestionsPage={setShowQuestionsPage}
        setShowFinalPage={setShowFinalPage}
        score={score}
        setScore={setScore}
      />
    </div>
  );
}

export default QuestionPage;
