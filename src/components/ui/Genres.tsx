import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ICategory } from "../../interfaces"

const Genres = ({ id, name }: ICategory) => {
  const { setSelectedCategory } = useContext(AppContext);

  return (
    <div className="card m-1 shadow" style={{ width: "18rem" }}>
      <div
        className="card-body text-center"
        onClick={() => setSelectedCategory(id)}
        style={{ cursor: "pointer" }}
      >
        <h5
          className="card-title m-0"
          onClick={() => setSelectedCategory(id)}
        >
          {name}
        </h5>
      </div>
    </div>
  );
};

export default Genres;
