import { List, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SideBar.scss';
import SideBarListItem from './SideBarListItem';

const useStyles = makeStyles((theme) => ({
  customScrollbar: {
    "&::-webkit-scrollbar": {
      width: 12,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#c4c4c4",
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();

  const data = useSelector(state => state.movieList.data);
  const requesting = useSelector(state => state.movieList.requesting);

  const movieDetail = useSelector(state => state.movieDetail.movie);
  const selectedMovieId = movieDetail?.imdbID;

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch({ type: 'LOAD_MORE_RESULT' });
  }

  const { year } = useSelector(state => state.movieFilter);

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const [start, end] = year;
    let filterList = data.Search.filter(movie => movie.Year >= start && movie.Year <= end);
    console.log('filterList :>> ', filterList);
    setMovieList(filterList);
  }, [year, data]);

  return (
    <div className='side-bar'>
      {
        requesting ?
          'requesting'
          :
          (movieList && movieList.length > 0) ?
            <List className={`movie-list ${classes.customScrollbar}`}>
              <div className='search-total-result'>{data.totalResults} RESULTS</div>
              {movieList.map((movie) => {
                return (<SideBarListItem key={movie.imdbID} movie={movie} selected={selectedMovieId === movie.imdbID} />);
              })}
              <div className='load-more-result' onClick={handleLoadMore}>Load More...</div>
            </List>
            :
            <div className='no-result'>No Results</div>
      }
    </div>
  );
};

export default SideBar;