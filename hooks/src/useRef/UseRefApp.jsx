import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export function UseRefApp() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <>
      <h1>useRef hook</h1>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <div>Name: {name}</div>
      <button onClick={focus}>Focus</button>
      <div>Rendered: {renderCount.current} times</div>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
