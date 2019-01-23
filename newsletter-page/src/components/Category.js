import React from 'react';

const Category = (category) => {
    return <div className="Category">
        <p>{category.category.name}</p>
        <img src={category.category.image} alt="" />
      </div>;
}
export default Category;