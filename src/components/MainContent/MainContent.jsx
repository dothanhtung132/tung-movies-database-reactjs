import { Button } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import React from 'react';
import './MainContent.scss';

const MainContent = () => {
    return (
        <div className='main-content'>
            <div className='movie-detail-container'>
                <div className='row-1'>
                    <div className='poster'>movie poster</div>
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
                            <div className='title'>The OMDb API is a RESTful web service to obtain movie information</div>
                            <div className='details'>The OMDb API is a RESTful </div>
                            <div className='crew'>didn't work for me but this one</div>
                        </div>
                    </div>
                </div>
                <div className='row-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className='row-3 rating'>
                    <div>
                        <div>8.7/10</div>
                        <div>Internet Movie Database</div>
                    </div>
                    <div>
                        <div>94%</div>
                        <div>Rotten Tomatoes</div>
                    </div>
                    <div>
                        <div>82/100</div>
                        <div>Metacritic</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;