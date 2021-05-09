import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    Apikey
} from '../constants/movieConstant';
import { showErrorDialog } from './msgDialogAction';

export const loadMovies = ({title, type, page}) => async dispatch => {
    if (!title) return;
    try {
        dispatch({type: FETCH_MOVIES_REQUEST});
        const url = `https://www.omdbapi.com/?apikey=${Apikey}&s=${title}&type=${(!type || type === 'any') ? '' : type}&page=${page}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON.Response === 'True') {
            dispatch({type: FETCH_MOVIES_SUCCESS, data: responseJSON, currentPage: page});
        } else {
            dispatch(showErrorDialog(responseJSON.Error))
        }
    } catch (error) {
        // console.log('error :>> ', error);
        dispatch(showErrorDialog(error))
    }
}