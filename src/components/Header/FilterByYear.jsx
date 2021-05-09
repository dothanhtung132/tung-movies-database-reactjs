import { Grid, Slider, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../../customHooks/useDebounce';

const FilterByYearSlider = withStyles({
    root: {
        color: '#ffffff',
        height: 6,
        marginTop: '2px'
    },
    thumb: {
        height: 16,
        width: 16,
        backgroundColor: '#c4c4c4',
    },
    track: {
        height: 6,
        backgroundColor: '#c4c4c4'
    },
    rail: {
        opacity: 1,
        height: 6,
        borderRadius: 3,
    }
})(Slider);

const FilterByYear = ({year}) => {
    const startYear = 1970;
    const endYear = new Date().getFullYear();
    const [filterYear, setFilterYear] = useState(year ? year : [startYear, endYear]);
    const dispatch = useDispatch();

    const debouncedFunc = useDebounce(value => {
        dispatch({type: 'FILTER_MOVIE_BY_YEAR', data: value});
    }, 500);

    const handleSliderChange = (event, newValue) => {
        setFilterYear(newValue);
        debouncedFunc(newValue);
    };
    return (
        <div className='filter-by-year'>
            <Typography id="filter-by-year-slider">
                YEAR
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography>{filterYear[0]}</Typography>
                </Grid>
                <Grid item xs>
                    <FilterByYearSlider
                        value={filterYear}
                        onChange={handleSliderChange}
                        aria-labelledby="filter-by-year-slider"
                        min={startYear}
                        max={endYear}
                    />
                </Grid>
                <Grid item>
                    <Typography>{filterYear[1]}</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default FilterByYear;