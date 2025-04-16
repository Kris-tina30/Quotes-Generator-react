import React, { useState } from "react";
import "../App.css";
import Button from "./Button";
import { useQuoteForm } from "../hooks/useQuoteForm";

function Quotes() {
  //useQuoteForm hook

  const { quotesList, handleChange, resetForm } = useQuoteForm();
  const [displey, setDispley] = useState([]);

  const onGenerate = (e) => {
    e.preventDefault();
    setDispley((prev) => [...prev, quotesList]);
    resetForm(); // Очистити форму
  };
  return (
    <div>
      <form onSubmit={onGenerate} className="form">
        <input
          className="input"
          type="text"
          name="quote"
          value={quotesList.quote}
          onChange={handleChange}
          placeholder="your quote..."
        />
        <input
          className="input"
          type="text"
          name="author"
          value={quotesList.author}
          onChange={handleChange}
          placeholder="author quote..."
        />
        <Button onClick={onGenerate} />
      </form>

      <ul>
        {displey?.map((item, index) => {
          return (
            <li key={index}>
              <h2>{item.quote}</h2>
              <p>{item.author}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Quotes;
