import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

// Import product images
import retroSneakers from '../assets/images/retro-sneakers.png';
import designerSneakers from '../assets/images/designer-sneakers.png';
import slipOnSneakers from '../assets/images/slip-on-sneakers.png';
import chunkyPlatformSneakers from '../assets/images/chunky-platform-sneakers.png';
import runningSneakers from '../assets/images/running-sneakers.png';
import lifestyleSneakers from '../assets/images/lifestyle-sneakers.png';

import heartIconImage from '../assets/images/heart-icon.png';
import filledHeartIconImage from '../assets/images/filled-heart-icon.png';

const products = [
    {
        name: 'Retro & Classic Sneakers',
        brand: 'PUMA',
        description: 'PUMA Super Liga OG Retro Sneaker - Men\'s - Free Shipping | DSW',
        freeShipping: true,
        price: '1,299',
        oldPrice: '1,499',
        rating: 4.5,
        reviewCount: '1235',
        image: retroSneakers,
    },
    {
        name: 'Designer & Luxury Sneakers',
        brand: 'Tendance',
        description: 'Tendance sporty, les sneakers s\'offrent un dressing couture',
        price: '1,699',
        oldPrice: '1,999',
        rating: 4.5,
        reviewCount: '1115',
        image: designerSneakers,
    },
    {
        name: 'Slip-On Sneakers',
        brand: 'Allbirds',
        description: 'Allbirds Men\'s Tree Dasher Relay, Slip-On Sneakers, Blue',
        price: '1,599',
        oldPrice: '1,899',
        rating: 4.5,
        reviewCount: '135',
        image: slipOnSneakers,
    },
    {
        name: 'Chunky & Platform Sneakers',
        brand: 'PUMA',
        description: 'PUMA Womens Club II Era Platform Sd Sneakers I Pink',
        price: '1,299',
        oldPrice: '1,599',
        rating: 4.5,
        reviewCount: '168',
        image: chunkyPlatformSneakers,
    },
    {
        name: 'Running Sneakers',
        brand: 'The Cloudultra 2',
        description: 'The Cloudultra 2: Cushioned, Ultrarunning Trail Shoe',
        price: '1,349',
        oldPrice: '1,549',
        rating: 4.5,
        reviewCount: '155',
        image: runningSneakers,
    },
    {
        name: 'Lifestyle Sneakers',
        brand: 'PUMA',
        description: 'PUMA Mens Speedcat Shield Sd Lace Up Sneakers Shoes Casual',
        price: '1,799',
        oldPrice: '1,549',
        rating: 4.5,
        reviewCount: '155',
        image: lifestyleSneakers,
    },
];

const ProductCard = ({ product, index }) => {
    const { addToWishlist, wishlist, handleProductSelect } = useAppContext();

    let imageClass = 'pg-product-image';
    if (index === 0 || index === 3 || index === 4) {
        imageClass += ' pg-image-flip-rotate';
    } else if (index === 1 || index === 2 || index === 5) {
        imageClass += ' pg-image-rotate';
    }
    if (index === 0) {
        imageClass += ' pg-first-image';
    }

    const isAdded = wishlist.some(item => item.name === product.name);

    return (
        <div className="pg-product-card">
            <div className="pg-favorite-icon" onClick={() => addToWishlist(product)}>
                <img
                    src={isAdded ? filledHeartIconImage : heartIconImage}
                    alt="Favorite"
                    className="pg-heart-icon"
                />
            </div>
            <img
                src={product.image}
                alt={product.name}
                className={imageClass}
            />
            <div className="pg-product-details">
                <div className="pg-product-type">{product.name}</div>
                <div className="pg-product-description">{product.description}</div>
                <div className="pg-price-and-rating-row">
                    <div className="pg-product-price-info">
                        <span className="pg-current-price">Rs. {product.price}</span>
                        <span className="pg-old-price">Rs. {product.oldPrice}</span>
                    </div>
                    <div className="pg-product-rating">
                        <span className="pg-stars">
                            <FaStar className="pg-star-icon" />
                        </span>
                        <span className="pg-rating-number">{product.rating}</span>
                        <span className="pg-review-count">| ({product.reviewCount})</span>
                    </div>
                </div>
                <button
                    className="pg-buy-now-btn"
                    onClick={() => handleProductSelect(product)} // Using function from Context
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

const ProductGrid = () => {
    return (
        <section className="pg-product-grid-container">
            <div className="pg-product-grid">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;