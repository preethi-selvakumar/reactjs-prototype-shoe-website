import React from "react";
import { useNavigate } from "react-router-dom";

// Import shoe images
import shoe1 from "../assets/images/shoe1.png";
import shoe2 from "../assets/images/shoe2.png";

const BestPair = () => {
    const navigate = useNavigate();

    return (
        <div className="bestpair-container">
            {/* Left Content */}
            <div className="bestpair-left">
                <h2>Step Into Your Best Pair Yet</h2>
                <p>
                    From bold streetwear to everyday essentials — discover shoes designed
                    for comfort, crafted for movement, and built to last. Your style starts here.
                </p>
                <button
                    className="bestpair-shop-btn"
                    onClick={() => navigate("/shop")}
                >
                    Shop Now
                </button>
            </div>

            {/* Right Images */}
            <div className="bestpair-right">
                <div className="shoe-card peach-bg">
                    <img src={shoe1} alt="Black Sport Shoe" className="shoe-img" />
                </div>
                <div className="shoe-card pink-bg">
                    <img src={shoe2} alt="Blue Sport Shoe" className="shoe-img" />
                </div>
            </div>
        </div>
    );
};

export default BestPair;
