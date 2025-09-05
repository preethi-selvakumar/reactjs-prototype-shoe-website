import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import storyImage from "../assets/images/about-us-story.png";
import whyChooseUsImage from "../assets/images/about-us-why-choose-us.png";

const AboutUs = () => {
    return (
        <div className="other-pages-bg">
            <Navbar />
            <div className="about-us-container">
                {/* Section 1: Main Heading and Paragraph */}
                <section className="about-us-hero">
                    <h1 className="hero-heading">Driven by Comfort. Designed for You.</h1>
                    <p className="hero-paragraph">
                        At ShoeMart, we're more than just shoes — we're about movement, confidence, and expression. Born from a passion for
                        quality and a commitment to style, our mission is simple: to create footwear that feels as good as it looks.
                    </p>
                </section>

                {/* Section 2: Our Story (Left Content, Right Image with Triangle BG) */}
                <section className="our-story-section">
                    <div className="story-content">
                        <h2 className="section-title">Our Story:</h2>
                        <p>
                            We started with a belief that everyone deserves shoes that can
                            keep up with their lifestyle — without compromising comfort or
                            character. From classic essentials to bold new trends, every pair
                            we design is made with attention to detail, premium materials,
                            and the people who wear them in mind.
                        </p>
                    </div>
                    <div className="story-image-wrapper">
                        <div className="triangle-bg"></div> {/* Triangle background */}
                        <img src={storyImage} alt="Our Story Shoe" className="story-image" />
                    </div>
                </section>

                {/* Section 3: Two Paragraphs - Center Screen */}
                <section className="middle-paragraphs-section">
                    <p className="middle-paragraph">
                        From everyday sneakers to standout statement pieces, every pair is crafted with purpose — using durable
                        materials, thoughtful design, and a passion for what's next in fashion and function.
                    </p>
                    <p className="middle-paragraph">
                        Whether you're walking city streets, chasing goals at the gym, or dressing to impress, our shoes are built to
                        support your journey — every step of the way.
                    </p>
                </section>

                {/* Section 4: Why Choose Us (Left Image, Right Content) */}
                <section className="why-choose-us-section">
                    <div className="why-choose-us-image-wrapper">
                        <div className="triangle-bg"></div> 
                        <img src={whyChooseUsImage} alt="Why Choose Us Shoe" className="why-choose-us-image" />
                    </div>
                    <div className="why-choose-us-content">
                        <h2 className="section-title">Why Choose Us:</h2>
                        <ul>
                            <li>Designed for all-day comfort</li>
                            <li>Styles for every step and season</li>
                            <li>Sustainable practices, wherever possible</li>
                            <li>Real customer support from real people</li>
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;