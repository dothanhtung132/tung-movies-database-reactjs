import {
    SET_MOVIE_DETAIL,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_ERROR,
    Apikey
} from '../constants/movieConstant';

export const viewMovieDetail = (movie) => async dispatch => {
    try {
        dispatch({type: SET_MOVIE_DETAIL, movie: movie});
        dispatch({type: FETCH_MOVIE_DETAIL_REQUEST});
    
        const url = `https://www.omdbapi.com/?apikey=${Apikey}&i=${movie.imdbID}`;
        const response = await fetch(url);
        const responseJSON = await response.json();

        dispatch({type: FETCH_MOVIE_DETAIL_SUCCESS, data: responseJSON});
    } catch (error) {
        console.log('error :>> ', error);
        dispatch({type: FETCH_MOVIE_DETAIL_ERROR, message: error});
    }


}