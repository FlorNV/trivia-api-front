import React from "react";

const Difficulty = ({ difficulty, value, handleChange, children }) => {
  return (
    <label
      className={`form-label-radio ${difficulty === value ? difficulty : ""}`}
    >
      <input
        type="radio"
        name="difficulty"
        value={value}
        checked={difficulty === value}
        onChange={handleChange}
        className={`form-radio ${value}`}
      />
      {children}
    </label>
  );
};

export default Difficulty;
