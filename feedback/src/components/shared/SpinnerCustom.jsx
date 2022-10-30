import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

function SpinnerCustom({ show }) {
  return (
    <div className="spinner">
      <Spinner
        animation="border"
        variant=""
        style={{ width: "4rem", height: "4rem" }}
      />
    </div>
  );
}

export default SpinnerCustom;
