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
    },
    valueLabel: {
        left: -7,
        top: -22,
        '& *': {
          background: 'transparent',
          color: '#ffffff',
        },
    },
})(Slider);

const FilterByYear = () => {
    const [filterYear, setFilterYear] = useState([1970, 2015]);
    const dispatch = useDispatch();

    const debouncedFunc = useDebounce(value => {
        console.log('value :>> ', value);
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
                    <Typography>1970</Typography>
                </Grid>
                <Grid item xs>
                    <FilterByYearSlider
                        value={filterYear}
                        onChange={handleSliderChange}
                        aria-labelledby="filter-by-year-slider"
                        min={1970}
                        max={2015}
                        valueLabelDisplay="on"
                    />
                </Grid>
                <Grid item>
                    <Typography>2015</Typography>
                </Grid>
            </Grid>



        </div>
    );
};

export default FilterByYear;