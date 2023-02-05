import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function UseEffectApp() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [resourceType]);
  return (
    <>
      <h1>useEffect hook</h1>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>

      <Link to="/">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
