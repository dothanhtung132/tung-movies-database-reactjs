import React from 'react';
import './Header.scss'
import FilterByType from './FilterByType';
import FilterByYear from './FilterByYear';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';

const Header = () => {
    const {title, type, year} = useSelector(state => state.movieFilter) || {};
    return (
        <div className='header'>
            <div className='search-bar-container'>
                <SearchBar title={title} />
            </div>
            <div className='movie-filter-container'>
                <FilterByYear year={year} />
                <FilterByType type={type} />
            </div>
        </div>
    );
};

export default Header;