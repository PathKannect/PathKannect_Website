import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/FoodCard.css';
import learnBuildImg from '../assets/images/wood1.png';
import showcaseCertifyImg from '../assets/images/wood2.png';
import getRecognisedImg from '../assets/images/wood3.png';
import eucalyptus from '../assets/images/eucalyptus-log.jpg';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-wrapper" id="programs">
      <div className="projects-header">
        <h2 className="projects-title">Our Streamlined Wood Processing Workflow</h2>
        <p className="projects-subtitle">
          From sourcing premium timber to delivering high-quality finished products, we follow
          a <strong>transparent, efficient, and quality-driven process</strong> that ensures
          durability, precision, and customer satisfaction.
        </p>
      </div>

      <div className="projects-grid">

         <div className="projects-card">
          <img src={eucalyptus} alt="Eucalyptus Timber" />
          <div className="projects-card-content">
            <h3><span className="highlight">Eucalyptus Timber</span></h3>
            <p>
              Our eucalyptus timber is known for its strength, durability, and natural resistance to pests.
              Carefully sourced and processed, it is ideal for construction, furniture, and outdoor
              applications, delivering long-lasting performance with a refined finish.
            </p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="projects-card">
          <img src={learnBuildImg} alt="Timber Selection" />
          <div className="projects-card-content">
            <h3><span className="highlightss">Premium Timber Selection</span></h3>
            <p>
              We carefully source high-grade wood from trusted suppliers. Every log is inspected
              for strength, texture, and durability to ensure only the finest raw material enters
              the manufacturing process.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="projects-card">
          <img src={showcaseCertifyImg} alt="Processing & Crafting" />
          <div className="projects-card-content">
            <h3><span className="highlight">Precision Processing & Crafting</span></h3>
            <p>
              Using advanced cutting, seasoning, and finishing techniques, we transform raw timber
              into strong and beautifully crafted wood products. Every piece undergoes strict quality
              checks at each stage.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="projects-card">
          <img src={getRecognisedImg} alt="Delivery & Quality Assurance" />
          <div className="projects-card-content">
            <h3><span className="highlight">Delivery With Assured Quality</span></h3>
            <p>
              Our products are packaged and delivered with care to ensure they reach you in perfect
              condition. With consistent quality and reliable service, we help businesses and
              homeowners build with confidence.
            </p>
          </div>
        </div>


      </div>

      {/* CTA BUTTON */}
      <div style={{ textAlign: 'center', margin: '30px' }}>
        <button
          className="projects-cta-btns"
          onClick={() => navigate('/procurement')}
        >
          View Our Procurement Process
        </button>
      </div>
    </section>
  );
};

export default Projects;
