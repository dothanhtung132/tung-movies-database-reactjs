import { HIDE_DIALOG, SHOW_DIALOG } from "../constants/msgDialogConstant"

export function showMessageDialog(message) {
    return {
        type: SHOW_DIALOG,
        message: message,
    }
}

export function showErrorDialog(message) {
    return {
        type: SHOW_DIALOG,
        title: 'Error',
        message: message,
    }
}

export function hideMessageDialog() {
    return {
        type: HIDE_DIALOG
    }
}
