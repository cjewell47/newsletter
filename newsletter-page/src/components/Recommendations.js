import React, { Component } from 'react';
import Categories from '../categories.json';
import Category from './Category.js';
import Form from './Form.js'

class Recommendations extends Component {
    state = {
        categories: Categories,
        hidden: true
    }

    render () {
        return (
            <div className="Recommendations">
                <h1>Book Recommendations Just for You</h1>
                <h4 className="grey">Choose from the categories below and we will send you information about books you will love</h4>
                <div className="categories-container">
                    {this.state.categories.map((category, i) => <Category category={category} key={i} hideMobile={i > 2 ? true : false} />)}
                    <button className="btn">Show all categories</button>
                </div>
                <Form />
            </div>
        )
    }
}
export default Recommendations;