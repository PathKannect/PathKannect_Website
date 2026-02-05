import React from "react";
import "../assets/css/ContactHero.css";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const ContactHero = () => {
  const contactCards = [
    {
      icon: <MessageCircle size={28} />,
      title: "Live Chat",
      desc: "Instant support from our team. Available 24/7.",
      linkText: "Start chat",
      href: "#chat",
      bgColor: "var(--chat-bg)",
      accentColor: "var(--chat-accent)"
    },
    {
      icon: <Mail size={28} />,
      title: "Email Us",
      desc: "Detailed inquiries? Send us an email anytime.",
      linkText: "hello@company.com",
      href: "mailto:hello@company.com",
      bgColor: "var(--email-bg)",
      accentColor: "var(--email-accent)"
    },
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      desc: "Quick phone support during business hours.",
      linkText: "+1 (555) 123-4567",
      href: "tel:+15551234567",
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
            Ready to get <span className="cu-hero-gradient-text">started?</span>
          </h1>
          <p className="cu-hero-description">
            We're here to help you every step of the way. Choose your preferred 
            contact method below and let's connect.
          </p>
          <div className="cu-hero-cta">
            <button className="cta-button primary">
              Get Started Today
            </button>
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
      
      {/* Floating background elements */}
      <div className="floating-elements">
        <div className="float-el float-1"></div>
        <div className="float-el float-2"></div>
        <div className="float-el float-3"></div>
      </div>
    </section>
  );
};

export default ContactHero;
