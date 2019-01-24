import React from 'react';
import Categories from '../categories.json';
import Category from './Category.js';
import Form from './Form.js'

const Recommendations = () => {
    const categories = Categories;
    return (
        <div className="Recommendations">
            <h1>Book Recommendations Just for You</h1>
            <h4 className="grey">Choose from the categories below and we will send you information about books you will love</h4>
            <div className="categories-container">
                {categories.map((category, i) => <Category category={category} key={i} />)}
            </div>
            <Form />
        </div>
    )
}
export default Recommendations;