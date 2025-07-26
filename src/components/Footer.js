import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>React App</h4>
          <p>A modern React boilerplate with beautiful UI components and best practices.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Technologies</h4>
          <ul>
            <li>React 18</li>
            <li>CSS3</li>
            <li>JavaScript ES6+</li>
            <li>Web Vitals</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 React App. Built with ❤️ using React.</p>
      </div>
    </footer>
  );
};

export default Footer;