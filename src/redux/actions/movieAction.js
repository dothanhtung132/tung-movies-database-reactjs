import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    Apikey
} from '../constants/movieConstant';

export const loadMovies = (search = 'star wars') => async dispatch => {
    try {
        dispatch({type: FETCH_MOVIES_REQUEST});

        const url = `https://www.omdbapi.com/?apikey=${Apikey}&s=${search}`;
        const response = await fetch(url);
        const responseJSON = await response.json();

        dispatch({type: FETCH_MOVIES_SUCCESS, data: responseJSON});
    } catch (error) {
        console.log('error :>> ', error);
        dispatch({type: FETCH_MOVIES_ERROR, message: error});
    }
}