import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "./List";

export function UseCallbackApp() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //useMemo return the return value & useCallback return the entire function
  const getItems = useCallback(() => {
    console.log(typeof number);
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <h1>useCallback hook!</h1>

      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />

        <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
        <List getItems={getItems} />
      </div>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
