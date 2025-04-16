import React from "react";
import "../App.css";

function Button({ onClick }) {
  return (
    <div>
      <button className="button" onClick={onClick}>
        New Quote
      </button>
    </div>
  );
}

export default Button;
