import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Movies from "./ui/Movies";
import NavBar from "./ui/NavBar";

const UpComingMovies = () => {
  const { state, getUpComingMovies } = useContext(AppContext);
  const { upComingMovies, isLogged } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/");
    getUpComingMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-100 text-center container mt-5">
      <NavBar />
      <h1 className="m-5">Próximamente</h1>
      <div className="d-flex flex-wrap justify-content-around">
        {upComingMovies &&
          upComingMovies.map((movie: any) => {
            return <Movies movie={movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
};

export default UpComingMovies;
