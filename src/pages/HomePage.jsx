import React from 'react';
import Navbar from '../components/HomePage UI/Navbar';
import Hero from '../components/HomePage UI/Hero';
import Features from '../components/HomePage UI/Features';
import Properties from '../components/HomePage UI/Properties';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Properties />
        </div>
    );
};

export default HomePage;