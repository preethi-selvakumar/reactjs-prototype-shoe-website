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
    // Get isSignedUp and isLoggedIn from the global context
    const { isSignedUp, isLoggedIn } = useAppContext();

    useEffect(() => {
        // First, check if the user has signed up
        if (!isSignedUp) {
            if (window.confirm("Please signup to continue")) {
                navigate("/signup");
            }
        }
        // If they are signed up but NOT logged in, then prompt them to log in
        else if (isSignedUp && !isLoggedIn) {
            if (window.confirm("Please login to continue")) {
                navigate("/login");
            }
        }
        // If they are signed up AND logged in, do nothing. This is the correct state.

    }, [navigate, isSignedUp, isLoggedIn]);

    return (
        <div className="home-container">
            {/* The rest of the page content will only render if the checks are passed implicitly */}
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
