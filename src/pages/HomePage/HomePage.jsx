import React from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import SideBar from '../../components/SideBar/SideBar';

const HomePage = () => {
    return (
        <div className='home-page'>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
};

export default HomePage;