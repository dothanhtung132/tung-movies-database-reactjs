import React, {  } from 'react';

const SideBarListItem = ({movie, selected, handleMovieClick}) => {
    const { Title, Year, Poster } = movie;
    return (
        <div className={`movie-item ${selected ? 'active' : ''}`} onClick={handleMovieClick}>
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