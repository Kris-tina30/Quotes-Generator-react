import React, { useState } from "react";
import "../App.css";
import Button from "./Button";

function Quotes() {
  //useState

  const [quotesList, setQuotesList] = useState({ quote: "", author: "" });
  const [displey, setDispley] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuotesList((prev) => ({ ...prev, [name]: value }));
  };
  const onGenerate = (e) => {
    e.preventDefault();
    setDispley((prev) => [...prev, quotesList]);
    setQuotesList({ quote: "", author: "" }); // Очистити форму
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
