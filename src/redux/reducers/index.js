import { combineReducers } from 'redux';
import movieDetailReducer from './movieDetailReducer';
import movieListReducer from './movieListReducer';
import movieFilterReducer from './movieFilterReducer';

export default combineReducers({
    movieList: movieListReducer,
    movieDetail: movieDetailReducer,
    movieFilter: movieFilterReducer
});