import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    Apikey
} from '../constants/movieConstant';

export const loadMovies = (movieFilter) => async dispatch => {
    let {title, type, page} = movieFilter;
    if (!title) return;
    try {
        dispatch({type: FETCH_MOVIES_REQUEST});
        const url = `https://www.omdbapi.com/?apikey=${Apikey}&s=${title}&type=${type === 'any' ? '' : type}&page=${page}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON.Response === 'True') {
            dispatch({type: FETCH_MOVIES_SUCCESS, data: responseJSON});
        } else {
            dispatch({type: FETCH_MOVIES_ERROR, message: responseJSON.Error});
        }
    } catch (error) {
        console.log('error :>> ', error);
        dispatch({type: FETCH_MOVIES_ERROR, message: error});
    }
}