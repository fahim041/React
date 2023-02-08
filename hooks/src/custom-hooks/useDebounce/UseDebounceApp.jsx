import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "./useDebounce";

function searchCharacters(search) {
  const apiKey = "f9dfb1e8d466d36c27850bedd2047687";
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?title_like=^${search}`
  )
    .then((r) => r.json())
    .then((r) => {
      return r;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function UseDebounceApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debounceTerm) {
      setLoading(true);
      searchCharacters(debounceTerm).then((res) => {
        setLoading(false);
        setResults(res);
      });
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [debounceTerm]);
  return (
    <>
      <h1>useDebounce hook</h1>

      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {loading && <div>Searching ...</div>}

        <div>
          {results.map((e) => (
            <div key={e.id}>
              <h3>{e.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <Link to="/custom-hook">
        <button style={{ marginTop: "40px" }}>Home</button>
      </Link>
    </>
  );
}
