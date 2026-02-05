import React from 'react';
import '../assets/css/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Role & Experience Level",
      description:
        "Select the job role you’re preparing for and whether you’re entry-level or experienced. We match you with the right mentor for realistic interview practice."
    },
    {
      number: "02",
      title: "Book a Mock Interview with a Mentor",
      description:
        "Choose a time slot, and confirm your session. No subscriptions — pay only for what you practice."
    },
    {
      number: "03",
      title: "Attend a Realistic Interview Simulation",
      description:
        "Experience a real interview environment with industry-style questions and scenarios — just like the real thing."
    },
    {
      number: "04",
      title: "Get Personalized Feedback & Guidance",
      description:
        "Receive detailed feedback on your strengths, weaknesses, and improvement areas so you know exactly what to improve."
    }
  ];

  return (
    <section className="hiw-section" id='how-it-works'>
      <div className="hiw-container">

        <header className="hiw-header">
          <h2>How It Works</h2>
          <p>
            Prepare smarter with structured mock interviews designed to help you
            succeed in real hiring scenarios.
          </p>
        </header>

        <div className="hiw-steps-wrapper">
          {/* Decorative connecting line (Desktop only) */}
          <div className="hiw-line"></div>

          <div className="hiw-grid">
            {steps.map((step, index) => (
              <div key={index} className="hiw-card">
                <div className="hiw-number">{step.number}</div>
                <div className="hiw-divider"></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
