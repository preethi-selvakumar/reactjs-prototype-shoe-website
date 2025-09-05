import React from 'react';
import Navbar from '../components/Navbar';
import ProductSectionHeader from '../components/ProductSectionHeader';
import TrendingNow from '../components/TrendingNow';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

// Import success image
import successImage from '../assets/images/order-success-bg.gif';

const OrderSuccessful = () => {
    const { cart, clearCart } = useAppContext(); // Get clearCart function
    const navigate = useNavigate();

    // Calculate total price and quantity from the cart dynamically
    const cartTotal = cart.reduce((sum, item) => {
        // Remove "Rs. " and commas from the price string before converting to a number
        const price = parseFloat(item.price.toString().replace(/Rs\.|,/g, ''));
        const quantity = parseInt(item.quantity);
        return sum + (price * quantity);
    }, 0);
    const totalQuantity = cart.reduce((sum, item) => sum + parseInt(item.quantity), 0);

    const fixedDiscount = 500;
    const shipping = 0;
    const total = cartTotal - fixedDiscount + shipping;

    const handleBackToHome = () => {
        clearCart(); // Clear the cart
        navigate('/'); // Navigate to home page
    };

    return (
        <div className="other-pages-bg">
            <Navbar />
            <ProductSectionHeader />
            <main className="order-successful-main-container">
                <section className="order-successful-section">
                    <div className="order-success-image-wrapper">
                        <img src={successImage} alt="Order Successfully Placed" className="order-success-image" />
                        <h3 className="order-success-text">Order Successfully Placed...</h3>
                    </div>

                    <div className="order-summary-card">
                        <h2 className="order-summary-title">Order Summary</h2>
                        <div className="order-summary-products">
                            {cart.map((product) => (
                                <div key={product.name} className="order-summary-item">
                                    <div className="order-summary-image-wrapper">
                                        <img src={product.image} alt={product.name} className="order-summary-image" />
                                    </div>
                                    <div className="order-summary-info">
                                        <h4 className="order-summary-product-name">{product.description.split('-')[0].trim()}</h4>
                                        <p className="order-summary-product-details">
                                            Toletarain Purifying Foaming Cleanser For Oily Skin <br />
                                            Rs. {product.price}
                                            <span className="order-summary-old-price"> Rs. {product.oldPrice}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <div className="order-coupon">
                                <p className="order-coupon-text">MAR89458 <span className="order-coupon-applied">Coupon Applied</span></p>
                            </div>
                        </div>

                        <div className="order-price-breakdown">
                            <div className="order-price-row">
                                <span>Item</span>
                                <span>{cart.length > 1 ? `${cart.length} products` : `${cart.length} product`}</span>
                            </div>
                            <div className="order-price-row">
                                <span>Quantity</span>
                                <span>{totalQuantity}</span>
                            </div>
                            <div className="order-price-row">
                                <span>Price</span>
                                <span>Rs. {cartTotal}</span>
                            </div>
                            <div className="order-price-row">
                                <span>Discount</span>
                                <span>Rs. {fixedDiscount}</span>
                            </div>
                            <div className="order-price-row">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="order-total-row">
                                <span>Total</span>
                                <span>Rs. {total}</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-success-footer">
                        <button className="back-to-home-btn" onClick={handleBackToHome}>Back to Home</button>
                        <p className="thank-you-text">Thank You for Your Order!</p>
                        <p className="shipping-text">Your order was placed successfully — we're getting it ready!</p>
                    </div>
                </section>
            </main>
            <TrendingNow />
            <Footer />
        </div>
    );
};

export default OrderSuccessful;