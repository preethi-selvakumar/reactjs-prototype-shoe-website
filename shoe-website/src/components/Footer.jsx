import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import shoemartLogo from '../assets/images/main-logo.png';
import googleIcon from '../assets/images/google.png';
import facebookIcon from '../assets/images/facebook.png';
import instagramIcon from '../assets/images/instagram.png';
import whatsappIcon from '../assets/images/phone.png';
import linkedinIcon from '../assets/images/linkedin.png';

const Footer = () => {
    return (
        <footer className="shoemart-footer">
            <div className="footer-content">
                <div className="footer-column logo-column">
                    <img src={shoemartLogo} alt="Shoemart Logo" className="footer-logo" />
                </div>

                <div className="footer-column links-column">
                    <h4>Short Links</h4>
                    <ul>
                        <li><NavLink to="/">Style Hub</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/collections">Collections</NavLink></li>
                        <li><NavLink to="/about">About us</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>

                <div className="footer-column shops-column">
                    <h4>Shops</h4>
                    <ul>
                        <li><NavLink to="/shop">Sneakers</NavLink></li>
                        <li><NavLink to="/shop/retro-classic">Retro & Classic</NavLink></li>
                        <li><NavLink to="/collections">Collections</NavLink></li>
                    </ul>
                </div>

                <div className="footer-column contact-column">
                    <h4>Contact By</h4>
                    {/* Using React Icons */}
                    <p><FaMapMarkerAlt /> 123 Shoe Street, Reva Plaza, Mad</p>
                    <p><FaEnvelope /> Email: shoemart@walkonshoes.com</p>
                    <p><FaPhoneAlt /> Phone: +1 (800) 123-4567</p>
                    <p><FaEnvelope /> Email: support@walkonshoes.com</p>

                    <div className="social-media-icons">
                        <h5>Follow With Us</h5>
                        <div className="social-icons">
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer"><img src={googleIcon} alt="Google" /></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><img src={whatsappIcon} alt="WhatsApp" /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;