import {
    FILTER_MOVIE_BY_TITLE,
    FILTER_MOVIE_BY_YEAR,
    FILTER_MOVIE_BY_TYPE,
    LOAD_MORE_RESULT
} from '../constants/movieConstant';

const initialState = localStorage.getItem('movieFilter') ? JSON.parse(localStorage.getItem('movieFilter')) : {
    title: '',
    type: null,
    year: null,
    page: 1
}
initialState.page = 1;//dont save current page

const movieFilterReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case FILTER_MOVIE_BY_TITLE:
            return {
                ...state,
                page: 1,
                title: payload.data
            };
        case FILTER_MOVIE_BY_YEAR:
            return {
                ...state,
                year: payload.data
            };
        case FILTER_MOVIE_BY_TYPE:
            return {
                ...state,
                page: 1,
                type: payload.data
            };
        case LOAD_MORE_RESULT:
            return {
                ...state,
                page: state.page + 1
            };
                            
        default:
            return state;
    }
};

export default movieFilterReducer;