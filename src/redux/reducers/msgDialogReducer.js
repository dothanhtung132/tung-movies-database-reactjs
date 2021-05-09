import { HIDE_DIALOG } from "../constants/msgDialogConstant";

const initialState = {
    title: null,
    message: null,
    isOpen: false
}

const msgDialogReducer = (state = initialState, action) => {
    const { type, message, title } = action;
    if (message) {
        return {
            ...state,
            title: title,
            message: message,
            isOpen: true
        }
    } else if (type === HIDE_DIALOG) {
        return initialState;
    }
    return state;
};

export default msgDialogReducer;