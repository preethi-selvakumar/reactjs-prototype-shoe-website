import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import shoeImage1 from '../assets/images/hero-shoe1.png';
import shoeImage2 from '../assets/images/hero-shoe2.png';
import shoeImage3 from '../assets/images/hero-shoe3.png';
import shoeImage4 from '../assets/images/hero-shoe4.png';
import shoeImage5 from '../assets/images/hero-shoe5.png';

import orangeBackground1 from '../assets/images/orange-bg.png';

const HeroSection = () => {
    // Use the useNavigate hook to get the navigation function
    const navigate = useNavigate();

    // Array containing all shoe images
    const heroData = [
        shoeImage1,
        shoeImage2,
        shoeImage3,
        shoeImage4,
        shoeImage5
    ];

    // State to track the current shoe
    const [currentShoeIndex, setCurrentShoeIndex] = useState(0);

    // Set the background image as a CSS variable
    useEffect(() => {
        document.documentElement.style.setProperty('--hero-background-image', `url(${orangeBackground1})`);
    }, []);

    // useEffect hook to change the shoe image automatically
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentShoeIndex((prevIndex) => (prevIndex + 1) % heroData.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(intervalId); // Clear interval when component unmounts
    }, [heroData.length]);

    return (
        <section className="hero-container">
            {/* Left side text and button section */}
            <div className="hero-content">
                <h1 className="hero-title">Step Into Style. Engineered for Comfort.</h1>
                <p className="hero-subtitle">
                    From the streets to the studio — discover shoes that move with you. Lightweight. Durable. Unmistakably bold.
                </p>
                {/* Button triggers navigation to Shop */}
                <button
                    className="hero-shop-btn"
                    onClick={() => navigate('/shop')}
                >
                    Shop the Collection
                </button>
                <p className="shipping-info">
                    Free shipping on all orders over Rs.500 + easy returns.
                </p>
            </div>

            {/* Right side shoe image */}
            <div className="hero-image-container">
                {/* Dynamically switch the shoe image */}
                <img
                    src={heroData[currentShoeIndex]}
                    alt="Stylish sneaker"
                    className="hero-shoe-image"
                />
            </div>
        </section>
    );
};

export default HeroSection;
