import { useContext } from "react";
import { UserContext } from "../App";

const MovieList = () => {
  const userContext = useContext(UserContext);
  return (
    <div>
      <div>
        Movie List <br />
        username: {userContext.user.username}
      </div>{" "}
      <div>selected movie: {userContext.user.selectedMovie}</div>
    </div>
  );
};

export default MovieList;
