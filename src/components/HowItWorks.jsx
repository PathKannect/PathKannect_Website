import React from "react";
import "../assets/css/HowItWorks.css";
import { FiCheckSquare, FiMessageCircle, FiTrendingUp } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Take an initial mock test",
      icon: <FiCheckSquare />,
      gradient: "card-blue"
    },
    {
      number: "02",
      title: "Get 3 industry-led interview simulations",
      icon: <FiMessageCircle />,
      gradient: "card-green"
    },
    {
      number: "03",
      title: "Improve every week over 21 days",
      icon: <FiTrendingUp />,
      gradient: "card-orange"
    },
    {
      number: "04",
      title: "Become interview ready",
      icon: <IoSchoolOutline />,
      gradient: "card-pink"
    }
  ];

  return (
    <section className="hiw-section" id="how-it-works">
      <div className="hiw-container">

        <header className="hiw-header">
          <h2>How It Works</h2>
          <p>
            Prepare smarter with structured mock interviews designed to help you
            succeed in real hiring scenarios.
          </p>
        </header>

        <div className="hiw-steps-wrapper">
          <div className="hiw-line"></div>

          <div className="hiw-grid">
            {steps.map((step, index) => (
              <div key={index} className={`hiw-card ${step.gradient}`}>
                
                <div className="hiw-icon">
                  {step.icon}
                </div>

                <div className="hiw-number">{step.number}</div>
                <div className="hiw-divider"></div>

                <h3>{step.title}</h3>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
