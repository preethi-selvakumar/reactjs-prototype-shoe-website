import React from 'react';
import Navbar from '../components/Navbar';
import ShoeCollectionGrid from '../components/ShoeCollectionGrid';
import TrendingNow from '../components/TrendingNow';
import Footer from '../components/Footer';

const Collections = () => {
    return (
        <div className="other-pages-bg">
            <Navbar />
            <ShoeCollectionGrid />
            <TrendingNow />
            <Footer />
        </div>
    );
};

export default Collections;