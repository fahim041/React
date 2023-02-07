import { Link } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

export function LocalStorageApp() {
  const [name, setName] = useLocalStorage("name", () => "");

  return (
    <>
      <h1>useLocalStorage hook</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <Link to="/custom-hook">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
