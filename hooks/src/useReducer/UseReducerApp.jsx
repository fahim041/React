import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function UseReducerApp() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [count, setCount] = useState(0);

  function increment() {
    // setCount((count) => count + 1);
    dispatch({ type: "increment" });
  }

  function decrement() {
    // setCount((count) => count - 1);
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <h1>useReducer hook</h1>
      <div>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </div>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
