import { IState, ICategory } from "../interfaces"

type AppAction = 
    | { type: 'toggleLogged', payload: boolean }
    | { type: 'setGenres', payload: Array<ICategory> }
    | { type: 'setMovies', payload: Array<any> }
    | { type: 'setCategoryId', payload: number }
    | { type: 'setContentId', payload: number }
    | { type: 'setContentVideo', payload: Array<any> }
    | { type: 'setPopularsMovies', payload: Array<any> }
    | { type: 'setLatestsMovies', payload: Array<any> }
    | { type: 'setUpComingMovies', payload: Array<any> }
    | { type: 'setContentDetails', payload: any }
    
export const AppReducer = (state: IState, action: AppAction) => {
    switch (action.type) {
        case "toggleLogged":
            return {
                ...state,
                isLogged: action.payload
            }
        case "setGenres":
            return {
                ...state,
                Categories: action.payload
            }
        case "setMovies":
            return {
                ...state,
                movies: action.payload
            }
        case "setCategoryId":
            return {
                ...state,
                selectedCategory: action.payload
            }
        case "setContentId":
            return {
                ...state,
                selectedContent: action.payload
            }
        case "setContentVideo":
            return {
                ...state,
                contentVideo: action.payload
            }
        case "setPopularsMovies":
            return {
                ...state,
                popularsMovies: action.payload
            }
        case "setLatestsMovies":
            return {
                ...state,
                latestsMovies: action.payload
            }
        case "setUpComingMovies":
            return {
                ...state,
                upComingMovies: action.payload
            }
        case "setContentDetails":
            return {
                ...state,
                detailsMovie: action.payload
            }
        default:
            return state;
    }
}