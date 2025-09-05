import React, { useState, useEffect } from 'react';

import shoe1Left from '../assets//images/shoe1-left.png';
import shoe1Right from '../assets/images/shoe1-right.png';
import personLeft from '../assets/images/person-left.png';
import personRight from '../assets/images/person-right.png';
import dancer from '../assets/images/dancer.png';

const AdCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const ads = [
        {
            id: 1,
            content: (
                <>
                    <h2 className="ad-title">Limited Time Offer</h2>
                    <p className="ad-description">Get 25% off all sneakers this weekend only!</p>
                    <p className="ad-description">No code needed – discount applied at checkout.</p>
                </>
            ),
            imageLeft: shoe1Left,
            imageRight: shoe1Right,
            buttonText: 'Buy Now',
            bgColor: '#FA9842',
        },
        {
            id: 2,
            content: (
                <>
                    <h2 className="ad-title">Buy 2, Get 1 Free</h2>
                    <p className="ad-description">Mix & match across men's, women's, and kids' styles.</p>
                    <p className="ad-description">Add 3 to your cart — the lowest-priced pair is free.</p>
                </>
            ),
            imageLeft: personLeft,
            imageRight: personRight,
            buttonText: 'Buy Now',
            bgColor: '#FA9842',
        },
        {
            id: 3,
            content: (
                <>
                    <h2 className="ad-title">Made for Movement. Built to Last.</h2>
                    <p className="ad-description">We craft every pair with premium, eco-conscious materials to ensure comfort, durability, and sustainability.</p>
                </>
            ),
            imageLeft: dancer,
            imageRight: null,
            buttonText: 'Shop Now',
            bgColor: '#FA9842',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
        }, 5000); // 5 seconds (2s transition + 3s display)

        return () => clearInterval(interval);
    }, [ads.length]);

    return (
        <div className="ad-carousel-container">
            {ads.map((ad, index) => (
                <div
                    key={ad.id}
                    className={`ad-slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundColor: ad.bgColor }}
                >
                    {ad.imageLeft && (
                        <img
                            src={ad.imageLeft}
                            alt="promotional"
                            className="ad-image-left"
                        />
                    )}
                    {index === 1 && currentIndex === 1 && ad.buttonText && (
                        <button className="ad-button">
                            {ad.buttonText}
                        </button>
                    )}
                    <div className="ad-content">
                        {ad.content}
                    </div>
                    {!(index === 1 && currentIndex === 1) && ad.buttonText && (
                        <button className="ad-button">
                            {ad.buttonText}
                        </button>
                    )}
                    {ad.imageRight && (
                        <img
                            src={ad.imageRight}
                            alt="promotional"
                            className="ad-image-right"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default AdCarousel;