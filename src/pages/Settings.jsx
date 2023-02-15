import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";
import { FiAlertCircle } from "react-icons/fi";

const Settings = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const [wasChanged, setwasChanged] = useState(false);
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

    setwasChanged(true);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setwasChanged(false);
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
      <div className="flex">
        <h2 className="form-title">Settings</h2>
        <Link className="link" to="/">
          Go Back
        </Link>
      </div>
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
        <div className="form-row__labels">
          <label
            className={`form-label-radio ${
              difficulty === "easy" && difficulty
            }`}
          >
            <input
              type="radio"
              name="difficulty"
              value="easy"
              checked={difficulty === "easy"}
              onChange={handleChange}
              className="form-radio easy"
            />
            Easy
          </label>
          <label
            className={`form-label-radio ${
              difficulty === "medium" && difficulty
            }`}
          >
            <input
              type="radio"
              name="difficulty"
              value="medium"
              checked={difficulty === "medium"}
              onChange={handleChange}
              className="form-radio medium"
            />
            Medium
          </label>
          <label
            className={`form-label-radio ${
              difficulty === "hard" && difficulty
            }`}
          >
            <input
              type="radio"
              name="difficulty"
              value="hard"
              checked={difficulty === "hard"}
              onChange={handleChange}
              className="form-radio hard"
            />
            Hard
          </label>
        </div>
      </div>
      <button className="form-btn" onClick={handleConfirm}>
        Confirm
      </button>
      {wasChanged && (
        <span className="alert">
          <FiAlertCircle className="icon" />
          Save changes
        </span>
      )}
    </form>
  );
};

export default Settings;
