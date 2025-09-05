import React from 'react';
import { Link } from 'react-router-dom';

// Product images imports
import monochromeImage from '../assets/images/monochrome.jpeg';
import sportImage from '../assets/images/sport.jpeg';
import seasonalImage from '../assets/images/seasonal.jpeg';
import travelImage from '../assets/images/travel.jpeg';
import workImage from '../assets/images/work.png';
import limitedImage from '../assets/images/limited.jpeg';

const productData = [
    {
        id: 1,
        name: 'Monochrome Collection',
        description: 'Modern looks and minimalist aesthetics.',
        prefix: 'Perfect for:',
        image: monochromeImage,
    },
    {
        id: 2,
        name: 'Sport & Activewear',
        description: 'training, gym, or high-movement activities.',
        prefix: 'Perfect for:',
        image: sportImage,
    },
    {
        id: 3,
        name: 'Seasonal Picks',
        description: 'current trends — like Summer Slides or Winter Boots.',
        prefix: 'Perfect for:',
        image: seasonalImage,
    },
    {
        id: 4,
        name: 'Travel-Friendly',
        description: 'vacations, weekend getaways, and long walks.',
        prefix: 'Perfect for:',
        image: travelImage,
    },
    {
        id: 5,
        name: 'Work & Office Shoes',
        description: 'daily wear at the office or business-casual outfits.',
        prefix: 'Perfect for:',
        image: workImage,
    },
    {
        id: 6,
        name: 'Limited Edition',
        description: 'collectors and statement-makers.',
        prefix: 'Perfect for:',
        image: limitedImage,
    },
];

const ShoeCollectionGrid = () => {
    const renderCards = (start, end) => {
        return productData.slice(start, end).map(product => (
            <div key={product.id} className="collection-grid-card">
                <div className="collection-grid-image-container">
                    <img src={product.image} alt={product.name} />
                </div>
                <h3 className="collection-grid-product-name">{product.name}</h3>
                <p className="collection-grid-product-desc">
                    <strong>{product.prefix}</strong> {product.description}
                </p>
                <Link to="/shop" className="collection-grid-check-btn">Check Now</Link>
            </div>
        ));
    };

    return (
        <section className="collection-grid-container">
            <div className="collection-grid-wrapper">
                <h2 className="sis-title">Step Into Style</h2>
                <p className="sis-para">Explore our full collection of shoes built for every moment — from everyday essentials to statement-makers.</p>

                <div className="collection-grid-row">
                    {renderCards(0, 3)}
                </div>
                <div className="collection-grid-row">
                    {renderCards(3, 6)}
                </div>
            </div>
        </section>
    );
};

export default ShoeCollectionGrid;