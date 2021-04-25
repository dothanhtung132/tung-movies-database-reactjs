import {
    SET_MOVIE_DETAIL,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_ERROR
} from '../constants/movieConstant';

const initialState = {
    requesting: false,
    movie: null,
    movieFull: localStorage.getItem('movieDetailFull') ? JSON.parse(localStorage.getItem('movieDetailFull')) : null,
    message: null
}

const movieDetailReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case SET_MOVIE_DETAIL:
            return {
                ...state,
                movie: payload.movie
            };
        case FETCH_MOVIE_DETAIL_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case FETCH_MOVIE_DETAIL_SUCCESS:
            return {
                ...state,
                requesting: false,
                movieFull: payload.data
            };
        case FETCH_MOVIE_DETAIL_ERROR:
            return {
                ...state,
                requesting: false,
                message: payload.message
            };
                
        default:
            return state;
    }
};

export default movieDetailReducer;