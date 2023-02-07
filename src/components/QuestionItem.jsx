import React, { useState, useEffect } from "react";

const QuestionItem = ({
  question,
  correctAnswer,
  incorrectAnswers,
  onAnswerSelected,
}) => {
  //   const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(10);
  const [selected, setSelected] = useState("");
  const isSelectedAnswer = selected !== "";
  const answers = [...incorrectAnswers, correctAnswer];

  const handleClick = (e) => {
    setSelected(e.target.innerHTML);
    const isCorrectAnswer = e.target.innerHTML === correctAnswer;
    onAnswerSelected(isCorrectAnswer);
  };

  useEffect(() => {
    const questionInterval = setInterval(() => {
      onAnswerSelected(isSelectedAnswer);
    }, 10000);

    const timerInterval = setInterval(() => {
      setTimer((value) => value - 1);
    }, 1000);

    return () => {
      clearInterval(questionInterval);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div>
      <h3>Timer: {timer}</h3>
      <p>{question}</p>
      {answers.map((answer, index) => {
        let styles = "answer";
        if (isSelectedAnswer) {
          if (answer === selected) {
            if (answer === correctAnswer) {
              styles += " correct-answer";
            } else {
              styles += " incorrect-answer";
            }
          } else if (answer !== correctAnswer) {
            styles += " disabled";
          } else {
            styles += " correct-answer";
          }
        }
        return (
          <button
            key={index}
            className={styles}
            disabled={isSelectedAnswer}
            onClick={handleClick}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionItem;
