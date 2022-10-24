import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  const average = feedback.reduce((pre, curr) => {
    return pre + curr.rating / feedback.length;
  }, 0);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
