import React from "react";

const Category = ({ category, selected, setSelected }) => {
  const { key, values } = category;
  let value;
  if (values.length > 1) {
    value = values.filter((v) => v.includes("and"))[0];
  } else {
    value = values[0];
  }

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
