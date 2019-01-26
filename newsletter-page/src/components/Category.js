import React from "react";

const Category = ({ category, catId, handleCheck }) => {
  return (
    <div className="Category">
      <label className="category-checkbox" id={catId} onClick={handleCheck}>
        <input type="checkbox" />
        <span className="category-checkmark" />
        <span className="category-label">{category.name}</span>
        <img
          src={category.image}
          alt={category.name + " icon"}
          className="category-logo"
        />
      </label>
    </div>
  );
};
export default Category;
