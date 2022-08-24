import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { AppReducer } from "./AppReducer";
import clienteAxios from "../config/Axios";
import { useNavigate } from "react-router-dom";
import { IState, IUser, IPropsProvider } from "../interfaces";

const INITIAL_STATE: IState = {
  isLogged: false,
  Categories: undefined,
  movies: undefined,
  selectedCategory: undefined,
  selectedContent: undefined,
  contentVideo: undefined,
  popularsMovies: undefined,
  latestsMovies: undefined,
  upComingMovies: undefined,
  detailsMovie: null,
};

export const AppProvider = ({ children }: IPropsProvider) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const toggleLogged = (user: IUser, exist?: boolean) => {
    if (!exist) sessionStorage.setItem("localUserData", JSON.stringify(user));
    navigate("/home");
    dispatch({ type: "toggleLogged", payload: true });
  };

  const logOut = () => {
    sessionStorage.removeItem("localUserData");
    navigate("/");
    dispatch({ type: "toggleLogged", payload: false });
  };

  
  const getGenres = async () => {
    let result = await clienteAxios.get(
      `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=es-Es`
    );
    let idsGenres = [12, 16, 35, 10751, 14];
    let latestResults = result.data.genres.filter((genrer: any) =>
      idsGenres.includes(genrer.id)
    );
    dispatch({ type: "setGenres", payload: latestResults });
  };

  const getMovies = async () => {
    let result = await Promise.all(
      [...Array(10)].map(async (x: number, i: number) => {
        const PAGE = i + 2;
        let response = await clienteAxios.get(
          `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=es-Es&page=` + PAGE
        );
        return response.data.results;
      })
    );

    dispatch({ type: "setMovies", payload: result.flat() });
  };

  const setSelectedCategory = (id: number) => {
    navigate("/category");
    dispatch({ type: "setCategoryId", payload: id });
  };

  const setSelectedContent = (id: number) => {
    navigate("/details");
    dispatch({ type: "setContentId", payload: id });
  };

  const getContentDetails = async (idMovie: number) => {
    dispatch({ type: "setContentDetails", payload: null });
    let result: any = await clienteAxios.get(
      `/movie/${idMovie}?api_key=${process.env.REACT_APP_API_KEY}&language=es-Es`
    );
    dispatch({ type: "setContentDetails", payload: result.data });
  };

  const getContentVideo = async (idMovie: number) => {
    dispatch({ type: "setContentVideo", payload: [] });
    let result: any = await clienteAxios.get(
      `/movie/${idMovie}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=es-Es`
    );
    dispatch({ type: "setContentVideo", payload: result.data.results });
  };

  const getPopularsMovies = async () => {
    let result: any = await clienteAxios.get(
      `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=es-Es&page=1`
    );
    dispatch({ type: "setPopularsMovies", payload: result.data.results });
  };

  const getLatestsMovies = async () => {
    let result: any = await clienteAxios.get(
      `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=es-Es&page=1`
    );
    dispatch({ type: "setLatestsMovies", payload: result.data.results });
  };

  const getUpComingMovies = async () => {
    let result: any = await clienteAxios.get(
      `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=es-Es&page=1`
    );
    dispatch({ type: "setUpComingMovies", payload: result.data.results });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        toggleLogged,
        getGenres,
        getMovies,
        setSelectedCategory,
        setSelectedContent,
        getContentVideo,
        getPopularsMovies,
        getLatestsMovies,
        getUpComingMovies,
        getContentDetails,
        logOut
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
