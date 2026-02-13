import React, { useState } from "react";
import "../assets/css/FAQ.css";
import { ChevronDown, ChevronUp, Users, TrendingUp, CreditCard, Clock, Zap } from "lucide-react";

const faqData = [
  {
    icon: Users,
    question: "Is this only for beginners?",
    answer: "No. Our platform supports students, fresh graduates, working professionals switching roles, and experienced candidates preparing for senior interviews. Every mock session is tailored to your experience level and target role.",
    color: "var(--spark-purple)"
  },
  {
    icon: TrendingUp,
    question: "Will this actually improve my interview performance?",
    answer: "Yes — because this is not random practice. You get industry-led simulations, structured feedback, skill gap analysis, a final readiness score, and a 21-day roadmap. We focus on measurable progress, not generic tips.",
    color: "var(--ocean-blue)"
  },
  {
    icon: CreditCard,
    question: "Is this worth ₹2,999?",
    answer: "Compare it to the cost of losing one job opportunity or months of self-preparation without direction. This is a focused 21-day transformation designed to significantly increase your offer probability.",
    color: "var(--emerald-green)"
  },
  {
    icon: Clock,
    question: "What if I’m busy?",
    answer: "The program is structured for working professionals. It is highly flexible: you can choose your own session slots, opt for weekend interviews, and complete self-paced tasks between sessions.",
    color: "var(--amber-gold)"
  },
  {
    icon: Zap,
    question: "How does the 21-Day Industry Interview Program work?",
    answer: "It follows a structured roadmap: 1. Take a skill assessment. 2. Receive a personalized plan. 3. Attend 3 industry-led mock interviews. 4. Get detailed scorecards. 5. Complete a final readiness evaluation.",
    color: "var(--rose-pink)"
  }
];

const FAQHub = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faqVault premiumGlow">
      <div className="hubVault coreFrame">
        <div className="vaultBeacon introGlow">
          <div className="beaconRibbon pulseShine">
            <span className="shineRipple"></span>
            Common Doubts
          </div>
          <h2 className="vaultTitan megaGlow">
            Got <span className="spectrumBurst">Questions?</span>
          </h2>
          <p className="vaultEcho leadHarmony">
            Everything you need to know about the 21-Day Industry Interview Program
          </p>
        </div>

        <div className="queryForge stackMatrix">
          {faqData.map((item, index) => {
            const IconComponent = item.icon;
            const isOpen = openIndex === index;
            
            return (
              <article 
                key={index}
                className={`insightCube ${isOpen ? 'cubeReveal' : ''}`}
                style={{ '--prismHue': item.color }}
              >
                <button 
                  className="igniteSwitch corePulse"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <div className="switchNexus flexBond">
                    <div className="prismToken glowCore" style={{ '--tokenGlow': item.color }}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="nexusTitle sharpEdge">{item.question}</h3>
                  </div>
                  <div className="pivotKnob orbitSpin">
                    {isOpen ? (
                      <ChevronUp size={24} className="spinBlade bladeFlip" />
                    ) : (
                      <ChevronDown size={24} className="spinBlade" />
                    )}
                  </div>
                </button>
                
                <div className={`unveilVault ${isOpen ? 'vaultOpen' : ''}`}>
                  <div className="wisdomPool contentGlow">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* <div className="rescueBeacon finalNudge">
          <div className="nudgeSphere textCluster">
            <h3 className="anchorBold">Ready to transform your career?</h3>
            <p className="anchorSoft">Join the 21-day roadmap today.</p>
          </div>
          <a href="#pricing" className="lifelineSpark igniteGradient">
            Get Started Now →
          </a>
        </div> */}
      </div>

      <div className="cosmicDrift nebulaField">
        <div className="driftOrb orbPrime"></div>
        <div className="driftOrb orbEcho"></div>
        <div className="driftOrb orbPulse"></div>
      </div>
    </section>
  );
};

export default FAQHub;