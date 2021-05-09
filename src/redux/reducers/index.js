import { combineReducers } from 'redux';
import movieDetailReducer from './movieDetailReducer';
import movieListReducer from './movieListReducer';
import movieFilterReducer from './movieFilterReducer';
import watchlistReducer from './watchlistReducer';
import msgDialogReducer from './msgDialogReducer';

export default combineReducers({
    movieList: movieListReducer,
    movieDetail: movieDetailReducer,
    movieFilter: movieFilterReducer,
    watchlist: watchlistReducer,
    msgDialog: msgDialogReducer,
});