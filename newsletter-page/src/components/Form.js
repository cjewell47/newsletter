import React, { Component } from "react";

class Form extends Component {
  state = {
    errors: {
      first: false,
      last: false,
      email: false,
      privacy: false
    },
    firstName: "",
    lastName: "",
    emailAddr: "",
    privacyPol: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = {};
    
    if (this.props.selected.length === 0) {
      this.props.handleSubmitCheck();
    }

    errors.first = this.state.firstName === "" ? true : false;
    errors.last = this.state.lastName === "" ? true : false;
    errors.email = this.state.emailAddr === "" ? true : false;
    errors.privacy = !this.state.privacyPol;

    this.setState({
      errors: errors
    });

      if (!errors.first && !errors.last && !errors.email && !errors.privacy && this.props.selected.length !== 0) {
        this.props.handleSubmitted()
    }
  };

  handleFirst = e => {
    this.setState({
      firstName: e.target.value
    });
    if (e.target.value !== "") {
      this.setState({
        errors: {
          ...this.state.errors,
          first: false
        }
      });
    }
  };

  handleLast = e => {
    this.setState({
      lastName: e.target.value
    });
    if (e.target.value !== "") {
      this.setState({
        errors: {
          ...this.state.errors,
          last: false
        }
      });
    }
  };

  handleEmail = e => {
    const emailVal = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailVal.test(String(e.target.value).toLowerCase())) {
      this.setState({
        emailAddr: e.target.value,
        errors: {
          ...this.state.errors,
          email: false
        }
      });
    } else {
      this.setState({
        emailAddr: ""
      });
    }
  };

  handlePrivacy = e => {
    if (e.target.checked) {
      this.setState({
        privacyPol: true,
        errors: {
          ...this.state.errors,
          privacy: false
        }
      });
    } else {
      this.setState({
        privacyPol: false
      });
    }
  };

  render() {
    return (
      <div className="Form">
        <p className="grey center">
          Join our newsletter so we can send you book recommendations
        </p>
        <form>
          <div className="input-cont-first-name">
            <input
              className="first-name"
              placeholder="First name &#42;"
              type="text"
              onChange={this.handleFirst}
            />
            {this.state.errors.first ? (
              <p className="error-text">Please enter your first name</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-cont-last-name">
            <input
              className="last-name"
              placeholder="Last name &#42;"
              type="text"
              onChange={this.handleLast}
            />
            {this.state.errors.last ? (
              <p className="error-text">Please enter your last name</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-cont-email">
            <input
              className="email"
              placeholder="Your email address &#42;"
              type="text"
              onChange={this.handleEmail}
            />
            {this.state.errors.email ? (
              <p className="error-text">Please enter your email address</p>
            ) : (
              ""
            )}
          </div>
          <button className="btn input-button" onClick={this.handleSubmit}>
            Subscribe
          </button>
          <div className="tAndC">
            <input type="checkbox" onClick={this.handlePrivacy} />
            <span className="tc-checkmark" />
            <p className="grey">
              I agree to the <span className="privacy-pol">Privacy Policy</span>{" "}
              and I am over 16 years of age.
            </p>
            {this.state.errors.privacy ? (
              <p className="error-text">
                Please agree to the privacy policy and minimum age
              </p>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
