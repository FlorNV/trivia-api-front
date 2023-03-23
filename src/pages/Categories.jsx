import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
import CategorySkeleton from "../components/CategorySkeleton";
import { QuestionsContext } from "../context/QuestionsContext";
import { SettingsContext } from "../context/SettingsContext";
import { useCategories } from "../hooks/useCategories";
import { getQuestions } from "../server";

const Categories = () => {
  const navigate = useNavigate();
  const { settings } = useContext(SettingsContext);
  const { setQuestions } = useContext(QuestionsContext);
  const { categories, isLoading } = useCategories();
  const [selected, setSelected] = useState("");

  const getQuestionServer = () => {
    getQuestions(selected, settings.limit, settings.difficulty)
      .then((data) => {
        setQuestions(data);
        navigate("/play");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="menu-container">
      <h3>Select a category</h3>
      <div className="flex">
        {isLoading
          ? [...Array(10)].map((category, index) => (
              <CategorySkeleton key={index} />
            ))
          : categories.map((category) => {
              const [key] = category;
              return (
                <Category
                  key={key}
                  category={category}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}
      </div>
      <div>
        <button
          onClick={getQuestionServer}
          className={`btn btn-cyan form-btn mt-3 ${
            !selected ? "disabled" : ""
          }`}
          disabled={selected === ""}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Categories;
