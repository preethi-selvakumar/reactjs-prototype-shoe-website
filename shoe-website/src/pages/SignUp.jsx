import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

// Import social media icons
import GoogleIcon from "../assets/images/google.png";
import FacebookIcon from "../assets/images/facebook.png";
import LinkedInIcon from "../assets/images/linkedin.png";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { setIsSignedUp, setIsLoggedIn } = useAppContext(); // useContext-லிருந்து setIsLoggedIn ஐயும் பெறவும்

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone") {
            if (/^\d*$/.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.username.trim()) newErrors.username = "Username is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        else if (formData.phone.length < 10) newErrors.phone = "Phone number must be at least 10 digits";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address";
        if (!formData.password) newErrors.password = "Password is required";
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
            newErrors.password = "Password must be 8+ chars, include uppercase, lowercase, number & special char";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const storedUser = JSON.parse(localStorage.getItem("userData"));

            if (storedUser && storedUser.email === formData.email) {
                alert("This email ID is already registered. Please login or use a different email.");
                return;
            }

            const userData = {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            };
            localStorage.setItem("userData", JSON.stringify(userData));

            alert("Signup Successful. You are now logged in.");
            setIsSignedUp(true);
            setIsLoggedIn(true); // AppContext-ல் isLoggedIn-ஐயும் true ஆக மாற்றவும்

            localStorage.setItem("isSignedUp", "true");
            localStorage.setItem("isLoggedIn", "true");

            navigate("/");
        }
    };

    return (
        <div className="login-container">
            {/* Left Side - Form */}
            <div className="login-left">
                <div className="login-tabs">
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
                    <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>Signup</NavLink>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    {/* ... (input fields and buttons) */}
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Your Username"
                            className="login-input"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p style={{ color: "red", fontSize: "12px" }}>{errors.username}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter Your Phone Number"
                            className="login-input"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p style={{ color: "red", fontSize: "12px" }}>{errors.phone}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="login-input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
                    </div>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Your Password"
                            className="login-input"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>}
                    <button type="submit" className="login-btn">Signup</button>
                    <div className="divider"><span>Or</span></div>
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

export default SignUp;
