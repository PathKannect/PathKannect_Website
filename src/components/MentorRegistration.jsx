import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../assets/css/MentorRegistration.css';

const MentorRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', company: '', jobTitle: '',
    experience: '', domain: '', linkedin: '', interviewTypes: '',
    timeSlots: '', location: '', bio: '', motivation: '',
    compensation: '', isProfessional: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ show: false, title: '', message: '', isSuccess: true });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // BLOCK NON-NUMERIC INPUT FOR COMPENSATION FIELD
    if (name === "compensation") {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: onlyNums });
    }
    // BLOCK NON-NUMERIC INPUT FOR PHONE (optional but helpful)
    else if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: onlyNums });
    }
    else {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    }

    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) tempErrors.email = "Invalid email address.";

    // Strict 10-digit check
    if (!phoneRegex.test(formData.phone)) tempErrors.phone = "Phone must be exactly 10 digits.";

    // Bio word count check (Max 200)
    const wordCount = formData.bio.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount > 200) tempErrors.bio = `Bio exceeds 200 words (${wordCount}/200).`;
    if (!formData.bio.trim()) tempErrors.bio = "Bio is required.";

    // Compensation numeric check (must be a number > 0)
    if (!formData.compensation) {
      tempErrors.compensation = "Compensation is required.";
    } else if (isNaN(formData.compensation)) {
      tempErrors.compensation = "Please enter numbers only.";
    }

    // General Required Fields
    Object.keys(formData).forEach(key => {
      if (key !== 'isProfessional' && !formData[key] && !tempErrors[key]) {
        tempErrors[key] = "Required field.";
      }
    });

    if (!formData.isProfessional) tempErrors.isProfessional = "Please confirm status.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // EmailJS configuration
      emailjs.send('service_xl0nkou', 'template_mefqhde', formData, 'izi0ekPdqkuGlGVvL')
        .then(() => {
          setModal({ show: true, title: 'Success!', message: 'Application submitted successfully!', isSuccess: true });
          setFormData({
            fullName: '', email: '', phone: '', company: '', jobTitle: '',
            experience: '', domain: '', linkedin: '', interviewTypes: '',
            timeSlots: '', location: '', bio: '', motivation: '',
            compensation: '', isProfessional: false
          });
          setIsSubmitting(false);
        })
        .catch(() => {
          setModal({ show: true, title: 'Error', message: 'Failed to send application.', isSuccess: false });
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="mrf-page-wrapper" id='mentor-registration'>
      {modal.show && (
        <div className="mrf-modal-overlay">
          <div className={`mrf-modal-content ${modal.isSuccess ? 'success' : 'error'}`}>
            <div className="mrf-modal-icon">{modal.isSuccess ? '✓' : '✕'}</div>
            <h2>{modal.title}</h2>
            <p>{modal.message}</p>
            <button onClick={() => setModal({ ...modal, show: false })} className="mrf-modal-btn">Close</button>
          </div>
        </div>
      )}


      <header className="mrf-header">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mrf-badge-wrapper"
        >
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mrf-main-title"
        >
          Start Your <span className="text-gradient">Professional Journey</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mrf-sub-title"
        >
          Fill out the application below. Join an elite community of
          mentors from top-tier global companies in <span className="text-highlight">under 5 minutes.</span>
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "80px" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mrf-header-divider"
        /> */}
      </header>

      <div className="mrf-form-card">
        <div className="mrf-form-inner-container">
          <h2 className="mrf-form-title">Mentor Registration Form</h2>
          <p className="mrf-form-hint">Fill out the form below to start your mentoring journey</p>

          <form onSubmit={handleSubmit} className="mrf-actual-form">
            <div className="mrf-grid-row">
              <div className="mrf-input-group">
                <label>Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="" />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>
              <div className="mrf-input-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="" />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>

            <div className="mrf-grid-row">
              <div className="mrf-input-group">
                <label>Phone Number *</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter 10 digits" maxLength="10" />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
              <div className="mrf-input-group">
                <label>Current Company *</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="" />
                {errors.company && <span className="error-text">{errors.company}</span>}
              </div>
            </div>

            <div className="mrf-grid-row">
              <div className="mrf-input-group">
                <label>Job Title *</label>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="" />
                {errors.jobTitle && <span className="error-text">{errors.jobTitle}</span>}
              </div>
              <div className="mrf-input-group">
                <label>Years of Experience *</label>
                <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="" />
                {errors.experience && <span className="error-text">{errors.experience}</span>}
              </div>
            </div>

            <div className="mrf-input-group mrf-full-width">
              <label>Primary Domain / Specialization *</label>
              <input type="text" name="domain" value={formData.domain} onChange={handleChange} placeholder="v.g., Software Engineering, HR, Product Management" />
              {errors.domain && <span className="error-text">{errors.domain}</span>}
            </div>

            <div className="mrf-input-group mrf-full-width">
              <label>LinkedIn Profile URL *</label>
              <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/yourprofile" />
              {errors.linkedin && <span className="error-text">{errors.linkedin}</span>}
            </div>

            <div className="mrf-input-group mrf-full-width">
              <label>Preferred Interview Types *</label>
              <input type="text" name="interviewTypes" value={formData.interviewTypes} onChange={handleChange} placeholder="v.g., Technical, HR, Managerial" />
              {errors.interviewTypes && <span className="error-text">{errors.interviewTypes}</span>}
            </div>

            <div className="mrf-grid-row">
              <div className="mrf-input-group">
                <label>Available Time Slots *</label>
                <input type="text" name="timeSlots" value={formData.timeSlots} onChange={handleChange} placeholder="v.g., Weekday evenings, Weekend morn" />
                {errors.timeSlots && <span className="error-text">{errors.timeSlots}</span>}
              </div>
              <div className="mrf-input-group">
                <label>City / Time Zone *</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="v.g., Mumbai, IST" />
                {errors.location && <span className="error-text">{errors.location}</span>}
              </div>
            </div>

            <div className="mrf-input-group mrf-full-width">
              <label>Short Bio (100-200 words) *</label>
              <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Tell us about your professional background and expertise..." rows="4"></textarea>
              {errors.bio && <span className="error-text">{errors.bio}</span>}
            </div>

            <div className="mrf-input-group mrf-full-width">
              <label>Why do you want to become a mentor? *</label>
              <textarea name="motivation" value={formData.motivation} onChange={handleChange} placeholder="Share your motivation for joining our mentor network..." rows="4"></textarea>
              {errors.motivation && <span className="error-text">{errors.motivation}</span>}
            </div>

            <div className="mrf-input-group mrf-full-width">
              <label>Expected Compensation per Session (₹) *</label>
              <input
                type="text"
                name="compensation"
                value={formData.compensation}
                onChange={handleChange}
                placeholder="v.g., 1000"
              />
              {errors.compensation && <span className="error-text">{errors.compensation}</span>}
            </div>

            <div className="mrf-checkbox-box">
              <label className="mrf-custom-checkbox">
                <input type="checkbox" name="isProfessional" checked={formData.isProfessional} onChange={handleChange} />
                <span>I confirm I am a working professional *</span>
              </label>
            </div>
            {errors.isProfessional && <div className="error-text" style={{ paddingLeft: '15px' }}>{errors.isProfessional}</div>}

            <button type="submit" className="mrf-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorRegistration;