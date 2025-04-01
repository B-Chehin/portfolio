import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Portafolio Bautista Chehin &copy; {new Date().getFullYear()} - Desarrollador Frontend</p>
        <div className="social-icons">
          <a href="https://github.com/B-Chehin" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bautista-chehin-906bb9196/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:chehinbautista@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};
