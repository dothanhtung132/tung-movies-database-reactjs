import {
    SET_MOVIE_DETAIL,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_SUCCESS,
    Apikey
} from '../constants/movieConstant';
import { showErrorDialog } from './msgDialogAction';

export const viewMovieDetail = (movie) => async dispatch => {
    try {
        dispatch({type: SET_MOVIE_DETAIL, movie: movie});
        dispatch({type: FETCH_MOVIE_DETAIL_REQUEST});
    
        const url = `https://www.omdbapi.com/?apikey=${Apikey}&i=${movie.imdbID}`;
        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON.Response === 'True') {
            dispatch({type: FETCH_MOVIE_DETAIL_SUCCESS, data: responseJSON});
        } else {
            dispatch(showErrorDialog(responseJSON.Error));
        }
    } catch (error) {
        dispatch(showErrorDialog(error));
    }


}