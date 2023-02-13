import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
import CategorySkeleton from "../components/CategorySkeleton";
import { QuestionsContext } from "../context/QuestionsContext";
import { SettingsContext } from "../context/SettingsContext";
import { getCategories, getQuestions } from "../server";

const Categories = () => {
  const navigate = useNavigate();
  const { settings } = useContext(SettingsContext);
  const { setQuestions } = useContext(QuestionsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");

  const getQuestionServer = () => {
    getQuestions(selected, settings.limit, settings.difficulty)
      .then((data) => {
        setQuestions(data);
        navigate("/play");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories()
      .then((data) => {
        let list = [];
        for (const key in data) {
          list.push({ key, values: data[key] });
        }
        setCategories(list);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="menu-container">
      <h3>Select a category</h3>
      <div className="flex">
        {isLoading
          ? [...Array(10)].map((category, index) => (
              <CategorySkeleton key={index} />
            ))
          : categories.map((category, index) => (
              <Category
                key={index}
                category={category}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
      </div>
      <div>
        <button
          onClick={getQuestionServer}
          className={`form-btn ${!selected ? "disabled" : ""}`}
          disabled={selected === ""}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Categories;
