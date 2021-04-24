import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    LOAD_MORE_RESULT
} from '../constants/movieConstant';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: [],
    totalResults: 0,
    currentPage: 1
}

const movieListReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                requesting: true
            };
    
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.currentPage > state.currentPage ? [...state.data, ...payload.data.Search] : payload.data.Search,
                totalResults: payload.data.totalResults,
                currentPage: payload.currentPage
            };
        
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                requesting: false,
                message: payload.message
            };

        default:
            return state;
    }
};

export default movieListReducer;