import React from "react";

const Category = props => {
const { category, hideMobile } = props
  return (
    <div className={'Category ' + (hideMobile ? 'hide-mobile' : '')}>
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
