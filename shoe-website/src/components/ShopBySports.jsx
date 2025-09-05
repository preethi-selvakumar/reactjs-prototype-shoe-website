import React from 'react';
import { Link } from 'react-router-dom';

import footballImage from '../assets/images/football-player.jpeg';
import runningImage from '../assets/images/running-player.jpeg';
import gymImage from '../assets/images/gym-player.jpeg';
import tennisImage from '../assets/images/tennis-player.jpeg';


const sportsData = [
    {
        id: 1,
        name: 'Football',
        image: footballImage,
        alt: 'Football Player',
    },
    {
        id: 2,
        name: 'Running',
        image: runningImage,
        alt: 'Running Player',
    },
    {
        id: 3,
        name: 'Gym',
        image: gymImage,
        alt: 'Gym Workout',
    },
    {
        id: 4,
        name: 'Tennis',
        image: tennisImage,
        alt: 'Tennis Player',
    },
];

const ShopBySports = () => {
    return (
        <section className="shop-by-sports-container">
            <h2 className="shop-by-sports-title">Shop By Sports</h2>

            <div className="sports-grid">
                {sportsData.map((sport) => (
                    <div key={sport.id} className="sport-card">
                        <div className="sport-image-wrapper">
                            <img src={sport.image} alt={sport.alt} className="sport-image" />
                            <div className="sport-hover-overlay"></div> {/* overlay on hover */}
                            <Link to="/shop" className="shop-now-button">Shop Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopBySports;