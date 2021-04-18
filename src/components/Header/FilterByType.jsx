import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, styled } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const filterType = [
    {
        id: "any",
        value: "Any"
    },
    {
        id: "movies",
        value: "Movies"
    },
    {
        id: "series",
        value: "Series"
    },
    {
        id: "episodes",
        value: "Episodes"
    }
];
  
const FilterByType = () => {
    const [value, setValue] = React.useState('any');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className='filter-by-type'>
            <FormControl component="fieldset">
                <FormLabel component="legend">TYPE</FormLabel>
                <RadioGroup row aria-label="filterByType" name="filterByType" value={value} onChange={handleChange}>
                    {filterType.map(item => (
                        <FormControlLabel
                            label={item.value}
                            key={item.id}
                            value={item.id}
                            control={<Radio />}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default FilterByType;