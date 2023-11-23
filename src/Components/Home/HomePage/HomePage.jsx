import React from 'react';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomePageHire from '../HomePageHire/HomePageHire';
import HomePageAbout from '../HomePageAbout/HomePageAbout';

const HomePage = () => {
    return (
        <div>
            <HomePageBanner />
            <HomePageHire />
            <HomePageAbout />
        </div>
    );
};

export default HomePage;