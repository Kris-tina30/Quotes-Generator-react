import React from "react";

function Button({ onClick }) {
  return (
    <div>
      <button onClick={onClick}> New Quote</button>
    </div>
  );
}

export default Button;
