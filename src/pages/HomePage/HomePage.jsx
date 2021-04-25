import React from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/actions/movieAction';

const HomePage = () => {
    const movieFilter = useSelector(state => state.movieFilter);
    console.log('movieFilter :>> ', movieFilter);

    const dispatch = useDispatch();
    dispatch(loadMovies(movieFilter));
    localStorage.setItem("movieFilter", JSON.stringify(movieFilter));

    const movieDetailFull = useSelector(state => state.movieDetail.movieFull) || {};
    localStorage.setItem("movieDetailFull", JSON.stringify(movieDetailFull));

    const watchlist = useSelector(state => state.watchlist.watchlist);//useMemo?
    localStorage.setItem("watchlist", JSON.stringify(watchlist));

    return (
        <div className='home-page'>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
};

export default HomePage;