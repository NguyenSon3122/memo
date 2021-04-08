import { GET_lIST_MOVIE_STARTED, GET_lIST_MOVIE_SUCCESS, GET_lIST_MOVIE_FAILURE,
    SEARCH_LIST_MOVIE_STARTED, SEARCH_LIST_MOVIE_SUCCESS, SEARCH_LIST_MOVIE_FAILURE} from "./actionTypes";
import { getMovie, searchMovie } from "../api/getMovie";

const getListMovieStarted = () => ({
    type : GET_lIST_MOVIE_STARTED
});
const getListMovieSuccess = movies => ({
    type : GET_lIST_MOVIE_SUCCESS,
    payload: movies
});
const getListMovieFailure = error => ({
    type : GET_lIST_MOVIE_FAILURE,
    payload: {
        error
    }
});
const searchListMovieStarted = () => ({
    type : SEARCH_LIST_MOVIE_STARTED
});
const searchListMovieSuccess = movies => ({
    type : SEARCH_LIST_MOVIE_SUCCESS,
    payload: movies
});
const searchListMovieFailure = error => ({
    type : SEARCH_LIST_MOVIE_FAILURE,
    payload: {
        error
    }
});
export const getMovieAll = () => {
    return async dispatch => {
        dispatch(getListMovieStarted());
        await getMovie().then(res => {
            setTimeout(()=> {
                dispatch(getListMovieSuccess(res.Search))
            },5000)

        }).catch(err => {
            dispatch(getListMovieFailure('error'))
        })
    }
}
export const searchMovieAll = searchValue => {
    return  dispatch => {
        dispatch(searchListMovieStarted());
        searchMovie(searchValue).then(res => {
            setTimeout(()=> {
                dispatch(getListMovieSuccess(res.Search))
            },5000)
        }).catch(err => {
            dispatch(searchListMovieFailure(err.message))
        })
    }
}