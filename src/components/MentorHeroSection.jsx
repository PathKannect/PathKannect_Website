import React from 'react';
import '../assets/css/MentorHero.css';
import mentorpagebackground from '../assets/images/mentorpagebackground.avif'
import mentorsideimage from '../assets/images/mentorright.jpeg'
import { useNavigate } from 'react-router-dom';

const MentorHero = () => {
  const navigate = useNavigate();

  const Avatar = ({ name, color }) => {
    const initials = name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();

    return (
      <div
        className="avatar-initials"
        style={{ backgroundColor: color }}
        title={name}
      >
        {initials}
      </div>
    );
  };

  return (
    <section className="mi-hero-master-container">
      {/* Subtle Ghosted Background Image */}
      <div className="mi-hero-ghost-layer">
        <img
          // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
          src={mentorpagebackground}
          alt="background"
        />
      </div>

      <div className="mi-hero-content-wrapper">
        {/* Left Column: Text Content */}
        <div className="mi-hero-text-stack">
          <div className="mi-hero-status-badge">
            Join Our Curated Mentor Network
          </div>

          <h1 className="mi-hero-main-title">
            Turn Your Industry <br />
            <span className="mi-hero-highlight-blue">Experience</span> into Paid Impact
          </h1>

          <p className="mi-hero-body-text">
            Conduct mock interviews, guide aspiring professionals, and earn
            flexible side income. No long-term commitment.
          </p>

          <div className="mi-hero-action-group">
            <button
              className="mi-hero-primary-cta"
              onClick={() => {
                const section = document.getElementById("mentor-registration");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Apply as Mentor <span className="mi-hero-cta-arrow">→</span>
            </button>

            <div className="avatar-group">
              <Avatar name="PK Mentor" color="#6C63FF" />
              <Avatar name="NM Expert" color="#14B8A6" />
              <Avatar name="RS Coach" color="#4F8CFF" />

              <div className="avatar-more">+97</div>
            </div>

          </div>
        </div>

        {/* Right Column: Visual Component */}
        <div className="mi-hero-visual-box">
          <div className="mi-hero-image-container">
            <img
              // src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
              src={mentorsideimage}
              alt="Mentorship Session"
              className="mi-hero-featured-photo"
            />
            {/* Glassmorphic Testimonial */}
            {/* <div className="mi-hero-quote-card">
              <p className="mi-hero-quote-message">"Mentoring helps me stay sharp."</p>
              <p className="mi-hero-quote-sub">{"— Sarah J., Product Lead"}</p>
            </div> */}
          </div>
          {/* Background decoration */}
          <div className="mi-hero-card-shadow-element"></div>
        </div>
      </div>
    </section>
  );
};

export default MentorHero;