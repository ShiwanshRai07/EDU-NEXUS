import { FaSearch, FaBookOpen, FaSignInAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import "./Header.css"; // Import CSS file
import logo from "../../assets/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
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

      {/* Right Side: Signup Button */}
      <div className="header-right">
        <button className="header-button">
          <FaSignInAlt /> Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;