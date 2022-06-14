import { createContext, useState } from "react";
import MoviePage from "./context/MoviePage";

export const UserContext = createContext();

function App() {
  const [username, setUsername] = useState({
    username: "fahim",
    selectedMovie: "",
  });

  const selectedMovie = (movie) => {
    setUsername({ ...username, selectedMovie: movie });
  };

  return (
    <UserContext.Provider
      value={{ user: username, selectedMovie: selectedMovie }}>
      <MoviePage />
    </UserContext.Provider>
  );
}

export default App;
