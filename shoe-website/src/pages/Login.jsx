import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

import GoogleIcon from "../assets/images/google.png";
import FacebookIcon from "../assets/images/facebook.png";
import LinkedInIcon from "../assets/images/linkedin.png";

const Login = () => {
    const [formData, setFormData] = useState({ identifier: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useAppContext();

    // useEffect hook for redirection on logout
    useEffect(() => {
        if (!isLoggedIn) {
            // Check if this is a fresh page load or a log out event
            // The auto-logout timer in AppContext handles the alert, so we just need to redirect here.
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the user is already logged in
        if (isLoggedIn) {
            alert("You are already logged in.");
            navigate("/"); // Redirect to the home page
            return; // Stop further execution of the function
        }

        const storedUser = JSON.parse(localStorage.getItem("userData"));

        if (!storedUser) {
            setError("No account found. Please signup first.");
            return;
        }

        if (
            (formData.identifier === storedUser.email ||
                formData.identifier === storedUser.username) &&
            formData.password === storedUser.password
        ) {
            alert("Login Successful");
            setIsLoggedIn(true);

            if (rememberMe) {
                localStorage.setItem("isLoggedIn", "true");
            } else {
                sessionStorage.setItem("isLoggedIn", "true");
            }

            navigate("/");
        } else {
            setError("Invalid email/username or password");
        }
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="login-tabs">
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                        Login
                    </NavLink>
                    <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>
                        Signup
                    </NavLink>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="identifier"
                        placeholder="Enter Your Username/Email"
                        className="login-input"
                        value={formData.identifier}
                        onChange={handleChange}
                    />

                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Your Password"
                            className="login-input"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

                    <div className="remember-forgot">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />{" "}
                            Remember Me?
                        </label>
                        <NavLink to="/forgot-password" className="forgot-link">
                            Forgot Password?
                        </NavLink>
                    </div>

                    <button type="submit" className="login-btn">Login</button>

                    <div className="divider">
                        <span>Or</span>
                    </div>

                    <div className="social-login">
                        <img src={GoogleIcon} alt="Google" />
                        <img src={FacebookIcon} alt="Facebook" />
                        <img src={LinkedInIcon} alt="LinkedIn" />
                    </div>
                </form>
            </div>
            <div className="login-right"></div>
        </div>
    );
};

export default Login;