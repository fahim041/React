import { useState, useTransition } from "react";
import { Link } from "react-router-dom";

export function UseTransitionApp() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }

      setList(l);
    });
  }

  return (
    <>
      <h1>useTransition hook</h1>

      <div>
        <input type="text" value={input} onChange={handleChange} />
        {isPending
          ? "Loading..."
          : list.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
      </div>
      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
