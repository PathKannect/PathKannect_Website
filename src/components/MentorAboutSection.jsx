import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/MentorAboutSection.css';

const AboutSection = () => {
  return (
    <section className="mh-about-section">
      {/* Animated Background Decorative Elements */}
      <div className="bg-glow blob-1"></div>
      <div className="bg-glow blob-2"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mh-about-container"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mh-badge"
        >
          Our Vision
        </motion.span>

        <h2 className="mh-about-heading">
          We’re redefining how the <span className="gradient-text">next generation</span> of talent is built.
        </h2>

        <p className="mh-about-text">
          MentorHub is a premium ecosystem where career-defining insights meet 
          real-world expertise. We don't just mock-interview; we transform 
          potential into professional authority.
        </p>

        <div className="mh-about-grid">
            {[
                { label: "Mentors", value: "100+" },
                { label: "Students", value: "40+" },
                { label: "Success Rate", value: "100%" }
            ].map((stat, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="stat-card"
                >
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;