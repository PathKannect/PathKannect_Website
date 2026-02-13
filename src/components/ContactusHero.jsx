import React from "react";
import "../assets/css/ContactHero.css";
import { MessageCircle, Mail, Phone, Clock, CheckCircle } from "lucide-react";

const ContactHero = () => {
  const contactCards = [
    {
      icon: <MessageCircle size={28} />,
      title: "Live Chat",
      desc: "Instant support from our team. Available 24/7.",
      linkText: "Start chat",
      href: "#",
      bgColor: "var(--chat-bg)",
      accentColor: "var(--chat-accent)"
    },
    {
      icon: <Mail size={28} />,
      title: "Email Us",
      desc: "Detailed inquiries? Send us an email anytime.",
      linkText: "pathkannect@gmail.com",
      href: "mailto:pathkannect@gmail.com",
      bgColor: "var(--email-bg)",
      accentColor: "var(--email-accent)"
    },
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      desc: "Quick phone support during business hours.",
      linkText: "+91 6304488441",
      href: "tel:+916304488441",
      bgColor: "var(--phone-bg)",
      accentColor: "var(--phone-accent)"
    }
  ];

  return (
    <section className="cu-hero-stage light-theme">
      <div className="cu-hero-container">
        <div className="cu-hero-text-content">
          <span className="cu-hero-badge">
            <span className="badge-shimmer"></span>
            Contact Us
          </span>
          <h1 className="cu-hero-title">
            Ready to crack your next <span className="cu-hero-gradient-text">interview?</span>
          </h1>
          <p className="cu-hero-description">
            We're here to help you every step of the way. Choose your preferred 
            contact method below and let's connect.
          </p>

          {/* NEW FRAME INSTEAD OF BUTTON */}
          <div className="cu-status-frame">
            <div className="status-item">
              <div className="status-indicator">
                <span className="dot pulse"></span>
                <span className="status-text">Support Online</span>
              </div>
            </div>
            <div className="status-divider"></div>
            <div className="status-item">
              <Clock size={16} className="status-icon" />
              <span>Proper Guidence</span>
            </div>
            <div className="status-divider"></div>
            <div className="status-item">
              <CheckCircle size={16} className="status-icon" />
              <span>Verified Experts</span>
            </div>
          </div>
        </div>

        <div className="cu-hero-cards-grid">
          {contactCards.map((card, idx) => (
            <div 
              key={idx} 
              className="cu-hero-info-card"
              style={{ 
                '--card-index': idx,
                '--bg-color': card.bgColor,
                '--accent-color': card.accentColor
              }}
            >
              <div className="cu-hero-card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
              <a href={card.href} className="cu-hero-link">
                <span>{card.linkText}</span>
                <div className="link-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 10L15 10M15 10L12 7M15 10L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="floating-elements">
        <div className="float-el float-1"></div>
        <div className="float-el float-2"></div>
        <div className="float-el float-3"></div>
      </div>
    </section>
  );
};

export default ContactHero;