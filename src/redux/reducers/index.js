import { combineReducers } from 'redux';
import movieDetailReducer from './movieDetailReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    movies: movieReducer,
    movieDetail: movieDetailReducer
});