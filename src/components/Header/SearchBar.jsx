import { Grid, makeStyles, TextField } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    customSearchField: {
        "& input::placeholder": {
            color: "#ffffff"
        }
    }
});

const SearchBar = () => {
    const classes = useStyles();

    const [title, setTitle] = useState('');

    let timerIdRef = useRef();

    const handleTextFieldChange = (event) => {
        setTitle(event.target.value);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (timerIdRef.current) {
            clearTimeout(timerIdRef.current);
        }
        timerIdRef.current = setTimeout(()=>{
            if (title) {
                dispatch({type: 'FILTER_MOVIE_BY_TITLE', data: title});
            }
        }, 750);
        return () => clearTimeout(timerIdRef.current);
    }, [title, dispatch]);

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
                        onChange={handleTextFieldChange}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default SearchBar;