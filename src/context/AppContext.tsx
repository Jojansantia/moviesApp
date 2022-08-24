import { createContext } from "react";
import { IState, IUser } from "../interfaces"

export type AppContextProps = {
    state: IState;
    logOut:() => void;
    toggleLogged:(user: IUser, exist?: boolean) => void;
    getGenres:() => void;
    getMovies:() => void;
    getContentDetails:(id: number) => void;
    getContentVideo:(id: number) => void;
    getPopularsMovies:() => void;
    getLatestsMovies:() => void;
    getUpComingMovies:() => void;
    setSelectedCategory:(id: number) => void;
    setSelectedContent:(id: number) => void;
} 

export const AppContext = createContext({} as AppContextProps);