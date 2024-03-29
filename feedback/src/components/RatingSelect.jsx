import React, { useState, useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select, rating }) {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  const checkboxRender = () => {
    let checkboxes = [];
    for (let i = 1; i <= 10; i++) {
      checkboxes.push(
        <li key={i}>
          <input
            type="radio"
            id={`num${i}`}
            name="rating"
            value={i}
            onChange={handleChange}
            checked={selected === i}
          />
          <label htmlFor={`num${i}`}>{i}</label>
        </li>
      );
    }

    return checkboxes;
  };

  return <ul className="rating">{checkboxRender()}</ul>;
}

export default RatingSelect;
