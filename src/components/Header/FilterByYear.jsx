import { Grid, Slider, Typography, withStyles } from '@material-ui/core';
import React from 'react';

const CustomSlider = withStyles({
    root: {
        color: "#ffffff",
        height: 6,
    },
    track: {
        height: 6,
        backgroundColor: '#c4c4c4'
    },
    rail: {
        height: 6,
        borderRadius: 3,
        opacity: 1
    },
    thumb: {
        height: 15,
        width: 15,
        backgroundColor: '#c4c4c4'
    },
})(Slider);

const FilterByYear = () => {
    const [value, setValue] = React.useState([20, 70]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='filter-by-year'>
            <Typography id="continuous-slider">
                YEAR
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography>1970</Typography>
                </Grid>
                <Grid item xs>
                    <CustomSlider value={value} onChange={handleChange} aria-labelledby="range-slider" />
                </Grid>
                <Grid item>
                    <Typography>2015</Typography>
                </Grid>
            </Grid>



        </div>
    );
};

export default FilterByYear;