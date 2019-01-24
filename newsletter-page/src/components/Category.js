import React from "react";

const Category = ({ category }) => {
  return (
    <div className="Category">
      <label className="category-checkbox">
        <input type="checkbox" />
        <span className="category-checkmark" data-label={category.name} />
      </label>
      <img
        src={category.image}
        alt={category.name + " icon"}
        className="category-logo"
      />
    </div>
  );
};
export default Category;
