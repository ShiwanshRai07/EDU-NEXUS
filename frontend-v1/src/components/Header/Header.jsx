import { FaSearch, FaBookOpen, FaSignInAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import "./Header.css"; // Import CSS file
import logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Convert token to boolean
  }, []);

  // ✅ Clear all except token on login
  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      localStorage.clear(); // Remove everything
      localStorage.setItem("token", token); // Restore token
    }
  }, [isLoggedIn]);

  return (
    <header>
      {/* Left Side: Logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Middle: Books Trade, Skill Trade, and Search */}
      <div className="header-middle">
        <button className="header-button" id="one" onClick={() => navigate("/book-trade")}>
          <FaBookOpen /> Books Trade
        </button>
        <button className="header-button">
          <FaSearch /> Search
        </button>
        <button className="header-button" id="two" onClick={() => navigate("/skill-trade")}>
          <GiSkills /> Skill Trade
        </button>
      </div>

      {/* Right Side: Show "Sign Up" only if NOT logged in */}
      <div className="header-right">
        {!isLoggedIn && (
          <button className="header-button" id="three" onClick={() => navigate('/register')}>
            <FaSignInAlt /> Sign Up
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;