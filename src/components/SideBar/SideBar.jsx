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
  const totalResults = useSelector(state => state.movieList.totalResults);
  const requesting = useSelector(state => state.movieList.requesting);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch({ type: 'LOAD_MORE_RESULT' });
  }

  const { year } = useSelector(state => state.movieFilter);

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (!year) {
      setMovieList(data);
      return;
    }
    const [start, end] = year;
    let filterList = data.filter(movie => movie.Year >= start && movie.Year <= end);
    setMovieList(filterList);
  }, [year, data]);

  // function handleScroll() {
  //   if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  //   console.log('Fetch more list items!');
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className='side-bar'>
      {
        requesting && !movieList ?
          'requesting'
          :
          (movieList && movieList.length > 0) ?
            <List className={`movie-list ${classes.customScrollbar}`}>
              <div className='search-total-result'>{totalResults} RESULTS</div>
              {movieList.map((movie) => (
                <SideBarListItem key={movie.imdbID} movie={movie} />
              ))}
              <div className='load-more-result' onClick={handleLoadMore}>Load More...</div>
            </List>
            :
            <div className='no-result'>No Results</div>
      }
    </div>
  );
};

export default React.memo(SideBar);