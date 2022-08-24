import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Genres from "./ui/Genres";
import NavBar from "./ui/NavBar";
import { ICategory } from "../interfaces"

const Home = () => {
  const { state, getGenres, getMovies } = useContext(AppContext);
  const { Categories, isLogged } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/");
    getGenres();
    getMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="m-5">Home</h1>
          {Categories &&
            Categories.map((category: ICategory) => {
              return <Genres id={category.id} name={category.name} key={category.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
