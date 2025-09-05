import React from 'react';
import { Link } from 'react-router-dom';

// Product images imports
import sneakersImage from '../assets/images/sneakers.png';
import dressShoesImage from '../assets/images/dress-shoes.png';
import bootsImage from '../assets/images/boots.png';
import sandalsImage from '../assets/images/sandals.png';
import loafersImage from '../assets/images/loafers.png';
import athleticShoesImage from '../assets/images/athletic-shoes.png';
import heelsImage from '../assets/images/heels.png';
import casualShoesImage from '../assets/images/casual-shoes.png';
import slippersImage from '../assets/images/slippers.png';
import kidsShoesImage from '../assets/images/kids-shoes.png';

const productData = [
    {
        id: 1,
        name: 'Sneakers',
        description: 'Trendy, casual, and comfortable shoes for everyday wear and street style.',
        image: sneakersImage,
    },
    {
        id: 2,
        name: 'Dress Shoes',
        description: 'Formal footwear perfect for business, weddings, and special occasions.',
        image: dressShoesImage,
    },
    {
        id: 3,
        name: 'Boots',
        description: 'From rugged outdoor boots to stylish ankle boots — ideal for all seasons.',
        image: bootsImage,
    },
    {
        id: 4,
        name: 'Sandals & Slides',
        description: 'Open-toe options for warm weather, vacations, and relaxed vibes.',
        image: sandalsImage,
    },
    {
        id: 5,
        name: 'Loafers & Flats',
        description: 'Slip-on comfort with a sleek silhouette — great for work or leisure.',
        image: loafersImage,
    },
    {
        id: 6,
        name: 'Athletic & Running Shoes',
        description: 'Designed for performance, durability, and support during workouts and sports.',
        image: athleticShoesImage,
    },
    {
        id: 7,
        name: 'Heels & Pumps',
        description: 'Chic and sophisticated footwear to elevate any outfit.',
        image: heelsImage,
    },
    {
        id: 8,
        name: 'Casual Shoes',
        description: 'Versatile styles like espadrilles, boat shoes, or minimalist lace-ups.',
        image: casualShoesImage,
    },
    {
        id: 9,
        name: 'Slippers & Indoor Shoes',
        description: 'Cozy, cushioned styles made for relaxation at home.',
        image: slippersImage,
    },
    {
        id: 10,
        name: "Kids' Shoes",
        description: 'Durable, comfortable, and fun footwear for little feet.',
        image: kidsShoesImage,
    },
];

const StepIntoStyle = () => {
    const renderCards = (start, end) => {
        return productData.slice(start, end).map(product => (
            <div key={product.id} className={`sis-product-card product-${product.id}`}>
                <div className="sis-image-wrapper">
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`sis-product-image ${product.id === 1 || product.id === 5 ? 'sis-image-rotate-only' : 'sis-image-rotate-flip'}`}
                    />
                </div>
                <h3 className="sis-product-name">{product.name}</h3>
                <p className="sis-product-desc">{product.description}</p>
                <Link
                    to={`/shop?category=${product.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="sis-start-shopping-btn"
                >
                    Start Shopping
                </Link>
            </div>
        ));
    };

    return (
        <section className="sis-container">
            <h2 className="sis-title">Step Into Style</h2>
            <p className="sis-para">Explore our full collection of shoes built for every moment — from everyday essentials to statement-makers.</p>

            <div className="sis-card-grid">
                {renderCards(0, 4)}
            </div>
            <div className="sis-card-grid">
                {renderCards(4, 8)}
            </div>
            <div className="sis-last-row-grid">
                {renderCards(8, 10)}
            </div>
        </section>
    );
};

export default StepIntoStyle;