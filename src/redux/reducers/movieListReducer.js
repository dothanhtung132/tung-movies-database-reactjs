import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from '../constants/movieConstant';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
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
                data: payload.data
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