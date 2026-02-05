import React from 'react';
import '../assets/css/CompanyProfile.css';
import { MdLocalShipping } from "react-icons/md";


const CompanyProfile = () => {
  const values = [
    { title: "Fair Pricing", icon: "⚖️", desc: "Honest, competitive prices for farmers and suppliers." },
    { title: "Transparency", icon: "🔍", desc: "Clear communication and open dealings at every stage." },
    { title: "Commitment", icon: "🤝", desc: "Timely payments, timely deliveries, and consistent support." },
    { title: "Quality", icon: "🌲", desc: "Verified, well-measured, and properly handled wood supply." },
    { title: "Responsibility", icon: "🌱", desc: "Ethical sourcing and sustainable operations." },
    { title: "Entrepreneurial Support", icon: "🎯", desc: "Encouraging innovation by funding and nurturing promising startup ideas." }
  ];

  const reasons = [
    "Expert team with multi-state procurement experience",
    "Strong network across South India’s farming and auction regions",
    "Long-term relationships with plywood factories and paper mills",
    "Construction timber supply to West & North India",
    "Reliable truck hiring and logistics support",
    "Fast payments & season-proof supply",
    "Professional measurement and on-ground handling"
  ];

  const regions = [
    "Andhra Pradesh",
    "Telangana",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "North India"
  ];

  return (
    <section className="company-profile-section">

      {/* NEW: Profile Header Section */}
      <div className="profile-header">
        <div className="header-content">
          <span className="brand-tag">ikartandco</span>
          <h1 className="profile-main-title">
            South India’s Trusted Wood Procurement & <br />
            <span className="highlights">Industrial Supply Partner</span>
          </h1>
          <div className="title-separator"></div>
          <p className="profile-sub-desc">
            Reliable sourcing, fair pricing, and seamless delivery of plantation wood,
            construction timber, and industrial raw material.
          </p>
        </div>
      </div>

      <div className="profile-container">

        {/* SECTION 1: Mission & Vision */}
        <div className="mv-grid">
          <div className="mv-card mission">
            <h3 className="mv-title">Our Mission</h3>
            <p className="mv-text">
              To build a transparent and sustainable wood supply chain while empowering farmers, industries, and new entrepreneurs through long-term innovation and growth.
            </p>
          </div>
          <div className="mv-card vision">
            <h3 className="mv-title">Our Vision</h3>
            <p className="mv-text">
              To be South India’s most trusted partner for plantation wood sourcing and industrial timber logistics, while evolving into a startup funding and incubation platform that builds the next generation of successful companies.
            </p>
          </div>
        </div>

        {/* SECTION 2: Our Values */}
        <div className="values-section">
          <div className="section-header-wrapper">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-sub">The principles that drive our operations</p>
          </div>

          <div className="values-grid">
            {values.map((item, index) => (
              <div key={index} className="value-card">
                <div className="value-icon-box">{item.icon}</div>
                <h4 className="value-title">{item.title}</h4>
                <p className="value-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Why Choose Us & Service Regions */}
        <div className="split-info-section">

          {/* Why Choose ikartandco */}
          <div className="info-block why-us">
            <h2 className="section-heading">Why Choose ikartandco</h2>
            <ul className="reasons-list">
              {reasons.map((reason, index) => (
                <li key={index}>
                  <div className="check-circle">✓</div>
                  <span className="reason-text">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Regions */}
          <div className="info-block regions">
            <h2 className="section-heading">Service Regions</h2>
            <p className="region-sub">Reliable logistics across key territories:</p>

            <div className="regions-tags">
              {regions.map((region, index) => (
                <span key={index} className="region-tag">
                  {region}
                </span>
              ))}
            </div>

            {/* Stylized Map Placeholder */}

              <div className="map-visual">
                <div className="map-dots"></div>
                <div className="map-content">
                  <span className="map-icon truck-move">
                    <MdLocalShipping />
                  </span>
                  <span>Pan-India Logistics Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default CompanyProfile;