import React from "react";

const Form = ({selected, erros}) => {
  return (
    <div className="Form">
      <p className="grey">
        Join our newsletter so we can send you book recommendations
      </p>
      <form>
        <div className="input-cont-first-name">
          <input className="first-name" placeholder="First name &#42;" type="text" />
        </div>
        <div className="input-cont-last-name">
          <input className="last-name" placeholder="Last name &#42;" type="text" />
        </div>
        <div className="input-cont-email">
          <input
            className="email"
            placeholder="Your email address &#42;"
            type="text"
          />
        </div>
        <button className="btn input-button">Subscribe</button>
      </form>
    </div>
  );
};
export default Form;
