import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { QuestionsContext } from "../context/QuestionsContext";
import QuestionItem from "../components/QuestionItem";

const Play = () => {
  const { questions } = useContext(QuestionsContext);
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isEndGame, setIsEndGame] = useState(false);
  const { question, correctAnswer, incorrectAnswers } = questions[current];

  const getNextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent((value) => value + 1);
    } else {
      setIsEndGame(true);
    }
  };

  const onAnswerSelected = (isCorrectAnswer) => {
    if (isCorrectAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      getNextQuestion();
    }, 1000);
  };

  return (
    <div className="container content-center">
      {!isEndGame ? (
        <>
          <div className="state">
            <div>
              Question {current + 1}/{questions.length}
            </div>
            <div>Score: {score}</div>
          </div>
          <QuestionItem
            key={current}
            question={question}
            correctAnswer={correctAnswer}
            incorrectAnswers={incorrectAnswers}
            onAnswerSelected={onAnswerSelected}
          />
        </>
      ) : (
        <>
          {score === questions.length ? (
            <h1 className="title green">Completed</h1>
          ) : (
            <h1 className="title">Game Over</h1>
          )}
          <div className="result">
            <p>Score: {score}</p>
            <p>
              {score}/{questions.length}
            </p>
          </div>
          <Link className="link" to="/">
            Go to menu
          </Link>
        </>
      )}
    </div>
  );
};

export default Play;
