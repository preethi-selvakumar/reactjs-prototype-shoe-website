// src/components/ProductDetails.js

import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

// Import images for the Reviews section
import reviewImage1 from '../assets/images/review-image-1.jpeg';
import reviewImage2 from '../assets/images/review-image-2.jpeg';
import reviewImage3 from '../assets/images/review-image-3.jpeg';
import reviewImage4 from '../assets/images/review-image-4.jpeg';

// Import standard thumbnail images (fixed set)
import thumb1 from '../assets/images/product-thumbnail-1.png';
import thumb2 from '../assets/images/product-thumbnail-2.png';
import thumb3 from '../assets/images/product-thumbnail-3.png';
import thumb4 from '../assets/images/product-thumbnail-4.png';
import thumb5 from '../assets/images/product-thumbnail-5.png';

const reviewImages = [reviewImage1, reviewImage2, reviewImage3, reviewImage4];
const thumbnailImages = [thumb1, thumb2, thumb3, thumb4, thumb5];

const ProductDetails = () => {
    const { selectedProduct, handleProductSelect, addToCart, isCartOverlayVisible, setIsCartOverlayVisible } = useAppContext();
    const [selectedSize, setSelectedSize] = useState(null);
    const [mainDisplayImage, setMainDisplayImage] = useState(selectedProduct.image);
    const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'];

    // If the selectedProduct changes, update the main image
    useEffect(() => {
        setMainDisplayImage(selectedProduct.image);
    }, [selectedProduct]);

    const handleBackClick = () => {
        handleProductSelect(null);
    };

    const handleAddToCart = () => {
        // Validate that a size has been selected
        if (!selectedSize) {
            alert('Please select a size before adding to bag.');
            return;
        }

        // Add the product to the cart
        addToCart({ ...selectedProduct, size: selectedSize });

        // Show alert and then set the global state to show the overlay
        window.alert(`${selectedProduct.description.split('-')[0].trim()} has been added to your cart!`);
        setIsCartOverlayVisible(true);
    };

    return (
        <section className="pd-details-container">
            <button className="pd-back-btn" onClick={handleBackClick}>
                <FaArrowLeft className="pd-back-icon" />
            </button>

            <div className="pd-main-content">
                {/* Left Side: Thumbnails + Product Description, Features */}
                <div className="pd-left-section-wrapper">
                    <div className="pd-image-gallery">
                        {thumbnailImages.slice(0, 4).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className={`pd-thumbnail ${mainDisplayImage === img ? 'active' : ''}`}
                                onClick={() => setMainDisplayImage(img)}
                            />
                        ))}
                        <img
                            src={thumbnailImages[4]}
                            alt="Thumbnail 5"
                            className={`pd-thumbnail thumb5 ${mainDisplayImage === thumbnailImages[4] ? 'active' : ''}`}
                            onClick={() => setMainDisplayImage(thumbnailImages[4])}
                        />
                    </div>
                    <div className="pd-left-content">
                        <div className="pd-product-description">
                            <h2 className="pd-description-heading">PRODUCT DESCRIPTION</h2>
                            <p className="pd-description-text">
                                **{selectedProduct.name}**
                                <br />
                                <br />
                                Simple classic style is what you will find in the men's Puma Super Liga suede sneaker.
                                Well known for its indoor soccer style but versatile enough to play up any casual attire,
                                this retro shoe is a must-have for laid back style both on and off the field.
                            </p>
                        </div>
                        <div className="pd-product-features">
                            <h2 className="pd-features-heading">FEATURES</h2>
                            <ul>
                                <li>Leather and suede upper</li>
                                <li>Rubber outsole for traction</li>
                                <li>Pivot point at forefoot provides traction and supports quick rotation</li>
                                <li>Imported</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Side: Main image + Info */}
                <div className="pd-right-section">
                    <div className="pd-product-info">
                        <div className="pd-info-header">
                            <h1 className="pd-product-name">{selectedProduct.description.split('-')[0].trim()}</h1>
                            <span className="pd-product-color">Color White/Black</span>
                            <div className="pd-image-price-rating-row">
                                <div className="pd-main-image">
                                    <img src={mainDisplayImage} alt="Main Product" />
                                </div>
                                <div className="pd-price-and-rating-column">
                                    <div className="pd-prices">
                                        <span className="pd-current-price">Rs. {selectedProduct.price}</span>
                                        <span className="pd-old-price">Rs. {selectedProduct.oldPrice}</span>
                                    </div>
                                    <div className="pd-rating">
                                        <FaStar className="pd-star-icon" />
                                        <span className="pd-rating-number">{selectedProduct.rating}</span>
                                        <span className="pd-review-count">| ({selectedProduct.reviewCount})</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pd-size-and-width">
                            <div className="pd-size-info">
                                <span className="pd-size-label">Sizes</span>
                            </div>
                            <div className="pd-width-info">
                                <span className="pd-width-label">Width: Medium</span>
                            </div>
                        </div>

                        <div className="pd-size-options">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`pd-size-btn ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <div className="pd-shipping-info">
                            <h3 className="pd-shipping-heading">Returns & Exchange Available</h3>
                            <div className="pd-shipping-option">
                                <input type="radio" id="standard" name="shipping" defaultChecked />
                                <label htmlFor="standard">Standard Shipping</label>
                            </div>
                            <p className="pd-shipping-estimate">Arrives in 4 to 6 Business Days</p>
                        </div>

                        <div className="pd-cta-buttons">
                            <button className="pd-buy-now-btn">Buy Now</button>
                            <button className="pd-add-to-bag-btn" onClick={handleAddToCart}>
                                Add To Bag
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pd-reviews-section pd-full-width-section">
                <h2 className="pd-reviews-heading">Reviews</h2>
                <div className="pd-review-images-grid">
                    {reviewImages.map((img, index) => (
                        <img key={index} src={img} alt={`Review ${index + 1}`} className="pd-review-image" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
