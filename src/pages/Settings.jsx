import React, { useEffect, useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";

const Settings = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const [data, setData] = useState({
    limit: 5,
    difficulty: "easy",
  });
  const { limit, difficulty } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "limit" && value < 5) {
      return;
    }
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setSettings(data);
    localStorage.setItem("settings", JSON.stringify(data));
  };

  useEffect(() => {
    if (settings) {
      setData(settings);
    }
  }, []);

  return (
    <form className="settings-form">
      <h2 className="form-title">Settings</h2>
      <div className="form-row">
        <h3 className="form-row__title">Question limit</h3>
        <input
          type="range"
          name="limit"
          value={limit}
          max="20"
          onChange={handleChange}
          className="slider"
        />
        <span className="label-slider">{limit}</span>
      </div>
      <div className="form-row">
        <h3 className="form-row__title">Difficulty</h3>
        <label
          className={`form-label-radio ${
            difficulty === "easy" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="difficulty"
            value="easy"
            checked={difficulty === "easy"}
            onChange={handleChange}
            className="form-radio"
          />
          Easy
        </label>
        <label
          className={`form-label-radio ${
            difficulty === "medium" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="difficulty"
            value="medium"
            checked={difficulty === "medium"}
            onChange={handleChange}
            className="form-radio"
          />
          Medium
        </label>
        <label
          className={`form-label-radio ${
            difficulty === "hard" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="difficulty"
            value="hard"
            checked={difficulty === "hard"}
            onChange={handleChange}
            className="form-radio"
          />
          Hard
        </label>
      </div>
      <button className="form-btn" onClick={handleConfirm}>
        Confirm
      </button>
    </form>
  );
};

export default Settings;
