import { Link } from "react-router-dom";
import { Theme } from "./Theme";
import { ThemeProvider } from "./ThemeContext";
export function UseContextApp() {
  return (
    <>
      <h1>useContext hook</h1>
      <ThemeProvider>
        <Theme />
      </ThemeProvider>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
