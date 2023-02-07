import { useState, createContext } from "react";

export const QuestionsContext = createContext({
  questions: {},
  setQuestions: () => {},
});

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState(null);
  const value = { questions, setQuestions };

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};
