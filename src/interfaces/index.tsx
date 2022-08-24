export interface IUser {
    email: string;
    password: string;
}

export interface IState {
    isLogged: boolean;
    Categories?: any[];
    movies?: any[];
    selectedCategory?: number;
    selectedContent?: number;
    contentVideo?: any;
    popularsMovies?: any[];
    latestsMovies?: any[];
    upComingMovies?: any[];
    detailsMovie?: any;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface IPropsProvider {
    children: JSX.Element | JSX.Element[]
}

export interface IPropsError {
    text: string;
}