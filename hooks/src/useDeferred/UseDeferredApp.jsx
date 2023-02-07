import { useDeferredValue, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "./List";

export function UseDeferredApp() {
  const [input, setInput] = useState("");

  return (
    <>
      <h1>useDeferred hook</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <List input={input} />

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
