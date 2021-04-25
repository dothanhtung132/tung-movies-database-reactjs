import {
    ADD_MOVIE_TO_WATCHLIST,
    REMOVE_MOVIE_FROM_WATCHLIST,
} from '../constants/watchlistConstant';

export const addMovieToWatchlist = (movie) => dispatch => {
    dispatch({ type: ADD_MOVIE_TO_WATCHLIST, payload: movie });
};

export const removeMovieFromWatchlist = (id) => dispatch => {
    dispatch({ type: REMOVE_MOVIE_FROM_WATCHLIST, payload: id });
};
