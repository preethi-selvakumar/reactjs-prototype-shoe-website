import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

import profileImage1 from '../assets/images/profile1.png';
import profileImage2 from '../assets/images/profile2.png';
import profileImage3 from '../assets/images/profile3.png';

const testimonials = [
    {
        name: 'Jason R.',
        title: 'Comfort & Style',
        text: "These are hands down the most comfortable shoes I've ever owned. I wear them all day and my feet feel great — plus, I get compliments everywhere I go!",
        image: profileImage1
    },
    {
        name: 'Maria L.',
        title: 'Quality & Durability',
        text: "I've had my pair for over a year now, and they still look and feel amazing. The build quality is next level — worth every penny!",
        image: profileImage2
    },
    {
        name: 'David K.',
        title: 'Fit & Customer Experience',
        text: 'Perfect fit right out of the box. Super easy shopping experience and fast delivery. I’m already eyeing my next pair!”.',
        image: profileImage3
    }
];

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTestimonial((prevIndex) =>
                (prevIndex + 1) % testimonials.length
            );
        }, 2000); // 2 seconds

        return () => clearInterval(intervalId);
    }, []);

    const testimonial = testimonials[currentTestimonial];

    return (
        <section className="testimonials-section">
            <div className="testimonials-header">
                <h2 className="testimonials-heading">Testimonials</h2>
                <h3 className="testimonials-subtitle">What Our Customers Are Saying</h3>
                <p className="testimonials-description">Real reviews from real people who found their perfect fit.</p>
            </div>
            <div className="testimonials-card-container">
                <div className="testimonial-card">
                    <div className="testimonial-profile">
                        <div className="profile-diamond-bg"></div>
                        <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
                    </div>
                    <div className="card-content">
                        <h4 className="client-name">{testimonial.name}</h4>
                        <p className="review-title">{testimonial.title}</p>
                        <p className="review-text">{testimonial.text}</p>
                        <div className="client-rating">
                            <FaStar className="star-icon" />
                            <FaStar className="star-icon" />
                            <FaStar className="star-icon" />
                            <FaStar className="star-icon" />
                            <FaStar className="star-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;