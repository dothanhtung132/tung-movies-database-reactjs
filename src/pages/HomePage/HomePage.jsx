import React, { useEffect } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/actions/movieAction';

const HomePage = () => {
    const {title, type, page} = useSelector(state => state.movieFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies({title, type, page}));
    }, [dispatch, title, type, page]);

    return (
        <div className='home-page'>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
};

export default HomePage;