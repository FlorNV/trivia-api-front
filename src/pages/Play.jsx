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
          <h3>
            Question {current + 1}/{questions.length}
          </h3>
          <h4>Score: {score}</h4>
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
          <h1>End Game</h1>
          <p>Score: {score}</p>
          <p>
            {score}/{questions.length}
          </p>
          {score === questions.length && <h2>Perfect!</h2>}
          <Link to="/">Go to menu</Link>
        </>
      )}
    </div>
  );
};

export default Play;
