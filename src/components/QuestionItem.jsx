import React, { useState, useEffect } from "react";
import { GiAlarmClock } from "react-icons/gi";

const QuestionItem = ({
  question,
  correctAnswer,
  incorrectAnswers,
  onAnswerSelected,
}) => {
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(10);
  const [width, setWidth] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [selected, setSelected] = useState("");
  const isSelectedAnswer = selected !== "";

  const handleClick = (e) => {
    setSelected(e.target.innerHTML);
    const isCorrectAnswer = e.target.innerHTML === correctAnswer;
    onAnswerSelected(isCorrectAnswer);
  };

  const disorder = () => {
    const array = [...incorrectAnswers, correctAnswer];
    for (let i = 0; i < array.length; i++) {
      const index = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
    return array;
  };

  useEffect(() => {
    setAnswers(disorder());
    let progressInterval = undefined;

    const questionInterval = setInterval(() => {
      onAnswerSelected(isSelectedAnswer);
      setIsRunning(false);
    }, 10000);

    const timerInterval = setInterval(() => {
      setTimer((value) => value - 1);
    }, 1000);

    if (isRunning) {
      progressInterval = setInterval(() => {
        setWidth((value) => value + 1);
      }, 100);
    }

    return () => {
      clearInterval(questionInterval);
      clearInterval(timerInterval);
      clearInterval(progressInterval);
    };
  }, [isRunning]);

  return (
    <div>
      <div className="timer">
        <div className="flex">
          <GiAlarmClock className="icon" />
          00:{timer < 10 ? "0" + timer : timer}
        </div>
        <div className="bar">
          <div className="progress" style={{ width: width + "%" }}></div>
        </div>
      </div>

      <div className="question">{question}</div>
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
