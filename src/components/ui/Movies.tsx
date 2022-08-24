import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import imgDefault from "../../assets/default.jpg";

const Categories = ({ movie }: any) => {
  const { setSelectedContent } = useContext(AppContext);

  return (
    <>
      <div className="card m-1 shadow" style={{ width: "18rem" }}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : imgDefault
          }
          className="card-img-top"
          alt={movie.original_title}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = imgDefault;
          }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{movie.original_title}</h5>
          <h5 className="card-subtitle mb-2 text-muted text-left">
            Popularity {movie.vote_average * 10} %
          </h5>
          <p className="card-text text-left textOverflow">{movie.overview}</p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setSelectedContent(movie.id)}
        >
          Ver más
        </button>
      </div>
    </>
  );
};

export default Categories;
