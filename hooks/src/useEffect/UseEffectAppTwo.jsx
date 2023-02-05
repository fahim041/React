import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function UseEffectAppTwo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <>
      <h1>usEffect hook 2</h1>

      <div>{windowWidth}</div>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
