import React from "react";

// Import images
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";

const WomensLook = () => {
    return (
        <div className="womenslook-container">
            <h2 className="womenslook-heading">Trending For Womens Lookbook</h2>
            <div className="womenslook-grid">
                <div className="womenslook-grid-item womenslook-main-image">
                    <img src={img1} alt="Woman wearing a pair of brown sandals" className="womenslook-image" />
                </div>
                <div className="womenslook-grid-item">
                    <img src={img2} alt="Multiple pairs of sandals on a person's hands" className="womenslook-image" />
                </div>
                <div className="womenslook-grid-item">
                    <img src={img3} alt="Woman's feet with sandals" className="womenslook-image" />
                </div>
                <div className="womenslook-grid-item">
                    <img src={img4} alt="Multiple pairs of Hermès sandals in a box" className="womenslook-image" />
                </div>
                <div className="womenslook-grid-item">
                    <img src={img5} alt="Pairs of sandals on a white table" className="womenslook-image" />
                </div>
                <div className="womenslook-grid-item womenslook-main-image-right">
                    <img src={img6} alt="Two pairs of sandals on two different people's feet" className="womenslook-image" />
                </div>
            </div>
        </div>
    );
};

export default WomensLook;