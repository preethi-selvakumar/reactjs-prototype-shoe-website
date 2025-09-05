import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const CartOverlay = ({ onClose, isVisible }) => {
    const { cart, removeFromCart } = useAppContext();
    const navigate = useNavigate();

    if (!isVisible || cart.length === 0) {
        return null;
    }

    const handleProceedToCheckout = () => {
        onClose(); // Close the overlay
        navigate('/checkout'); // Navigate to the new checkout page
    };

    const handleContinueShopping = () => {
        onClose();
        navigate('/');
    };

    const handleRemove = (product) => {
        removeFromCart(product);
    };

    return (
        <div className="cart-overlay-container" onClick={onClose}>
            <div className="cart-overlay-content" onClick={(e) => e.stopPropagation()}>
                <div className="cart-overlay-header">
                    <h3 className="cart-overlay-title">Added to Bag</h3>
                    <button className="cart-overlay-close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="cart-overlay-products">
                    {cart.map((product) => (
                        <div key={product.name} className="cart-overlay-item">
                            <div className="cart-overlay-image-col">
                                <img src={product.image} alt={product.name} className="cart-overlay-image" />
                            </div>
                            <div className="cart-overlay-info-col">
                                <h4 className="cart-overlay-product-name">{product.description.split('-')[0].trim()}</h4>
                                <span className="cart-overlay-color">Color: White/Black</span>
                                <div className="cart-overlay-price-rating">
                                    <span className="cart-overlay-current-price">Rs. {product.price}</span>
                                    <span className="cart-overlay-old-price">Rs. {product.oldPrice}</span>
                                    <span className="cart-overlay-rating">
                                        <FaStar /> {product.rating} ({product.reviewCount})
                                    </span>
                                </div>
                                <button className="cart-overlay-remove-btn" onClick={() => handleRemove(product)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-overlay-actions">
                    <button className="cart-overlay-checkout-btn" onClick={handleProceedToCheckout}>
                        Proceed to Checkout
                    </button>
                    <button className="cart-overlay-continue-btn" onClick={handleContinueShopping}>
                        Continue to Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartOverlay;