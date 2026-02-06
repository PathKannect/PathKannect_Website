import React, { useState } from "react";
import "../assets/css/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    phone: "",
    email: "",
    collegeName: "",
    passoutYear: "",
    experienceLevel: "",
    currentRole: "",
    lookingFor: "",
    ebookPreference: "Yes, I want the e-book", // 1. Added field with default value
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycby3ia4FkDscy-StLRcTXel8PelibfLnNhXZkpO-YiSJOrlGbnmv5Tp6CI7RpmI7t_S6/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    const loadToast = toast.loading("Sending your details...");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      toast.update(loadToast, {
        render: "Application submitted successfully! 🎉",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });

      // 2. Updated Reset form to include default ebook value
      setFormData({
        studentName: "",
        phone: "",
        email: "",
        collegeName: "",
        passoutYear: "",
        experienceLevel: "",
        currentRole: "",
        lookingFor: "",
        ebookPreference: "Yes, I want the e-book",
      });

    } catch (error) {
      console.error(error);
      toast.update(loadToast, {
        render: "Error submitting form",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="wc-contact-wrapper" id="contact">
      <div className="wc-contact-container">
        {/* LEFT SIDE: INFO */}
        <div className="wc-contact-info">
          <div className="wc-info-content">
            <span className="wc-tagline">Start your interview practice</span>
            <h2 className="wc-title">
              Walk into Your Next Interview Prepared.{" "}
              <span>
                We’ll contact you within <br />
                <span className="wc-gradient-text">24 hours</span>
              </span>
            </h2>

            <p className="wc-description">
              Walk into Your Next Interview Prepared, Practice real interviews. Get clear, actionable feedback.
            </p>

            <div className="wc-details-list">
              <div className="wc-detail-item">
                <div className="wc-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Call Anytime</h4>
                  <a href="tel:+916304488441" className="wc-link">+91 6304488441</a>
                </div>
              </div>

              <div className="wc-detail-item">
                <div className="wc-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4>Email Support</h4>
                  <a href="mailto:pathkannect@gmail.com" className="wc-link">pathkannect@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: STUDENT FORM */}
        <div className="wc-form-card">
          <form onSubmit={handleSubmit} className="wc-modern-form">
            <div className="wc-input-row">
              <div className="wc-input-group">
                <label>Student Name <span className="wc-required">*</span></label>
                <input type="text" name="studentName" placeholder="Enter your full name" required value={formData.studentName} onChange={handleChange} />
              </div>
              <div className="wc-input-group">
                <label>Phone Number <span className="wc-required">*</span></label>
                <input type="tel" name="phone" placeholder="+91 xxxxxxxxxx" required value={formData.phone} onChange={handleChange} pattern="[0-9]{10}"   maxLength="10"   title="Please enter a valid 10-digit phone number"/>
              </div>
            </div>

            <div className="wc-input-row">
              <div className="wc-input-group">
                <label>Email Address <span className="wc-required">*</span></label>
                <input type="email" name="email" placeholder="your.email@domain.com" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="wc-input-group">
                <label>College Name <span className="wc-required">*</span></label>
                <input type="text" name="collegeName" placeholder="e.g. IIT Delhi" required value={formData.collegeName} onChange={handleChange} />
              </div>
            </div>

            <div className="wc-input-row">
              <div className="wc-input-group">
                <label>Passout Year <span className="wc-required">*</span></label>
                <input type="number" name="passoutYear" placeholder="2025" min="2015" max="2030" required value={formData.passoutYear} onChange={handleChange} />
              </div>
              <div className="wc-input-group">
                <label>Experience Level <span className="wc-required">*</span></label>
                <select name="experienceLevel" required value={formData.experienceLevel} onChange={handleChange}>
                  <option value="">Select Experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="1-2">1-2 Years</option>
                  <option value="2-3">2-3 Years</option>
                  <option value="3-4">3-4 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>
            </div>

            <div className="wc-input-row">
              <div className="wc-input-group">
                <label>Current/Aspiring Role <span className="wc-required">*</span></label>
                <select name="currentRole" required value={formData.currentRole} onChange={handleChange}>
                  <option value="">Select Role</option>
                  <option value="Frontend">Frontend Developer</option>
                  <option value="Backend">Backend Developer</option>
                  <option value="Fullstack">Full Stack Developer</option>
                  <option value="QA_Automation">QA Automation</option>
                  <option value="Manual_Testing">Manual Testing</option>
                  <option value="Cloud">Cloud Engineer</option>
                  <option value="Sales">Sales</option>
                  <option value="IT_Admin">IT Admin</option>
                  <option value="Human_Resources">Human Resources</option>
                  <option value="Data_Analyst">Data Analyst/Data Engineer</option>
                </select>
              </div>
              <div className="wc-input-group">
                <label>What are you looking for?</label>
                <input type="text" name="lookingFor" placeholder="e.g. Mock Interview, Resume Review" value={formData.lookingFor} onChange={handleChange} />
              </div>
            </div>

            {/* 3. New Field: Interview Prep E-book */}
            <div className="wc-input-row">
              <div className="wc-input-group full-width">
                <label>Interview Prep E-book</label>
                <select
                  name="ebookPreference"
                  value={formData.ebookPreference}
                  onChange={handleChange}
                >
                  <option value="Yes, I want the e-book">Yes, I want the e-book</option>
                  <option value="No, not needed right now">No, not needed right now</option>
                </select>
              </div>
            </div>

            <button type="submit" className="wc-submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? "Submitting..." : "Submit Application"}</span>
              {!isSubmitting && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </section>
  );
};

export default Contact;