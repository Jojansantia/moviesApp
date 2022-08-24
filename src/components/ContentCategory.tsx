import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Movies from "./ui/Movies";
import NavBar from "./ui/NavBar";
import { ICategory } from "../interfaces"

const ContentCategory = () => {
  const [filterMovies, setFilterMovies] = useState<any[]>([]);
  const { state } = useContext(AppContext);
  const { movies, selectedCategory, isLogged, Categories } = state;
  const navigate = useNavigate();

  const getMoviesByGenrer = () => {
    let auxMovies: any[] = movies?.filter((movie: any) =>
      movie.genre_ids.includes(selectedCategory)
    ) || [];
    setFilterMovies(auxMovies);
  };

  useEffect(() => {
    if (!isLogged) navigate("/");
    if (selectedCategory) getMoviesByGenrer();
    // eslint-disable-next-line
  }, [selectedCategory]);

  let categoryName =
    Categories?.find((category: ICategory) => category.id === selectedCategory)
      ?.name || "";

  return (
    <div className="h-100 text-center container mt-5">
      <NavBar />
      <h1 className="m-5">{categoryName}</h1>
      <div className="d-flex flex-wrap justify-content-around">
        {filterMovies &&
          filterMovies.map((movie: any) => {
            return <Movies movie={movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
};

export default ContentCategory;
