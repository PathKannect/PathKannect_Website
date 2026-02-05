import React from 'react';
import '../assets/css/TrustBanner.css';

const TrustBanner = () => {
  return (
    <section className="trust-banner">
      <div className="ribbon-container">
        <div className="modern-ribbon">
          {/* Decorative ends */}
          <div className="ribbon-wing left"></div>
          <div className="ribbon-wing right"></div>
          
          {/* Main Body */}
          <div className="ribbon-content">
            <div className="ribbon-shimmer"></div>
            <h2 className="ribbon-text">
              Authentic Materials <span className="separator">•</span> Unmatched Durability<span className="separator">•</span> Transparent
            </h2>
          </div>
        </div>
      </div>

      <div className="sub-text-wrapper">
        <p className="trust-sub">
          “We don’t just supply timber. We provide enduring materials that form the foundation of <span className="highlights">lasting structures</span>.”
        </p>
      </div>
    </section>
  );
};

export default TrustBanner;