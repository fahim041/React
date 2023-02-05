import { useState } from "react";
import { Link } from "react-router-dom";

export function UseStateApp() {
  const [num, setNum] = useState(4);
  return (
    <>
      <h1>useState hook</h1>
      <div>
        <button onClick={() => setNum(num - 1)}>-</button>
        <span>{num}</span>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
