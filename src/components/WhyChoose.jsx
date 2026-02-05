import React from 'react';
import { Users, Target, Video, TrendingUp } from 'lucide-react';
import '../assets/css/WhyChoose.css';

const features = [
  {
    icon: <Users size={24} />,
    title: "Expert Mentors",
    description: "Learn from experienced professionals who actively interview and hire in your target roles."
  },
  {
    icon: <Target size={24} />,
    title: "Personalized Matching",
    description: "Get matched with mentors based on your role, experience level, and career goals."
  },
  {
    icon: <Video size={24} />,
    title: "Mock Interviews",
    description: "Practice real interview scenarios and receive actionable feedback you can apply immediately."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Career Growth",
    description: "Identify gaps, improve faster, and move confidently toward your next career milestone."
  }
];

const WhyChoose = () => {
  return (
    <section className="wc-wrapper">
      <div className="wc-container">
        
        {/* Header Section with Reveal Animation */}
        <header className="wc-header">
          <div className="reveal-mask">
            <h2 className="wc-title reveal-item">Why Choose PathKannect?</h2>
          </div>
          <div className="reveal-mask">
            <p className="wc-subtitle reveal-item" style={{ animationDelay: '0.15s' }}>
              We provide a comprehensive platform to help you connect with the right mentors 
              and achieve your career goals.
            </p>
          </div>
        </header>

        {/* Feature Grid */}
        <div className="wc-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="wc-card" 
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <div className="wc-icon-box">
                {feature.icon}
              </div>
              <h3 className="wc-card-title">{feature.title}</h3>
              <p className="wc-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;