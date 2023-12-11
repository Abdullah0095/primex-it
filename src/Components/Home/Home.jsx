import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../SharePage/Navbar/Navbar';
import Footer from './../SharePage/Footer/Footer';
import HomePageBanner from './HomePageBanner/HomePageBanner';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;