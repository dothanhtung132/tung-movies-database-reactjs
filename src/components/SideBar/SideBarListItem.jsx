import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewMovieDetail } from '../../redux/actions/movieDetailAction';

const SideBarListItem = ({movie}) => {
    const { Title, Year, Poster } = movie;

    const dispatch = useDispatch();
    const handleMovieClick = useCallback(() => {
        dispatch(viewMovieDetail(movie));
    }, [dispatch, movie]);

    const movieDetail = useSelector(state => state.movieDetail.movie) || {};
    const isSelected = movieDetail.imdbID === movie.imdbID;
    
    return (
        <div className={`movie-item ${isSelected ? 'active' : ''}`} onClick={handleMovieClick}>
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
            </div>
        </div>
    );
};

export default SideBarListItem;