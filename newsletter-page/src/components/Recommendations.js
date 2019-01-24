import React, { Component } from "react";
import Categories from "../categories.json";
import Category from "./Category.js";
import Form from "./Form.js";

class Recommendations extends Component {
  state = {
    categories: Categories,
    hidden: true
  };
  showMore = e => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    return (
      <div className="Recommendations">
        <h1>Book Recommendations Just for You</h1>
        <h4 className="grey">
          Choose from the categories below and we will send you information
          about books you will love
        </h4>
        <div
          className={
            "categories-container " + (this.state.hidden ? "hidden" : "")
          }
        >
          {this.state.categories.map((category, i) => (
            <Category category={category} key={i} />
          ))}
        </div>
        <button className="btn" onClick={this.showMore}>
          {this.state.hidden ? 'Show all categories' : 'Show less'}
        </button>
        <Form />
      </div>
    );
  }
}
export default Recommendations;
