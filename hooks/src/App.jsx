import { Link, Route, Routes, Navigate } from "react-router-dom";
import { UseStateApp } from "./useState/UseStateApp";
import { UseEffectApp } from "./useEffect/UseEffectApp";
import { UseEffectAppTwo } from "./useEffect/UseEffectAppTwo";
import { UseContextApp } from "./useContext/UseContextApp";
import { UseRefApp } from "./useRef/UseRefApp";
import { UseMemoApp } from "./useMemo/UseMemoApp";

function Home() {
  return (
    <>
      <h1>React Hooks</h1>
      <Link to="/use-state">
        <h4>useState hook</h4>
      </Link>
      <Link to="/use-effect">
        <h4>useEffect hook</h4>
      </Link>
      <Link to="/use-effect-2">
        <h4>useEffect hook 2</h4>
      </Link>
      <Link to="/use-context">
        <h4>useContext hook</h4>
      </Link>
      <Link to="/use-ref">
        <h4>useRef hook</h4>
      </Link>
      <Link to="/use-memo">
        <h4>useMemo hook</h4>
      </Link>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseStateApp />} />
        <Route path="/use-effect" element={<UseEffectApp />} />
        <Route path="/use-effect-2" element={<UseEffectAppTwo />} />
        <Route path="/use-context" element={<UseContextApp />} />
        <Route path="/use-ref" element={<UseRefApp />} />
        <Route path="/use-memo" element={<UseMemoApp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
