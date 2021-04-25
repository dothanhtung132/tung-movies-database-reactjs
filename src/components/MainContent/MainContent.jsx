import { Button } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import './MainContent.scss';

const MainContent = () => {

    const movieDetailFull = useSelector(state => state.movieDetail.movieFull) || {};

    const { imdbID, Title, Year, Genre, Poster, Actors, Runtime, Rated, Plot, Ratings } = movieDetailFull;

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
                                startIcon={<Bookmark />}
                            >
                                Watchlist
                            </Button>
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
            </div>
            : 'No Items'
            }
        </div>
    );
};

export default MainContent;