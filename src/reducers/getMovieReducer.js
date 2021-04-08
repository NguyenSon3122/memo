import { GET_lIST_MOVIE_STARTED, GET_lIST_MOVIE_SUCCESS, GET_lIST_MOVIE_FAILURE,
    SEARCH_LIST_MOVIE_STARTED, SEARCH_LIST_MOVIE_SUCCESS, SEARCH_LIST_MOVIE_FAILURE} from "../action/actionTypes";

const initialState = {
    loading: false,
    movies: [],
    error: null
}
export default function getMovieReducers(state = initialState, action) {
    switch (action.type) {
        case GET_lIST_MOVIE_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_lIST_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                movies: action.payload
            };
        case GET_lIST_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case SEARCH_LIST_MOVIE_STARTED:
            return {
                ...state,
                loading: true
            };
        case SEARCH_LIST_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                movies: action.payload
            };
        case SEARCH_LIST_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}