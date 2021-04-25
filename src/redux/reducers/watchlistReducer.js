import {
    ADD_MOVIE_TO_WATCHLIST,
    REMOVE_MOVIE_FROM_WATCHLIST,
} from '../constants/watchlistConstant';

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []
}

const watchlistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [payload, ...state.watchlist]
            };
        case REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.imdbID !== payload),
            };
        default:
            return state;
    }
};

export default watchlistReducer;