import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

function Quotes() {
  //useState

  const [quotes, setQuotes] = useState(null);

  const fetchQuote = () => {
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((result) => {
        setQuotes(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //useEffect

  useEffect(() => {
    fetchQuote();
  }, []);

  const onGenerate = () => {
    fetchQuote();
  };

  return (
    <div>
      {quotes && (
        <div>
          <p>{quotes.quote}</p>
          <p>{quotes.author}</p>
        </div>
      )}
      <Button onClick={onGenerate} />
    </div>
  );
}

export default Quotes;
