import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <div className="contact-us-wrapper">
            {/* The two-color background div */}
            <div className="other-pages-bg">
                <Navbar />
                <div className="contact-us-container">
                    {/* Introduction Section */}
                    <section className="contact-us-intro">
                        <p>We're here to help you find the perfect fit — every step of the way.</p>
                        <p>Whether you have questions about your order, need help with sizing, or just want to share feedback, our team is ready to assist you.</p>
                    </section>

                    {/* Get In Touch Section */}
                    <section className="contact-us-section">
                        <h2 className="contact-section-heading">Get In Touch:</h2>
                        <div className="contact-info">
                            <p><strong>Customer Support Email:</strong> <a href="mailto:support@shoepart.com">support@shoepart.com</a></p>
                            <p><strong>Phone:</strong> <a href="tel:+18001234567">+1 (800) 123-4567</a></p>
                        </div>
                    </section>

                    {/* Live Chat Section */}
                    <section className="contact-us-section">
                        <h2 className="contact-section-heading">Live Chat:</h2>
                        <div className="chat-info">
                            <p>Click the chat icon in the bottom right corner</p>
                            <p>Available Mon-Fri | 10 AM - 5 PM</p>
                        </div>
                    </section>

                    {/* Order & Shipping Inquiries Section */}
                    <section className="contact-us-section">
                        <h2 className="contact-section-heading">Order & Shipping Inquiries:</h2>
                        <div className="shipping-info">
                            <p>Need help tracking your order or making changes?</p>
                            <p>Visit our <a href="/order-help-center" className="order-help-link">Order Help Center</a> for shipping times, tracking, returns, and more.</p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;