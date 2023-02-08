import { Link } from "react-router-dom";
import useToggle from "./useToggle";

export function UseToggleApp() {
  const [value, toggleValue] = useToggle(false);
  return (
    <>
      <h1>useToggle hook</h1>

      <div>
        <div>{value.toString()}</div>
        <button onClick={toggleValue}>Toggle</button>
      </div>

      <Link to="/custom-hook">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
