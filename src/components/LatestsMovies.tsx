import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Movies from "./ui/Movies";
import NavBar from "./ui/NavBar";

const LatestsMovies = () => {
  const { state, getLatestsMovies } = useContext(AppContext);
  const { latestsMovies, isLogged } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/");
    getLatestsMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-100 text-center container mt-5">
      <NavBar />
      <h1 className="m-5">Más recientes</h1>
      <div className="d-flex flex-wrap justify-content-around">
        {latestsMovies &&
          latestsMovies.map((movie: any) => {
            return <Movies movie={movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
};

export default LatestsMovies;
