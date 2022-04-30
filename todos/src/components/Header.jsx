import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "Red" : "Green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onShow}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Todo App",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
