import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const NavBar = () => {
  const [collapse, setCollapse] = useState(false)
  const { logOut } = useContext(AppContext);

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
        <button onClick={() => setCollapse(collapse => !collapse)}  className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#asdas" aria-controls="asdas" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/home">
          Home
        </Link>

        <div className={`text-center navbar-collapse ${collapse && 'collapse'}`} id="asdas">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/populars">
                Populares
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/latests">
                Más recientes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">
                Próximamente
              </Link>
            </li>
          </ul>
          <button type="submit" className="btn btn-danger" onClick={() => logOut()}>
            Log out
          </button>
        </div>
      </nav>
  );
};

export default NavBar;
