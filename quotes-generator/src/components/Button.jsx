import React from "react";
import "../App.css";

function Button({ onClick }) {
  return (
    <button className="button" type="submit" onClick={onClick}>
      Add Quote
    </button>
  );
}

export default Button;
