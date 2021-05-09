import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewMovieDetail } from '../../redux/actions/movieDetailAction';

const SideBarListItem = ({movie}) => {
    const { imdbID, Title, Year, Poster } = movie;

    const movieDetail = useSelector(state => state.movieDetail.movie);
    const isSelected = movieDetail?.imdbID === imdbID;

    const isRequesting = useSelector(state => state.movieDetail.requesting);
    const dispatch = useDispatch();
    const handleMovieClick = () => {
        if (isSelected || isRequesting) return;
        dispatch(viewMovieDetail(movie));
    };
    
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