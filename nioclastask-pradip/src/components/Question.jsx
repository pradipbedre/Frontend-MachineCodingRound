import React, { useEffect, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Question = ({ QuestionID }) => {
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuestionID}`
        )
          .then((data) => data.json())
          .then((data) => setQuestion(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [QuestionID]);

  // console.log(question);
  return (
    <MathJaxContext>
      <div className="question">
        {question && question ? (
          <MathJax>{question[0].Question}</MathJax>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MathJaxContext>
  );
};

export default Question;
