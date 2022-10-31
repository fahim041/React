import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="Github" />
      </div>
    </BrowserRouter>
  );
}

export default App;
