import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import TrendingNow from '../components/TrendingNow';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

// Import images for payment methods 
import gpayLogo from '../assets/images/gpay.png';
import phonepeLogo from '../assets/images/phonepe.png';
import paytmLogo from '../assets/images/paytm.png';
import cardLogo from '../assets/images/card.png';
import netbankingLogo from '../assets/images/netbanking.png';
import codLogo from '../assets/images/cod.png';
import upiLogo from '../assets/images/upi.png';

// Import review images 
import reviewImage1 from '../assets/images/review-image-1.jpeg';
import reviewImage2 from '../assets/images/review-image-2.jpeg';
import reviewImage3 from '../assets/images/review-image-3.jpeg';
import reviewImage4 from '../assets/images/review-image-4.jpeg';
import ProductSectionHeader from '../components/ProductSectionHeader';

const reviewImages = [reviewImage1, reviewImage2, reviewImage3, reviewImage4];

const Checkout = () => {
    const { cart } = useAppContext();
    const navigate = useNavigate(); 
    const [selectedPayment, setSelectedPayment] = useState('upi');

    // State for form data and validation errors
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    // Calculate total price from the cart dynamically
    const cartTotal = cart.reduce((sum, item) => {
        // Remove "Rs. " and commas from the price string before converting to a number
        const price = parseFloat(item.price.toString().replace(/Rs\.|,/g, ''));
        const quantity = parseInt(item.quantity);
        return sum + (price * quantity);
    }, 0);

    const fixedDiscount = 500;
    const shipping = 0;
    const total = cartTotal - fixedDiscount + shipping;

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.id);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        // Validation logic
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required';
        }
        if (!formData.address) {
            newErrors.address = 'Address is required';
        }
        if (!formData.city) {
            newErrors.city = 'City is required';
        }
        if (!formData.state) {
            newErrors.state = 'State is required';
        }
        if (!formData.zip) {
            newErrors.zip = 'Zip Code is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        setErrors(newErrors);

        // If there are no errors, proceed with checkout
        if (Object.keys(newErrors).length === 0) {
            const paymentText = {
                upi: 'UPI Payment',
                card: 'Card Payment',
                netbanking: 'Net Banking',
                cod: 'Cash on Delivery'
            };
            alert(`Payment mode selected: ${paymentText[selectedPayment]}`);

            // Navigate to the order-successful page
            navigate('/order-successful');
        }
    };

    return (
        <div className="other-pages-bg">
            <Navbar />
            <ProductSectionHeader />
            <main className="checkout-main-container">
                <h1 className="checkout-title">Checkout</h1>
                <div className="checkout-content-wrapper">
                    {/* Left Side: Shipping & Payment Forms */}
                    <div className="checkout-forms-col">
                        <section className="checkout-shipping-section">
                            <h2 className="checkout-section-title">Shipping Address</h2>
                            {/* Form tag is now ONLY around the shipping inputs */}
                            <form className="checkout-shipping-form">
                                <div className="checkout-form-row">
                                    <div className="input-group">
                                        <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleInputChange} className={errors.name ? 'input-error' : ''} />
                                        {errors.name && <span className="error-message">{errors.name}</span>}
                                    </div>
                                    <div className="input-group">
                                        <input type="tel" name="mobile" placeholder="Mobile number*" value={formData.mobile} onChange={handleInputChange} className={errors.mobile ? 'input-error' : ''} />
                                        {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                                    </div>
                                </div>
                                <div className="checkout-form-row full-width">
                                    <div className="input-group">
                                        <input type="text" name="address" placeholder="Address*" value={formData.address} onChange={handleInputChange} className={errors.address ? 'input-error' : ''} />
                                        {errors.address && <span className="error-message">{errors.address}</span>}
                                    </div>
                                </div>
                                <div className="checkout-form-row">
                                    <div className="input-group">
                                        <input type="text" name="city" placeholder="City*" value={formData.city} onChange={handleInputChange} className={errors.city ? 'input-error' : ''} />
                                        {errors.city && <span className="error-message">{errors.city}</span>}
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="state" placeholder="State*" value={formData.state} onChange={handleInputChange} className={errors.state ? 'input-error' : ''} />
                                        {errors.state && <span className="error-message">{errors.state}</span>}
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="zip" placeholder="Zip Code*" value={formData.zip} onChange={handleInputChange} className={errors.zip ? 'input-error' : ''} />
                                        {errors.zip && <span className="error-message">{errors.zip}</span>}
                                    </div>
                                </div>
                                <div className="checkout-form-row full-width">
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleInputChange} className={errors.email ? 'input-error' : ''} />
                                        {errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>
                                </div>
                            </form>
                        </section>

                        {/* Payment section is moved back to the left column */}
                        <section className="checkout-payment-section">
                            <h2 className="checkout-section-title">Payment Details</h2>
                            <div className="checkout-payment-options">
                                <div className="checkout-payment-group">
                                    <div className="checkout-payment-radio">
                                        <input type="radio" id="upi" name="payment" checked={selectedPayment === 'upi'} onChange={handlePaymentChange} />
                                        <label htmlFor="upi">UPI Payment</label>
                                    </div>
                                    <div className="checkout-payment-logos">
                                        <img src={upiLogo} alt="UPI" />
                                        <img src={gpayLogo} alt="Gpay" />
                                        <img src={phonepeLogo} alt="PhonePe" />
                                        <img src={paytmLogo} alt="Paytm" />
                                    </div>
                                </div>
                                <div className="checkout-payment-group">
                                    <div className="checkout-payment-radio">
                                        <input type="radio" id="card" name="payment" checked={selectedPayment === 'card'} onChange={handlePaymentChange} />
                                        <label htmlFor="card">Card Payment</label>
                                    </div>
                                    <img src={cardLogo} alt="Card" className="payment-logo-single" />
                                </div>
                                <div className="checkout-payment-group">
                                    <div className="checkout-payment-radio">
                                        <input type="radio" id="netbanking" name="payment" checked={selectedPayment === 'netbanking'} onChange={handlePaymentChange} />
                                        <label htmlFor="netbanking">Net Banking</label>
                                    </div>
                                    <img src={netbankingLogo} alt="Net Banking" className="payment-logo-single" />
                                </div>
                                <div className="checkout-payment-group">
                                    <div className="checkout-payment-radio">
                                        <input type="radio" id="cod" name="payment" checked={selectedPayment === 'cod'} onChange={handlePaymentChange} />
                                        <label htmlFor="cod">Cash on Delivery</label>
                                    </div>
                                    <img src={codLogo} alt="Cash on Delivery" className="payment-logo-single" />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="checkout-summary-col">
                        <section className="checkout-order-summary">
                            <h2 className="checkout-section-title">Order Summary</h2>
                            <div className="checkout-summary-products">
                                {cart.map((product) => (
                                    <div key={product.name} className="checkout-summary-item">
                                        <div className="checkout-summary-image-wrapper">
                                            <img src={product.image} alt={product.name} className="checkout-summary-image" />
                                        </div>
                                        <div className="checkout-summary-info">
                                            <h4 className="checkout-summary-product-name">{product.description.split('-')[0].trim()}</h4>
                                            <p className="checkout-summary-product-details">
                                                Toletarain Purifying Foaming Cleanser For Oily Skin <br />
                                                Rs. {product.price}
                                                <span className="checkout-summary-old-price"> Rs. {product.oldPrice}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div className="checkout-coupon">
                                    <p className="checkout-coupon-text">MAR89458 <span className="checkout-coupon-applied">Coupon Applied</span></p>
                                </div>
                            </div>
                            <div className="checkout-price-breakdown">
                                <div className="checkout-price-row">
                                    <span>Item</span>
                                    <span>{cart.length > 1 ? `${cart.length} products` : `${cart.length} product`}</span>
                                </div>
                                <div className="checkout-price-row">
                                    <span>Price</span>
                                    <span>Rs. {cartTotal}</span>
                                </div>
                                <div className="checkout-price-row">
                                    <span>Discount</span>
                                    <span>Rs. {fixedDiscount}</span>
                                </div>
                                <div className="checkout-price-row">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="checkout-total-row">
                                    <span>Total</span>
                                    <span>Rs. {total}</span>
                                </div>
                            </div>
                            {/* The checkout button is now outside the form to keep the layout */}
                            <button className="checkout-final-btn" onClick={handleFormSubmit}>Checkout</button>
                        </section>
                    </div>
                </div>
                {/* Reviews Section */}
                <div className="pd-reviews-section pd-full-width-section">
                    <h2 className="pd-reviews-heading">Reviews</h2>
                    <div className="pd-review-images-grid">
                        {reviewImages.map((img, index) => (
                            <img key={index} src={img} alt={`Review ${index + 1}`} className="pd-review-image" />
                        ))}
                    </div>
                </div>
            </main>
            <TrendingNow />
            <Footer />
        </div>
    );
};

export default Checkout;