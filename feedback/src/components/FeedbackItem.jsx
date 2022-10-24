import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({item:{id, rating, text}, handleDelete}) {

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close">
        <FaTimes color="purple" onClick={() => handleDelete(id)}/>
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
