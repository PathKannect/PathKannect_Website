import React from "react";
import {
  GraduationCap,
  Briefcase,
  Target,
  Mic,
  Users,
  BookOpen,
  IndianRupee,
  BadgeCheck,
  CalendarCheck,
  TrendingUp,
  Handshake,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Benefit.css";

const Benefit = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Students & Early Career Professionals",
      description:
        "Focused guidance to help you prepare smarter, gain confidence, and land the right opportunities.",
      icon: <GraduationCap className="main-icon" />,
      points: [
        {
          title: "Strategic Career Mapping",
          desc: "Role-specific preparation roadmap.",
          icon: <Target size={16} />,
        },
        {
          title: "Technical & Managerial Mock Interviews",
          desc: "Real interview simulations.",
          icon: <Mic size={16} />,
        },
        {
          title: "Industry Expert Networking",
          desc: "Insights, referrals, and guidance.",
          icon: <Users size={16} />,
        },
        {
          title: "Interview Prep E-Book (Add-On)",
          desc: "Key Concepts, Common Interview Questions, and Video Resources.",
          icon: <BookOpen size={16} />,
        },
      ],
      theme: "sky",
    },
    {
      title: "Mentors & Industry Professionals",
      description:
        "Turn your experience into impact while strengthening your own career growth.",
      icon: <Briefcase className="main-icon" />,
      points: [
        {
          title: "Monetize Your Expertise",
          desc: "Paid mock interviews & advisory sessions.",
          icon: <IndianRupee size={16} />,
        },
        {
          title: "Build Industry Authority",
          desc: "Establish yourself as a verified expert.",
          icon: <BadgeCheck size={16} />,
        },
        {
          title: "Zero Client Hunting, Zero Admin",
          desc: "We handle everything else.",
          icon: <CalendarCheck size={16} />,
        },
        {
          title: "Stay Ahead of Hiring Trends",
          desc: "Senior & leadership expectations.",
          icon: <TrendingUp size={16} />,
        },
        {
          title: "Give Back with Real Impact",
          desc: "Practical guidance that delivers results.",
          icon: <Handshake size={16} />,
        },
      ],
      theme: "mint",
    },
  ];

  return (
    <section className="light-benefit-section">
      <div className="light-benefit-container">
        <header className="light-header">
          <span className="light-badge">Opportunities</span>
          <h2 className="section-title">
            Who Can <span className="highlight">Benefit?</span>
          </h2>
          <p>Tailored support for learners and professionals at every stage.</p>
        </header>

        <div className="light-card-grid">
          {benefits.map((item, index) => (
            <div key={index} className={`light-card ${item.theme}-theme`}>
              <div className="light-card-top">
                <div className="light-icon-wrapper">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>

              <p className="light-desc">{item.description}</p>

              <div className="light-points">
                {item.points.map((point, idx) => (
                  <div key={idx} className="light-point-item">
                    <span className="light-point-icon">{point.icon}</span>

                    <span className="light-point-text">
                      <span className="light-point-title">
                        {point.title}
                      </span>
                      <span className="light-point-subtext">
                        {" "}: {point.desc}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="light-cta"
                onClick={() => navigate("/aboutus")}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
