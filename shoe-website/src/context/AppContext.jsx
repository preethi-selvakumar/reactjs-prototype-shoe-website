import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Wishlist state
    const [wishlist, setWishlist] = useState(() => {
        try {
            const storedWishlist = window.localStorage.getItem("wishlist");
            return storedWishlist ? JSON.parse(storedWishlist) : [];
        } catch {
            return [];
        }
    });

    // Cart state
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = window.localStorage.getItem("cart");
            return storedCart ? JSON.parse(storedCart) : [];
        } catch {
            return [];
        }
    });

    // Selected product
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Cart overlay state
    const [isCartOverlayVisible, setIsCartOverlayVisible] = useState(false);

    // Signup & Login states
    const [isSignedUp, setIsSignedUp] = useState(() => {
        return localStorage.getItem("isSignedUp") === "true";
    });

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    // Persist signup & login
    useEffect(() => {
        localStorage.setItem("isSignedUp", isSignedUp);
    }, [isSignedUp]);

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

    // updated auto logout logic
    useEffect(() => {
        let timer;
        if (isLoggedIn) {
            timer = setTimeout(() => {
                alert("Session expired. Please log in again.");
                setIsLoggedIn(false);
                // The Login component will handle the redirection after the state changes
            }, 1800000); // 30 minutes auto logout
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isLoggedIn]);

    // Wishlist persistence
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Cart persistence
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Wishlist logic
    const addToWishlist = (product) => {
        const isProductInWishlist = wishlist.some((item) => item.name === product.name);
        if (!isProductInWishlist) {
            setWishlist((prev) => [...prev, product]);
            alert(`${product.name} has been added to your wishlist!`);
        } else {
            const confirmRemove = window.confirm(
                "This product is already in your wishlist. Do you want to remove it?"
            );
            if (confirmRemove) removeFromWishlist(product);
        }
    };

    const removeFromWishlist = (product) => {
        setWishlist((prev) => prev.filter((item) => item.name !== product.name));
        alert(`${product.name} has been removed from your wishlist.`);
    };

    // Cart logic
    const addToCart = (product) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((item) => item.name === product.name);
            if (itemExists) {
                return prevCart.map((item) =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productToRemove) => {
        setCart((prevCart) =>
            prevCart.filter((product) => product.name !== productToRemove.name)
        );
    };

    const clearCart = () => setCart([]);

    const handleProductSelect = (product) => setSelectedProduct(product);

    const wishlistCount = wishlist.length;

    return (
        <AppContext.Provider
            value={{
                wishlist,
                addToWishlist,
                wishlistCount,
                removeFromWishlist,
                selectedProduct,
                handleProductSelect,
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                isCartOverlayVisible,
                setIsCartOverlayVisible,

                // Auth context values
                isSignedUp,
                setIsSignedUp,
                isLoggedIn,
                setIsLoggedIn,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);