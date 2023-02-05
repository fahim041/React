import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export function UseMemoApp() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <h1>useMemo hook</h1>

      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
      </>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}

function slowFunction(num) {
  console.log("slow function!");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
