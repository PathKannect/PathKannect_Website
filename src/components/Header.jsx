import React, { useEffect, useState } from 'react';
import { NavLink,Link } from "react-router-dom";
import logo from "../assets/images/pathkannectlogo.png";
import '../assets/css/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="f-logo" aria-label="PathKannect Home">
          <img
            src={logo}
            alt="PathKannect Logo"
            className="f-logo-img"
          />
        </Link>

        {/* Navigation */}
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
          <NavLink to="/aboutus" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
            About Us
          </NavLink>
          {/* <NavLink to="/mentor" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
            Mentor
          </NavLink> */}
          {/* <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
            Contact Us
          </NavLink> */}

          {/* Optional: Add a CTA in header as per latest trends */}
          <NavLink
            to="/#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Join Now
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;