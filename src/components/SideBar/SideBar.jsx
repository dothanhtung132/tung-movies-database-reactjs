import { List, makeStyles } from '@material-ui/core';
import React from 'react';
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

  return (
    <div className='side-bar'>
      {
        requesting ?
          'requesting'
          :
          (data && data.Search && data.Search.length > 0) ?
            <List className={`movie-list ${classes.customScrollbar}`}>
              <div className='search-total-result'>{data.totalResults} RESULTS</div>
              {data.Search.map((movie) => {
                return (<SideBarListItem key={movie.imdbID} movie={movie} selected={selectedMovieId === movie.imdbID} />);
              })}
              <div className='load-more-result' onClick={handleLoadMore}>Load More...</div>
            </List>
            :
            <div>no items</div>
      }
    </div>
  );
};

export default SideBar;