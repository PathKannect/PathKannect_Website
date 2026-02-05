import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/CTASection.css";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-glass-card">
          <div className="cta-content">
            <h2 className="cta-title">
               Interviews <span className="text-gradient">Aren’t scary</span>
            </h2>
            <p className="cta-description">
               when you’ve practiced them before. 
              Get mentored by industry pros and build the confidence to ace any role.
            </p>
            <div className="cta-actions">
              <button className="cta-btn-primary" onClick={() => navigate("/")}>
                Practice Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;