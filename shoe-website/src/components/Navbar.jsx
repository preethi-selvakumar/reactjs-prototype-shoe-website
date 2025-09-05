import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import { useAppContext } from '../context/AppContext';
import CartOverlay from './CartOverlay'; // Import the overlay component

/* Import images */
import logo from "../assets/images/main-logo.png";
import heartIcon from "../assets/images/heart.png";
import bagIcon from "../assets/images/bag.png";
import userIcon from "../assets/images/user.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search input value
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { wishlistCount, cart, isCartOverlayVisible, setIsCartOverlayVisible } = useAppContext();

    // Calculate the total number of items in the cart
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const handleCartIconClick = (e) => {
        e.preventDefault(); // Prevent default link behavior

        if (cart.length === 0) {
            alert("Please add at least one product to your cart.");
        } else {
            setIsCartOverlayVisible(true); // Show the cart overlay
        }
    };

    // Function to handle the search
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission or other default behavior
            // Navigate to the shop page and potentially pass the search query as a state or query parameter
            navigate('/shop', { state: { query: searchQuery } });
            // Clear the search input after navigation
            setSearchQuery('');
        }
    };

    return (
        <header className="navbar">
            {/* Top Row */}
            <div className="top-row">
                {/* Search Bar */}
                <div className="search-bar">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery} // Bind the input value to the state
                        onChange={(e) => setSearchQuery(e.target.value)} // Update the state on change
                        onKeyDown={handleSearch} // Trigger the search on Enter key press
                    />
                </div>

                {/* Right Side Icons */}
                <div className="right-icons">
                    {/* Wishlist */}
                    <div className="wishlist-icon-container">
                        <NavLink to="/wishlist">
                            <img src={heartIcon} alt="Wishlist" />
                        </NavLink>
                        {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>}
                    </div>

                    {/* Cart */}
                    <div className="cart-icon-container">
                        <a href="#" onClick={handleCartIconClick}>
                            <img src={bagIcon} alt="Cart" />
                        </a>
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </div>

                    {/* Profile → goes to Login page */}
                    <NavLink to="/login" className="profile-icon">
                        <img src={userIcon} alt="Profile" />
                    </NavLink>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="bottom-row">
                {/* Logo */}
                <img src={logo} alt="Logo" className="logo" />

                {/* Hamburger for Mobile */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>

                {/* Nav Links */}
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <NavLink
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Style Hub
                    </NavLink>
                    <NavLink
                        to="/shop"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        to="/collections"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Collections
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Contact Us
                    </NavLink>
                </nav>
            </div>

            {/* Render the global CartOverlay */}
            <CartOverlay
                isVisible={isCartOverlayVisible}
                onClose={() => setIsCartOverlayVisible(false)}
            />
        </header>
    );
};

export default Navbar;