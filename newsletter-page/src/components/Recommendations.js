import React, { Component } from "react";
import Categories from "../categories.json";
import Category from "./Category.js";
import Form from "./Form.js";

class Recommendations extends Component {
  state = {
    categories: Categories,
    hidden: true,
    selected: [],
    showForm: false,
    errors: []
  };
  showMore = () => {
    this.setState({
      hidden: false
    });
  };
  handleCheck = e => {
    const id = e.target.closest("label").id;
    if (e.target.checked) {
      let selected = [...this.state.selected, id];
      this.setState({
        selected
      });
    } else if (!e.target.checked) {
      const selected = this.state.selected.filter(sId => {
        return sId !== id;
      });
      this.setState({
        selected
      });
    }

    if (!this.state.showForm) {
      this.setState({
        showForm: true
      });
    }
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
            "categories-container " + (this.state.hidden ? "hidden-mob" : "")
          }
        >
          {this.state.categories.map((category, i) => (
            <Category
              category={category}
              key={i}
              catId={i}
              handleCheck={this.handleCheck}
            />
          ))}
        </div>
        {this.state.hidden ? (
          <button className="btn show-more" onClick={this.showMore}>
            Show all categories
          </button>
        ) : (
          ""
        )}
        {this.state.showForm ? <Form selected={this.state.selected} errors={this.state.errors} /> : ""}
      </div>
    );
  }
}
export default Recommendations;
