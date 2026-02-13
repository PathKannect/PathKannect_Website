import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, Globe, Target } from 'lucide-react';
import '../assets/css/WhyBecomeMentor.css';

const WhyBecomeMentor = () => {
  const benefits = [
    {
      icon: <Briefcase size={22} />,
      title: "Monetize Your Expertise",
      description: "Paid mock interviews & advisory sessions."
    },
    {
      icon: <Clock size={22} />,
      title: "Build Industry Authority",
      description: "Establish yourself as a verified expert."
    },
    {
      icon: <Globe size={22} />,
      title: "Zero Client Hunting, Zero Admin",
      description: "We handle everything else."
    },
    {
      icon: <Target size={22} />,
      title: "Stay Ahead of Hiring Trends",
      description: "Senior & leadership expectations."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Smooth expo ease
    }
  };

  return (
    <section className="wbm-section">
      <div className="wbm-container">
        
        {/* Exact Header from Screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wbm-header"
        >
          <h2 className="wbm-main-heading">Why Become a Mentor?</h2>
          <p className="wbm-subheading">
            Join a community of professionals making a difference while building their own careers.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="wbm-grid"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)" 
              }}
              className="wbm-card"
            >
              <div className="wbm-icon-box">
                {benefit.icon}
              </div>
              
              <h3 className="wbm-card-title">{benefit.title}</h3>
              <p className="wbm-card-description">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyBecomeMentor;