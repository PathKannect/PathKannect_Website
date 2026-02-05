import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  CheckCircle, 
  Briefcase, 
  Users, 
  Star, 
  ArrowRight, 
  Loader2, 
  Mail, 
  Phone, 
  Award 
} from "lucide-react";
import herosec from '../assets/images/homepic.avif'
import "../assets/css/Mentors.css";

const MentorPage = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    experience: "",
    domain: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("mntr-app-application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const SERVICE_ID = "YOUR_SERVICE_ID"; 
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus({ 
            type: "success", 
            message: "Application sent successfully! Our team will contact you soon." 
          });
          setIsSubmitting(false);
          setFormData({ 
            name: "", email: "", contact: "", 
            experience: "", domain: "", message: "" 
          });
          formRef.current.reset();
        },
        (error) => {
          setStatus({ 
            type: "error", 
            message: "Failed to send application. Please try again later." 
          });
          setIsSubmitting(false);
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="mntr-app-page-wrapper">
      {/* HERO SECTION */}
      <section className="mntr-app-hero">
        <div className="mntr-app-container">
          <div className="mntr-app-hero-content">
            <div className="mntr-app-hero-badge">
              <Star size={16} fill="currentColor" />
              <span>Join the Elite 1% of Mentors</span>
            </div>
            <h1 className="mntr-app-hero-title">
              Your Experience is the <br />
              <span className="mntr-app-text-gradient">Blueprint for Others</span>
            </h1>
            <p className="mntr-app-hero-subtext">
              Transition from being a great developer to a world-class leader. 
              Share your knowledge and shape the future of tech.
            </p>

            <div className="mntr-app-hero-actions">
              <button className="mntr-app-btn-primary" onClick={scrollToForm}>
                Apply to Mentor <ArrowRight size={18} />
              </button>
              <button className="mntr-app-btn-outline">View Guidelines</button>
            </div>
          </div>
        </div>
        <div className="mntr-app-hero-bg-blur"></div>
      </section>

      {/* GUIDANCE SECTION */}
      <section className="mntr-app-guidance">
        <div className="mntr-app-container mntr-app-grid-2">
          <div className="mntr-app-guidance-image-wrapper">
            <img
              src={herosec}
              alt="Mentorship Session"
              className="mntr-app-main-img"
            />
            <div className="mntr-app-experience-card">
              <Award className="mntr-app-card-icon" size={32} />
              <span className="mntr-app-exp-number">10k+</span>
              <span className="mntr-app-exp-text">Mentees Guided</span>
            </div>
          </div>

          <div className="mntr-app-guidance-content">
            <span className="mntr-app-section-tag">Empower Growth</span>
            <h2 className="mntr-app-section-title">The Value of <span className="mntr-app-highlight">Guidance</span></h2>
            <p className="mntr-app-section-desc">
              Mentorship is more than just answering technical questions. 
              It’s about providing clarity, building confidence, and defining career paths.
            </p>

            <ul className="mntr-app-points-list">
              <li>
                <div className="mntr-app-icon-box"><Users size={20} /></div>
                <div>
                  <strong>Leadership Skills</strong>
                  <p>Refine your own management and communication styles.</p>
                </div>
              </li>
              <li>
                <div className="mntr-app-icon-box"><CheckCircle size={20} /></div>
                <div>
                  <strong>Architectural Quality</strong>
                  <p>Help others build scalable and maintainable systems.</p>
                </div>
              </li>
              <li>
                <div className="mntr-app-icon-box"><Briefcase size={20} /></div>
                <div>
                  <strong>Career Progression</strong>
                  <p>Guide engineers through interviews and promotions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="mntr-app-process">
        <div className="mntr-app-container">
          <div className="mntr-app-section-header">
            <span className="mntr-app-section-tag">How it Works</span>
            <h2 className="mntr-app-section-title">Three Simple Steps</h2>
            <p className="mntr-app-section-desc">Start your journey as a mentor today</p>
          </div>

          <div className="mntr-app-process-grid">
            <div className="mntr-app-step-card">
              <span className="mntr-app-step-number">01</span>
              <h3>Quick Application</h3>
              <p>Submit your professional background and areas of expertise.</p>
            </div>

            <div className="mntr-app-step-card">
              <span className="mntr-app-step-number">02</span>
              <h3>Quality Review</h3>
              <p>Our team reviews your profile to ensure high-quality standards.</p>
            </div>

            <div className="mntr-app-step-card">
              <span className="mntr-app-step-number">03</span>
              <h3>Connect & Grow</h3>
              <p>Get matched with mentees and start your first 1-on-1 session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="mntr-app-application-form" className="mntr-app-form-section">
        <div className="mntr-app-container">
          <div className="mntr-app-form-wrapper">
            <div className="mntr-app-form-info">
              <div>
                <h2>Ready to <br />Start Mentoring?</h2>
                <p>
                  Complete the application form. Our talent acquisition team 
                  will reach out within 24 hours to schedule a verification call.
                </p>
              </div>

              <div className="mntr-app-form-info-footer">
                <div className="mntr-app-info-stat">
                  <Mail size={18} />
                  <span>pathkannect@gmail.com</span>
                </div>
                <div className="mntr-app-info-stat">
                  <Phone size={18} />
                  <span>+91 6304488441</span>
                </div>
              </div>

              {status.message && (
                <div className={`mntr-app-status-msg ${status.type}`}>
                  {status.type === "success" ? <CheckCircle size={16} /> : null}
                  {status.message}
                </div>
              )}
            </div>

            <form className="mntr-app-actual-form" ref={formRef} onSubmit={sendEmail}>
              <div className="mntr-app-form-grid">
                <div className="mntr-app-input-group">
                  <label>Full Name</label>
                  <input 
                    type="text" name="name" placeholder="Enter your name" 
                    value={formData.name} onChange={handleChange} required 
                  />
                </div>
                <div className="mntr-app-input-group">
                  <label>Email Address</label>
                  <input 
                    type="email" name="email" placeholder="email@example.com" 
                    value={formData.email} onChange={handleChange} required 
                  />
                </div>
                <div className="mntr-app-input-group">
                  <label>Contact Number</label>
                  <input 
                    type="tel" name="contact" placeholder="+1 234 567 890" 
                    value={formData.contact} onChange={handleChange} required 
                  />
                </div>
                <div className="mntr-app-input-group">
                  <label>Experience (Years)</label>
                  <input 
                    type="number" name="experience" placeholder="e.g. 5" 
                    value={formData.experience} onChange={handleChange} required 
                  />
                </div>
              </div>

              <div className="mntr-app-input-group">
                <label>Primary Domain</label>
                <select name="domain" value={formData.domain} onChange={handleChange} required>
                  <option value="">Select your specialty</option>
                  <option value="Frontend">Frontend Development</option>
                  <option value="Backend">Backend Development</option>
                  <option value="FullStack">Full Stack Engineering</option>
                  <option value="DevOps">DevOps & Cloud</option>
                  <option value="QA">QA & Automation</option>
                  <option value="DataScience">Data Science</option>
                </select>
              </div>

              <div className="mntr-app-input-group">
                <label>Why do you want to join?</label>
                <textarea 
                  name="message" rows="4" 
                  placeholder="Tell us a bit about your experience and style..."
                  value={formData.message} onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mntr-app-submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mntr-app-spinner" size={18} /> Sending Application...
                  </>
                ) : (
                  "Send Application"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorPage;