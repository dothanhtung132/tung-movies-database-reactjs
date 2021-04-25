import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const filterTypeData = [
    {
        id: "any",
        value: "Any"
    },
    {
        id: "movie",
        value: "Movies"
    },
    {
        id: "series",
        value: "Series"
    },
    {
        id: "episode",
        value: "Episodes"
    }
];
  
const FilterByType = ({type}) => {
    const [filterType, setFilterType] = useState(type ? type : 'any');
    const dispatch = useDispatch();

    const handleFilterByTypeChange = (event) => {
        const filterType = event.target.value;
        setFilterType(filterType);
        dispatch({type: 'FILTER_MOVIE_BY_TYPE', data: filterType});
    };

    return (
        <div className='filter-by-type'>
            <FormControl component="fieldset">
                <FormLabel component="legend">TYPE</FormLabel>
                <RadioGroup row aria-label="filterByType" name="filterByType" value={filterType} onChange={handleFilterByTypeChange}>
                    {filterTypeData.map(item => (
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