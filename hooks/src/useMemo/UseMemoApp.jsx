import { Link } from "react-router-dom";

export function UseMemoApp() {
  return (
    <>
      <h1>useMemo hook</h1>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
