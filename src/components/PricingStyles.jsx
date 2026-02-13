import React from 'react';
import '../assets/css/PricingStyles.css';
import { useNavigate } from 'react-router-dom';

const InterviewProgramUI = () => {
  const mainBenefits = [
    "3 industry interview simulations",
    "Detailed feedback after each session",
    "Skill gap analysis report",
    "Final readiness score",
    "Interview readiness certificate",
    "21-day structured improvement plan"
  ];

  const optionalUpsells = [
    { name: "Question Bank +", info: "500+ Curated Q&A PDF", img: "📚" },
    { name: "Coding Pack +", info: "Real-world Assignments", img: "💻" },
    { name: "Resume Review +", info: "ATS Optimization", img: "📝" },
    { name: "Strategy Call +", info: "1:1 Roadmap Session", img: "📞" }
  ];

  const navigate = useNavigate();


  return (
    <div className="irp-page-wrapper" id="programs">
      <div className="irp-layout-center">

        <div className="irp-title-group">
          <h1 className="irp-main-heading">Become Interview-Ready in 21 Days</h1>
          <p style={{ color: '#64748b', fontSize: '18px' }}>Practice real interviews, get personalized feedback, and follow a structured 21-day improvement roadmap.</p>
        </div>

        {/* Featured Main Product */}
        <div className="irp-featured-card-prime">
          <div className="irp-badge-recommended">Popular</div>

          <div className="irp-content-left">
            <h2 style={{ fontSize: '28px', fontWeight: '800' }}>Interview Readiness Program</h2>
            <div className="irp-price-wrap">
              <span className="irp-price-current">₹2,999</span>
              <span className="irp-price-original">₹5,999</span>
            </div>

            <div className="irp-benefit-list">
              {mainBenefits.map((text, i) => (
                <div key={i} className="irp-feature-item">
                  <span className="irp-check-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="irp-content-right">
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Complete Access</p>
              <p style={{ fontSize: '15px', color: '#475569', marginTop: '8px' }}>Start your 21-day transformation today.</p>
            </div>
            <button className="irp-primary-button" onClick={() => navigate("/#contact")}>Enroll in Program</button>
            {/* <p style={{textAlign: 'center', fontSize: '12px', color: '#94a3b8', marginTop: '15px'}}>7-Day Money Back Guarantee</p> */}
          </div>
        </div>

        <h3 className="irp-addon-section-title">
          🚀 Boost Your Prep with Pro Add-Ons
        </h3>

        {/* Upsell Add-ons */}
        {/* <h3 className="irp-addon-section-title">
          <span></span> Select Below add-Ons
        </h3> */}

        <div className="irp-addon-grid">
          {optionalUpsells.map((item, idx) => (
            <div key={idx} className="irp-addon-card-item">
              <div className="irp-addon-icon-box">{item.img}</div>
              <h4 className="irp-addon-card-title">{item.name}</h4>
              <p className="irp-addon-card-desc">{item.info}</p>
              {/* <div style={{marginTop: 'auto', paddingTop: '15px', display: 'flex', alignItems: 'center', gap: '5px', color: '#6366f1', fontSize: '13px', fontWeight: '700'}}>
                <span>Upgrade My Prep</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InterviewProgramUI;