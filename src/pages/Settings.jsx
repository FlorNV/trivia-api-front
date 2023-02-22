import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";
import { FiAlertCircle } from "react-icons/fi";
import Difficulty from "../components/Difficulty";

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
          <Difficulty
            difficulty={difficulty}
            value="easy"
            handleChange={handleChange}
          >
            Easy
          </Difficulty>
          <Difficulty
            difficulty={difficulty}
            value="medium"
            handleChange={handleChange}
          >
            Medium
          </Difficulty>
          <Difficulty
            difficulty={difficulty}
            value="hard"
            handleChange={handleChange}
          >
            Hard
          </Difficulty>
        </div>
      </div>
      <button className="btn btn-cyan form-btn mt-3" onClick={handleConfirm}>
        Confirm
      </button>
      {wasChanged && (
        <div className="alert">
          <span className="icon-container">
            <FiAlertCircle className="icon" />
            Save changes
          </span>
        </div>
      )}
    </form>
  );
};

export default Settings;
