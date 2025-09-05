import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StepIntoStyle from '../components/StepIntoStyle';
import Footer from '../components/Footer';
import TrendingNow from '../components/TrendingNow';
import ProductGrid from '../components/ProductGrid';
import ProductDetails from '../components/ProductDetails';
import ProductSectionHeader from '../components/ProductSectionHeader';
import { useAppContext } from '../context/AppContext';

const Shop = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const { selectedProduct } = useAppContext(); // Getting directly from Context

    return (
        <div className="other-pages-bg">
            <Navbar />

            {!category && <StepIntoStyle />}

            {category && (
                <>
                    <ProductSectionHeader />

                    {selectedProduct ? (
                        <ProductDetails />
                    ) : (
                        <ProductGrid />
                    )}
                </>
            )}

            <TrendingNow />
            <Footer />
        </div>
    );
};

export default Shop;