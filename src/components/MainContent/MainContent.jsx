import { Button, Menu, MenuItem } from '@material-ui/core';
import { Bookmark, BookmarkBorderOutlined } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToWatchlist, removeMovieFromWatchlist } from '../../redux/actions/watchlistAction';
import WithSpinner from '../Spinner/WithSpinner';
import './MainContent.scss';
import Watchlist from './Watchlist';

const MainContent = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const [openWatchlist, setOpenWatchlist] = useState(false);

    const movieDetailFull = useSelector(state => state.movieDetail.movieFull) || {};
    const isLoading = useSelector(state => state.movieDetail.requesting);

    const { imdbID, Title, Year, Genre, Poster, Actors, Runtime, Rated, Plot, Ratings } = movieDetailFull;

    const watchlist = useSelector(state => state.watchlist.watchlist) || [];

    const storedMovie = watchlist.find(movie => movie.imdbID === imdbID);
    const isInWatchlist = storedMovie ? true : false;

    const handleWatchlistClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const handleAddToWatchlist = () => {
        setAnchorEl(null);
        setTimeout(()=>{
            dispatch(addMovieToWatchlist(movieDetailFull));
        }, 100);
    }

    const handleRemoveFromWatchlist = () => {
        setAnchorEl(null);
        setTimeout(()=>{
            dispatch(removeMovieFromWatchlist(imdbID));
        }, 100);
    }

    const handleViewWatchlist = () => {
        setAnchorEl(null);
        setOpenWatchlist(true);
    }

    const handleWatchlistClose = useCallback(() => {
        setOpenWatchlist(false);
    }, []);

    return (
        <div className='main-content'>
            {
                imdbID ?
                    <div className='movie-detail-container'>
                        <div className='row-1'>
                            <div
                                className='poster'
                                style={{
                                    backgroundImage: `url(${Poster})`
                                }}
                            >
                            </div>
                            <div className='info-container'>
                                <div className='watchlist-button'>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={isInWatchlist ? <Bookmark /> : <BookmarkBorderOutlined />}
                                        onClick={handleWatchlistClick}
                                        aria-controls="watchlist-menu"
                                        aria-haspopup="true"
                                    >
                                        Watchlist
                                    </Button>
                                    <Menu
                                        id="watchlist-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        getContentAnchorEl={null}
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                                        >
                                        {!isInWatchlist ?
                                            <MenuItem onClick={handleAddToWatchlist}>Add To Watchlist</MenuItem>
                                            :
                                            <MenuItem onClick={handleRemoveFromWatchlist}>Remove From Watchlist</MenuItem>
                                        }
                                        <MenuItem onClick={handleViewWatchlist}>View Watchlist</MenuItem>
                                    </Menu>
                                </div>
                                <div className='info'>
                                    <div className='title'><h1>{Title}</h1></div>
                                    <div className='Genre'><span className='rated'>{Rated}</span> {Year} - {Genre} - {Runtime}</div>
                                    <div className='actors'>{Actors}</div>
                                </div>
                            </div>
                        </div>
                        <div className='row-2'>
                            {Plot}
                        </div>
                        <div className='row-3 rating'>
                            {
                                (Ratings && Ratings.length > 0) ?
                                    Ratings.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div>{item.Value}</div>
                                                <div>{item.Source}</div>
                                            </div>
                                        )
                                    })
                                    : ''
                            }
                        </div>
                        <Watchlist open={openWatchlist} onClose={handleWatchlistClose} watchlist={watchlist} />
                    </div>
                    : 'No Items'
            }
            <WithSpinner isLoading={isLoading} />
        </div>
    );
};

export default MainContent;