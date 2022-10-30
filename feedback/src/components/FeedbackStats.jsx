import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const average = feedback
    .reduce((pre, curr) => {
      return pre + curr.rating / feedback.length;
    }, 0)
    .toFixed(2);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {average}</h4>
    </div>
  );
}

export default FeedbackStats;
