import { Grid, makeStyles, TextField } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
    customSearchField: {
        "& input::placeholder": {
            color: "#ffffff"
        }
    }
});

const SearchBar = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1}>
                    <SearchRounded style={{ fontSize: '30px' }} />
                </Grid>
                <Grid item xs={11}>
                    <TextField fullWidth
                        id="search-movie-field"
                        placeholder="Search..."
                        InputProps={{
                            disableUnderline: true,
                            style: { fontSize: "24px", color: '#ffffff', fontWeight: '400' },
                            className: classes.customSearchField
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default SearchBar;