import React, { useState } from "react";
import Question from "./Question";
const DisplayQuestions = () => {
  // Current QuestionId
  const [questionID, setQuestionID] = useState("AreaUnderTheCurve_901");

  // Array of Questions Id's
  let Questions = [
    "AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901",
  ];

  const nextQuestionHandel = () => {
    const currentIndex = Questions.indexOf(questionID);
    if (currentIndex === Questions.length - 1) {
      // If current question is the last question, set question ID to first question
      setQuestionID(Questions[0]);
    } else {
      // Otherwise, set question ID to the next question
      setQuestionID(Questions[currentIndex + 1]);
    }
  };
  const previousQuestionHandel = () => {
    const currentIndex = Questions.indexOf(questionID);
    if (currentIndex === 0) {
      // If current question is the first question, set question ID to last question
      setQuestionID(Questions[Questions.length - 1]);
    } else {
      // Otherwise, set question ID to the previous question
      setQuestionID(Questions[currentIndex - 1]);
    }
  };

  return (
    <div className="display_questions">
      <h1 className="display_questions__heading">Mathematics Questions</h1>
      <div className="display_questions__question">
        <div className="display_questions__question__inner">
          <Question QuestionID={questionID} />
        </div>
      </div>
      <div className="display_questions__buttons">
        <button
          className="display_questions__buttons__previous"
          onClick={previousQuestionHandel}
        >
          Previous
        </button>
        <button
          className="display_questions__buttons__next"
          onClick={nextQuestionHandel}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DisplayQuestions;
