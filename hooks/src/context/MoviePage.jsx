import MovieList from "./MovieList";
import { useContext, useState } from "react";
import { UserContext } from "../App";

const MoviePage = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const userContext = useContext(UserContext);

  const onChangeMovie = (e) => {
    userContext.selectedMovie(e.target.value);
    setSelectedMovie(e.target.value);
  };

  return (
    <div>
      <input value={selectedMovie} onChange={onChangeMovie} />
      <MovieList />
    </div>
  );
};

export default MoviePage;
