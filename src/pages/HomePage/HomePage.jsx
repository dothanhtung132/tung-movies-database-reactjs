import React, { useCallback, useEffect } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/actions/movieAction';
import MsgDialog from '../../components/MsgDialog/MsgDialog';

const HomePage = () => {
    const movieFilter = useSelector(state => state.movieFilter) || {};
    const dispatch = useDispatch();

    const {title, type, page} = movieFilter;

    const movieFilterStr = JSON.stringify(movieFilter);
    const loadMoviesByFilter = useCallback(() => {
        dispatch(loadMovies(JSON.parse(movieFilterStr)));
        localStorage.setItem("movieFilter", movieFilterStr);
    }, [movieFilterStr, dispatch]);

    useEffect(() => {
        loadMoviesByFilter();
    }, [title, type, page, loadMoviesByFilter]);

    const movieDetailFull = useSelector(state => state.movieDetail.movieFull);
    const movieStr = JSON.stringify(movieDetailFull);
    useEffect(() => {
        localStorage.setItem("movieDetailFull", movieStr);
    }, [movieStr]);

    const watchlist = useSelector(state => state.watchlist.watchlist);
    const watchlistStr = JSON.stringify(watchlist);
    useEffect(() => {
        localStorage.setItem("watchlist", watchlistStr);
    }, [watchlistStr]);

    return (
        <div className='home-page'>
            <Header />
            <SideBar />
            <MainContent />
            <MsgDialog />
        </div>
    );
};

export default HomePage;