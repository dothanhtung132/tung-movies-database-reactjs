import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogTitle, List, Typography } from '@material-ui/core';
import './Watchlist.scss';
import WatchlistItem from './WatchlistItem';

const Watchlist = ({ open, onClose, watchlist }) => {
    const handleClose = () => {
        onClose();
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="watchlist-dialog-title" open={open} scroll='paper'>
            <DialogTitle id="watchlist-dialog-title" disableTypography><Typography variant="h5">Watchlist</Typography></DialogTitle>
            <DialogContent dividers={true} style={{ width: '600px', height: '800px' }}>
                <List className='watchlist'>
                    {watchlist.map(movie => (
                        <WatchlistItem key={movie.imdbID} movie={movie} />
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
};

Watchlist.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    watchlist: PropTypes.array
};

export default Watchlist;