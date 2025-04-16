import { useState } from "react";

export function useQuoteForm() {
  const [quotesList, setQuotesList] = useState({ quote: "", author: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuotesList((prev) => ({ ...prev, [name]: value }));
  };
  const resetForm = () => {
    setQuotesList({ quote: "", author: "" });
  };
  return { quotesList, handleChange, resetForm };
}
