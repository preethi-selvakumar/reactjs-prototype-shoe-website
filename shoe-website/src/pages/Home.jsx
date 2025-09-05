import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

import Navbar from "../components/Navbar";
import TrendingNow from "../components/TrendingNow";
import TopBrands from "../components/TopBrands";
import ShopBySports from "../components/ShopBySports";
import Collections from "../components/Collections";
import WomensLook from "../components/WomensLook";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import BestPair from "../components/BestPair";
import AdCarousel from "../components/AdCarousel";
import HeroSection from "../components/HeroSection";


const Home = () => {
    const navigate = useNavigate();
    const { isLoggedIn, isSignedUp } = useAppContext(); // 🚀 Get isLoggedIn and isSignedUp from useContext

    useEffect(() => {
        if (!isSignedUp) {
            if (window.confirm("Please signup to continue")) {
                navigate("/signup");
            }
        } else {
            if (!isLoggedIn) {
                if (window.confirm("Please login to continue")) {
                    navigate("/login");
                }
            }
        }
    }, [navigate, isSignedUp, isLoggedIn]); // Add isSignedUp and isLoggedIn in the dependency array

    return (
        <div className="home-container">
            {/* Wrapping all content inside a single wrapper */}
            <div className="home-content-wrapper">
                <Navbar />
                <HeroSection />
                <AdCarousel />
                <BestPair />
                <TrendingNow bgColor="#fff" />
                <TopBrands />
                <ShopBySports />
                <Collections />
                <WomensLook />
                <Testimonials />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
