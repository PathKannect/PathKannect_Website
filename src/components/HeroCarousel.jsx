import React from 'react';
import { ShieldCheck, Target, TrendingUp, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import '../assets/css/HeroCarousel.css';

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    // { number: "85%", label: "Placement Rate", icon: <TrendingUp size={20} /> },
    { number: "24/7", label: "Career Support", icon: <ShieldCheck size={20} /> },
    { number: "100+", label: "Experienced Mentors", icon: <Target size={20} /> },
  ];

  return (
    <section className="hero-section">
      {/* Dark Overlay for Text Readability */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">

          {/* Badge */}
          <div className="hero-badge animate-fade-in">
            <span className="badge-pulse"></span>
            Practice. Improve. Get Hired.
          </div>

          {/* Main Title */}
          <h1 className="hero-title animate-fade-in-delay-1">
            Crack Your Next Interview 
            <br className="hidden-mobile" />
            <span className="text-gradient"> with Real Industry Professionals
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description animate-fade-in-delay-2">
            Book role-specific Interview Readiness Session with experienced mentors, get actionable feedback and prepare exactly for the job you want — whether you’re entry-level or experienced.
          </p>

          {/* Value Points */}
          {/* <ul className="hero-points animate-fade-in-delay-2">
            <li>
              <span className="check">✓</span>
              Mock Interviews Starting at <strong>₹199 /-</strong>
            </li>
            <li>
              <span className="check">✓</span>
              Experienced Mentors from Top Companies
            </li>
            <li>
              <span className="check">✓</span>
              Personalized Feedback & Guidance
            </li>
          </ul> */}


          {/* Action Buttons */}
          <div className="hero-cta-group animate-fade-in-delay-3">
            <button className="btn-primary" onClick={() => navigate("/#contact")}>
              Book Industry Interview Session <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" onClick={() => navigate("/#programs")}>
              <Play size={18} fill="currentColor" /> View Programs
            </button>
          </div>
        </div>

        {/* Glassmorphic Stats Bar */}
        <div className="hero-stats-glass animate-fade-in-delay-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-text">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {/* Divider between stats, hidden on last item */}
              {i < stats.length - 1 && <div className="stat-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;