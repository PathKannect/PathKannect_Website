import React from 'react';
import mentorsideimagesreg from '../assets/images/mentorsideimagesreg.avif'
import '../assets/css/MentorRequirements.css';

const MentorRequirements = () => {
  const requirements = [
    {
      title: "Professional Experience",
      description: "Minimum of 3-5 years of professional experience in a relevant industry or field."
    },
    {
      title: "Communication Skills",
      description: "Excellent verbal and written communication skills, with the ability to provide constructive feedback."
    },
    {
      title: "Time Commitment",
      description: "Ability to commit at least 2-4 hours per month for mentoring sessions and follow-ups."
    },
    {
      title: "Domain Expertise",
      description: "Demonstrated expertise and deep knowledge in a specific domain relevant to mentees' needs."
    }
  ];

  return (
    <section className="mr-main-section">
      <div className="mr-container">
        
        {/* Left Side: Content */}
        <div className="mr-content-side">
          <h2 className="mr-heading">Mentor Requirements</h2>
          <p className="mr-subtext">
            We maintain a high standard of quality for our aspirants. To ensure the best 
            experience, we look for the following qualifications in our mentors.
          </p>

          <div className="mr-list-container">
            {requirements.map((item, index) => (
              <div key={index} className="mr-requirement-card">
                <div className="mr-icon-wrapper">
                  <svg className="mr-check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#2563eb"/>
                    <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="mr-text-box">
                  <h4 className="mr-item-title">{item.title}</h4>
                  <p className="mr-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mr-image-side">
          <img 
            // src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80" 
            src={mentorsideimagesreg}
            alt="Workspace setup" 
            className="mr-featured-img"
          />
        </div>

      </div>
    </section>
  );
};

export default MentorRequirements;