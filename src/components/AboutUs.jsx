import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Lightbulb,
  Rocket,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";
import aboutpic1 from '../assets/images/abouthero.avif'
import aboutpic2 from '../assets/images/aboutsec.jpg'
import "../assets/css/AboutUs.css";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const Avatar = ({ name, color }) => (
    <div
      className="avatar-initials"
      style={{ backgroundColor: color }}
      title={name}
    >
      {name.split(' ').map(n => n[0]).join('')}
    </div>
  );


  return (
    <div className="about-container">
      {/* HERO */}
      {/* HERO */}
      <section className="hero-visual">
        <div className="animated-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="wrapper hero-grid">
          {/* Left Content */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="pill-badge">Our Origin Story</span>
            <h1>
              Turning Aspirations <br />
              into <span>Realities</span>
            </h1>
            <p className="hero-p">
              At PathKannect, we believe interviews shouldn’t be a surprise.
              Our platform enables job aspirants to book role-specific mock interviews
              with industry professionals who understand real hiring expectations.
            </p>
            <div className="hero-cta">
              <div className="mentor-count">
                <div className="avatar-group">
                  <Avatar name="John Doe" color="#6C63FF" />
                  <Avatar name="Sarah Smith" color="#14B8A6" />
                  <Avatar name="Alex Reed" color="#4F8CFF" />
                  <div className="avatar-more">+97</div>
                </div>
                <span>Join 100+ Industry Mentors</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mentor-image-container">
              <div className="experience-badge">
                <Zap size={20} fill="currentColor" />
                <span>Expert Feedback</span>
              </div>
              <img
                src={aboutpic1}
                alt="Mentor Explaining"
                className="main-mentor-img"
              />
              <div className="decorative-border"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="story-section">
        <div className="wrapper">
          <div className="story-grid">
            <motion.div
              className="story-visual"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card">
                <img
                  src={aboutpic2}
                  alt="Idea"
                />
                <div className="floating-icon">
                  <Lightbulb size={40} />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="story-text"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeIn}>
                The <span>Aha!</span> Moment
              </motion.h2>
              <motion.p variants={fadeIn}>
                Talent wasn’t the problem.
                Lack of interview practice was.
              </motion.p>
              <motion.p variants={fadeIn}>
                So we built PathKannect —
                a place to practice real interviews with people who’ve been on the other side of the table.


              </motion.p>

              <motion.div className="story-features" variants={staggerContainer}>
                <div className="feature-small">
                  <Zap className="feat-icon" />
                  Real Interview Practice
                </div>
                <div className="feature-small">
                  <ShieldCheck className="feat-icon" />
                  Professionals from the Industry
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section">
        <div className="wrapper">
          <div className="mv-header">
            <h2>
              Why We Built <span>PathKannect</span>
            </h2>
          </div>

          <div className="mv-container">
            <motion.div
              className="mv-box"
              whileHover={{ y: -10 }}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="box-icon">
                <Target />
              </div>
              <h3>
                The Problem</h3>
              <p>

                Most job aspirants attend interviews without knowing
                what to expect, how to answer, or where they go wrong.
              </p>
              <div className="box-glow"></div>
            </motion.div>

            <motion.div
              className="mv-box"
              whileHover={{ y: -10 }}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="box-icon">
                <Eye />
              </div>
              <h3>Our Solution
              </h3>
              <p>
                Role-specific mock interviews with industry mentors,
                so candidates can practice realistically and improve
                through clear, actionable feedback.
              </p>
              <div className="box-glow"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="audience-section">
        <div className="wrapper">
          <h2 className="section-title">
            Who We <span>Build For</span>
          </h2>

          <div className="audience-grid">
            <div className="audience-card">
              <Users />
              <h4>Students</h4>
              <p>Build industry-ready interview skills beyond classroom learning.</p>
            </div>

            <div className="audience-card">
              <Rocket />
              <h4>Career Switchers</h4>
              <p>Get clear, structured interview practice tailored to new tech roles.</p>
            </div>

            <div className="audience-card">
              <ShieldCheck />
              <h4>Professionals</h4>
              <p>Upskill, adapt, and prepare for interviews in fast-moving industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT (NO NUMBERS) */}
      {/* <section className="impact-stats">
        <div className="wrapper">
          <div className="stats-grid">
            <div className="stat-card">
              <Users />
              <p>Expert Mentorship Network</p>
            </div>
            <div className="stat-card">
              <Rocket />
              <p>Career Transformations Enabled</p>
            </div>
            <div className="stat-card">
              <ShieldCheck />
              <p>Trusted Industry Partnerships</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
