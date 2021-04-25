import React, { useCallback, useEffect } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/actions/movieAction';

const HomePage = () => {
    const movieFilter = useSelector(state => state.movieFilter);
    const dispatch = useDispatch();

    const {title, type, page} = movieFilter;
    const loadMoviesByFilter = useCallback(() => {
        dispatch(loadMovies(movieFilter));
        localStorage.setItem("movieFilter", JSON.stringify(movieFilter));
    }, [movieFilter, dispatch])
    useEffect(() => {
        loadMoviesByFilter();
    }, [title, type, page, loadMoviesByFilter]);

    const movieDetailFull = useSelector(state => state.movieDetail.movieFull);
    useEffect(() => {
        console.log('movieDetailFull :>> ', movieDetailFull);
        localStorage.setItem("movieDetailFull", JSON.stringify(movieDetailFull));
    }, [movieDetailFull]);

    const watchlist = useSelector(state => state.watchlist.watchlist);
    useEffect(() => {
        console.log('watchlist :>> ', watchlist);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    return (
        <div className='home-page'>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
};

export default HomePage;