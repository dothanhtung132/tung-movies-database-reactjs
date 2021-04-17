import React from 'react';
import './Header.scss'
import FilterByType from './FilterByType';
import FilterByYear from './FilterByYear';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className='header'>
            <div className='search-bar-container'>
                <SearchBar />
            </div>
            <div className='movie-filter-container'>
                <FilterByYear />
                <FilterByType />
            </div>
        </div>
    );
};

export default Header;