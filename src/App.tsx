import { AppProvider } from "./context/AppProvider";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ContentCategory from "./components/ContentCategory";
import ContentDetails from "./components/ContentDetails";
import Populars from "./components/PopularsMovies";
import UpComingMovies from "./components/UpComingMovies";
import LatestsMovies from "./components/LatestsMovies";

function App() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/category" element={<ContentCategory />} />
            <Route path="/details" element={<ContentDetails />} />
            <Route path="/populars" element={<Populars />} />
            <Route path="/latests" element={<LatestsMovies />} />
            <Route path="/upcoming" element={<UpComingMovies />} />
            <Route path="/*" element={<Login />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
