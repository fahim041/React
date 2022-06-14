import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default Counter;
