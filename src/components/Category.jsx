import React from "react";

const Category = ({ category, selected, setSelected }) => {
  const [key, values] = category;
  const value = values.filter((value) => value.includes("and"))[0] || values[0];

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <label
      className={`btn btn-outline category ${
        selected === value ? "selected" : ""
      }`}
    >
      <input
        type="radio"
        name="category"
        value={value}
        onChange={handleChange}
      />
      {key}
    </label>
  );
};

export default Category;
