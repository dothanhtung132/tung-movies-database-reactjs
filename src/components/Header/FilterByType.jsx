import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

const FilterByType = () => {
    const [value, setValue] = React.useState('any');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">TYPE</FormLabel>
                <RadioGroup row aria-label="filterByType" name="filterByType" value={value} onChange={handleChange}>
                    <FormControlLabel value="any" control={<Radio color="default" />} label="Any" />
                    <FormControlLabel value="movies" control={<Radio color="default" />} label="Movies" />
                    <FormControlLabel value="series" control={<Radio color="default" />} label="Series" />
                    <FormControlLabel value="episodes" control={<Radio color="default" />} label="Episodes" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default FilterByType;