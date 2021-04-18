import React from 'react';
import './SideBar.scss';

const SideBar = () => {
    return (
        <div className='side-bar'>
            <div className='search-total-result'>582 RESULTS</div>
            <div className='movie-list'>
            <div className='movie-item'>
                    <div className='movie-thumbnail'>image</div>
                    <div className='movie-info'>
                        <div className='name'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        <div className='year'>1970</div>
                    </div>
                </div>
                <div className='movie-item active'>
                    <div className='movie-thumbnail'>image</div>
                    <div className='movie-info'>
                        <div className='name'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        <div className='year'>1970</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;