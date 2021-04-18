import React from 'react';

const SideBarListItem = ({imdbID, Title, Type, Year, Poster}) => {
    return (
        <div className='movie-item'>
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