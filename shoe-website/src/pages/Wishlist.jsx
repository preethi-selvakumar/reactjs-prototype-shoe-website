import React from 'react';
import { useAppContext } from '../context/AppContext';
import { FaStar } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { FiArrowLeft } from 'react-icons/fi';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrendingNow from '../components/TrendingNow';

const Wishlist = () => {
    const { wishlist, removeFromWishlist, handleProductSelect } = useAppContext();
    const navigate = useNavigate();

    const handleBuyNowClick = (product) => {
        handleProductSelect(product); // Set the product in the context
        navigate('/shop?category=details'); // Navigate to the Shop page with a category to trigger rendering
    };

    if (wishlist.length === 0) {
        return (
            <div className="other-pages-bg">
                <Navbar />
                <div className="wishlist-empty-container">
                    <h2 className="wishlist-empty-title">Your Wishlist is Empty</h2>
                    <p className="wishlist-empty-text">Add some products to your wishlist to see them here.</p>
                    <NavLink to="/shop" className="wishlist-empty-btn">
                        <FiArrowLeft /> Go to Shop
                    </NavLink>
                </div>
                <TrendingNow />
                <Footer />
            </div>
        );
    }

    return (
        <div className="other-pages-bg">
            <Navbar />
            <section className="wishlist-page-container">
                <h2 className="wishlist-main-title">My Wishlist</h2>
                <div className="wishlist-product-list">
                    {wishlist.map((product) => (
                        <div key={product.name} className="wishlist-item-card">
                            <div className="wishlist-image-column">
                                <div className="profile-diamond-bg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="wishlist-product-image"
                                    />
                                </div>
                            </div>
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
                                    onClick={() => handleBuyNowClick(product)}
                                >
                                    Buy Now
                                </button>
                                <button
                                    className="wishlist-remove-btn"
                                    onClick={() => removeFromWishlist(product)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <TrendingNow />
            <Footer />
        </div>
    );
};

export default Wishlist;