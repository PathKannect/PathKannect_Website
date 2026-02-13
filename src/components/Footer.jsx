import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import logo from "../assets/images/pathkannect_logos.png";
import "../assets/css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="f-wrapper">
      <div className="f-container">

        {/* Top Section */}
        <div className="f-top">

          {/* Brand */}
          <div className="f-brand">
            <Link to="/" className="f-logo" aria-label="PathKannect Home">
              <img
                src={logo}
                alt="PathKannect Logo"
                className="f-logo-img"
              />
            </Link>
          </div>


          {/* Links + Socials */}
          <div className="f-links-grid">

            {/* Navigation */}
            <div className="f-link-group">
              <h4 className="f-link-title">Platform</h4>
              <Link to="/">Home</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/mentor">MentorHub</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            {/* Social Icons */}
            <div className="f-socials">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/path-kannect-7624a63a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="f-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/pathkannect?igsh=cWQyMnIxdWtzY2Zu&utm_source=qr"
                className="f-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://chat.whatsapp.com/I4cJqcPn7746wD1uHIQCFg"
                className="f-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="f-bottom">
          <p className="f-copyright">
            © {currentYear} PathKannect. Built with passion for career growth.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
