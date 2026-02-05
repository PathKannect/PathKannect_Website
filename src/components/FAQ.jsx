import React, { useState } from "react";
import "../assets/css/FAQ.css";
import { ChevronDown, ChevronUp, Lightbulb, Shield, CreditCard, Zap } from "lucide-react";

const faqData = [
  {
    icon: Lightbulb,
    question: "How do I get started with the platform?",
    answer: "Sign up for a free account in under 60 seconds. Our interactive onboarding tour guides you through setup, and you'll be creating your first project in minutes with zero technical hassle.",
    color: "var(--spark-purple)"
  },
  {
    icon: Shield,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, cancel instantly from account settings. No questions asked, no penalties. You'll keep full Pro access until your billing cycle ends, then seamlessly downgrade to free.",
    color: "var(--ocean-blue)"
  },
  {
    icon: CreditCard,
    question: "What payment methods do you accept?",
    answer: "We support all major cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and PayPal. Subscriptions auto-renew monthly or annually with enterprise options available.",
    color: "var(--emerald-green)"
  },
  {
    icon: Zap,
    question: "Do you offer custom enterprise pricing?",
    answer: "For teams of 50+, we provide dedicated support, custom SLAs, SSO integration, and volume pricing. Contact sales@company.com for a personalized quote within 24 hours.",
    color: "var(--amber-gold)"
  },
  {
    icon: ChevronDown,
    question: "Is there a free trial available?",
    answer: "Every plan includes a 14-day free trial with full Pro features. No credit card required upfront. Upgrade anytime during trial or continue seamlessly on free forever plan.",
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
            Frequently Asked Questions
          </div>
          <h2 className="vaultTitan megaGlow">
            Got <span className="spectrumBurst">Questions?</span>
          </h2>
          <p className="vaultEcho leadHarmony">
            Everything you need to know to get started and make the most of our platform
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

        <div className="rescueBeacon finalNudge">
          <div className="nudgeSphere textCluster">
            <h3 className="anchorBold">Still have questions?</h3>
            <p className="anchorSoft">Our support team is here 24/7</p>
          </div>
          <a href="#contact" className="lifelineSpark igniteGradient">
            Contact Support →
          </a>
        </div>
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
