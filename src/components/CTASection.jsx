import React from "react";
import "../assets/css/CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-glass-card">

          <div className="cta-inner">

            {/* Left Icon */}
            <div className="cta-icon">
              💡
            </div>

            {/* Right Content */}
            <div className="cta-content">
              <span className="cta-badge">PRO TIP</span>

              <h2 className="cta-title">
                Interviews Aren’t <span className="text-gradient">scary</span>
              </h2>

              <p className="cta-description">
                When you’ve practiced them before, it’s easy. 
                Get mentored by industry pros and feel confident 
                before your next role.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
