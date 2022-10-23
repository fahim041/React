import Card from "./shared/Card";
import PropTypes from 'prop-types';

function FeedbackItem({item:{rating, text}}) {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
