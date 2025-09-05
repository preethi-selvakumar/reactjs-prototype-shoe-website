import React from 'react';
import { Link } from 'react-router-dom'; 

// Import shoe images
import nikeShoe from '../assets/images/nike-shoe.png';
import adidasShoe from '../assets/images/adidas-shoe.png';
import pumaShoe from '../assets/images/puma-shoe.png';
import newBalanceShoe from '../assets/images/new-balance-shoe.png';
import reebokShoe from '../assets/images/reebok-shoe.png';
import vansShoe from '../assets/images/vans-shoe.png';
import converseShoe from '../assets/images/converse-shoe.png';
import asicsShoe from '../assets/images/asics-shoe.png';


const productsData = [
    {
        id: 1,
        name: 'Nike',
        description: 'Performance-driven, iconic streetwear and athletic shoes.',
        image: nikeShoe,
    },
    {
        id: 2,
        name: 'Adidas',
        description: 'Known for innovation, comfort, and collaborations (Yeezy, Pharrell, etc.).',
        image: adidasShoe,
    },
    {
        id: 3,
        name: 'Puma',
        description: 'Sport-meets-style footwear with bold, fashion-forward designs.',
        image: pumaShoe,
    },
    {
        id: 4,
        name: 'New Balance',
        description: 'Blending retro vibes with modern comfort — huge lifestyle comeback.',
        image: newBalanceShoe,
    },
    {
        id: 5,
        name: 'Reebok',
        description: 'Classic athletic and casual shoes with a heritage twist.',
        image: reebokShoe,
    },
    {
        id: 6,
        name: 'Vans',
        description: 'Skate-culture favorite with versatile street style appeal.',
        image: vansShoe,
    },
    {
        id: 7,
        name: 'Converse',
        description: 'Timeless canvas sneakers like the Chuck Taylor — always in style.',
        image: converseShoe,
    },
    {
        id: 8,
        name: 'ASICS',
        description: 'Performance-focused, especially for runners and active lifestyles.',
        image: asicsShoe,
    },
];

const TopBrands = () => {
    return (
        <section className="topbrands-section-container">
            <div className="topbrands-header">
                <h2 className="topbrands-title">Top Brands</h2>
                <p className="topbrands-subtitle">
                    Discover the world's most trusted and loved shoe brands — all in one place.
                </p>
            </div>

            <div className="topbrands-grid">
                {productsData.map((product) => (
                    <div key={product.id} className="topbrand-card">
                        <div className="topbrand-image-wrapper">
                            <img src={product.image} alt={product.name} className="topbrand-image" />
                            <div className="topbrand-hover-overlay"></div>
                        </div>
                        <h3 className="topbrand-name">{product.name}</h3>
                        <p className="topbrand-description">{product.description}</p>
                        <Link to="/shop" className="shop-button">Shop Top Brands</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopBrands;