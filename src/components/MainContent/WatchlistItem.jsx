import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { viewMovieDetail } from '../../redux/actions/movieDetailAction';
import { removeMovieFromWatchlist } from '../../redux/actions/watchlistAction';

const WatchlistItem = ({ movie }) => {
    const { imdbID, Title, Year, Poster } = movie;

    const dispatch = useDispatch();

    const handleRemoveFromWatchlist = (event) => {
        event.stopPropagation();
        dispatch(removeMovieFromWatchlist(imdbID));
    }

    const handleWatchlistItemClick =  (event) => {
        event.stopPropagation();
        // dispatch(viewMovieDetail(movie));
        dispatch({type: 'FETCH_MOVIE_DETAIL_SUCCESS', data: movie});
    }

    return (
        <div className='movie-item' onClick={handleWatchlistItemClick}>
            <div
                className='movie-thumbnail'
                style={{
                    backgroundImage: `url(${Poster})`
                }}
            >
            </div>
            <div className='movie-info'>
                <div className='name'>{Title}</div>
                <div className='year'>{Year}</div>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={handleRemoveFromWatchlist}
                >
                    Remove From Watchlist
                </Button>
            </div>
        </div>
    );
};

export default WatchlistItem;