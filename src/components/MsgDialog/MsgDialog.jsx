import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideMessageDialog } from '../../redux/actions/msgDialogAction';

const MsgDialog = ({okButtonTitle='OK', showCancelBtn=false, okButtonCallback}) => {
    const msgDialog = useSelector(state => state.msgDialog);
    const {isOpen, title, message} = msgDialog;
   
    const dispatch = useDispatch();
   
    const handleClose = () => {
        dispatch(hideMessageDialog());
    }

    const handleOKButtonClick = () => {
        okButtonCallback && okButtonCallback();
        handleClose();
    }
    return (
        <div>
            <Dialog
                open={isOpen}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="msg-dialog-title"
                aria-describedby="msg-dialog-description"
                maxWidth='xl'
            >
                <DialogTitle id="msg-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="msg-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOKButtonClick} color="primary" variant="contained">{okButtonTitle}</Button>
                    {showCancelBtn ? <Button onClick={handleClose} variant="contained">Cancel</Button> : null}
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default MsgDialog;