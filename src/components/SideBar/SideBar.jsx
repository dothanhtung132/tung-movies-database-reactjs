import { List } from '@material-ui/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SideBar.scss';
import SideBarListItem from './SideBarListItem';
import WithSpinner from '../Spinner/WithSpinner';

const SideBar = () => {
  let lastScroll = useRef(0);

  const data = useSelector(state => state.movieList.data);
  const totalResults = useSelector(state => state.movieList.totalResults);
  const isLoading = useSelector(state => state.movieList.requesting);

  const dispatch = useDispatch();

  const handleLoadMore = useCallback(() => {
      dispatch({ type: 'LOAD_MORE_RESULT' });
  }, [dispatch]);

  const { year } = useSelector(state => state.movieFilter) || {};

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

  const handleScroll = useCallback(() => {
    const scrollEl = document.getElementById('movie-list-container');
    let currentScroll = scrollEl.scrollTop;
    if (currentScroll > 0 && lastScroll.current <= currentScroll) {//is scroll down
      if (scrollEl.scrollHeight - scrollEl.scrollTop === scrollEl.clientHeight) {//is bottom
        console.log('Fetch more list items!');
        handleLoadMore();
      }
    }
    lastScroll.current = currentScroll;
  }, [handleLoadMore]);

  useEffect(() => {
    const scrollEl = document.getElementById('movie-list-container');
    scrollEl.addEventListener('scroll', handleScroll);
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className='side-bar'>
      {
        <>
        <List className={`movie-list`} id='movie-list-container'>
          <div className='search-total-result'>{totalResults} RESULTS</div>
          {(movieList && movieList.length > 0) ?
            <>
              {movieList.map((movie) => (
                <SideBarListItem key={movie.imdbID} movie={movie} />
              ))}
              <div className='load-more-result' onClick={handleLoadMore}>Load More...</div>
            </>
            :
            <div className='no-result'>No Results</div>}
        </List>
        <WithSpinner isLoading={isLoading} />
        </>
      }
    </div>
  );
};

export default React.memo(SideBar);