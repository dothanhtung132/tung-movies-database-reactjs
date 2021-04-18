import React, { useEffect } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch } from 'react-redux';
import { loadMovies } from '../../redux/actions/movieAction';

const HomePage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch]);

    return (
        <div className='home-page'>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
};

export default HomePage;