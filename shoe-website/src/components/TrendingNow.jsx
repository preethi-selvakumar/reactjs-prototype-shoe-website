import React from 'react';

// Import images
import sneakersImage from '../assets/images/asics-shoe.png';
import bootsImage from '../assets/images/bot.png';
import dressShoesImage from '../assets/images/stylish.png';
import athleticShoesImage from '../assets/images/athletic.png';

const TrendingNow = ({ bgColor }) => {
    return (
        <div
            className="trending-now-section"
            style={{ backgroundColor: bgColor || 'transparent' }} 
        >
            <h2>Trending Now</h2>
            <p>Explore our best-selling styles of the season — fresh drops, limited editions, and timeless staples you'll wear on repeat.</p>
            <div className="trending-products-container">
                {/* Sneaker card */}
                <div className="trending-now-card card-1">
                    <div className="image-container">
                        <img src={sneakersImage} alt="Sneakers" />
                    </div>
                    <h3>Sneakers</h3>
                    <p>Fresh, bold, and always comfortable.</p>
                    <button>Shop Now</button>
                </div>

                {/* Boots card */}
                <div className="trending-now-card card-2">
                    <div className="image-container">
                        <img src={bootsImage} alt="Boots" />
                    </div>
                    <h3>Boots</h3>
                    <p>Built to go the <br />distance.</p>
                    <button>Shop Now</button>
                </div>

                {/* Dress Shoes card */}
                <div className="trending-now-card card-3">
                    <div className="image-container">
                        <img src={dressShoesImage} alt="Dress Shoes" className="flip-image" />
                    </div>
                    <h3>Dress Shoes</h3>
                    <p>Polished. Powerful. <br />Timeless.</p>
                    <button>Shop Now</button>
                </div>

                {/* Athletic Shoes card with special class for last item alignment */}
                <div className="trending-now-card last-trending-now-card card-4">
                    <div className="image-container">
                        <img src={athleticShoesImage} alt="Athletic & Performance Shoes" className="flip-image" />
                    </div>
                    <h3>Athletic & Performance</h3>
                    <p>Fresh, bold, and always comfortable.</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingNow;