import { Grid, Slider, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';

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
})(Slider);
  
const FilterByYear = () => {
    const [value, setValue] = useState([20, 70]);
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
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
                        value={value}
                        onChange={handleSliderChange}
                        aria-labelledby="filter-by-year-slider"
                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
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