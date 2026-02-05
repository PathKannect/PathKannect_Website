import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../assets/css/WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/19144827669?text=Hello%20ikartandco,%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
