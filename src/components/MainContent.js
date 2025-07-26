import React from 'react';
import './MainContent.css';

const MainContent = ({ count, setCount }) => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="hero-section">
          <h2>Welcome to Your React App</h2>
          <p>This is a modern React boilerplate with beautiful UI components</p>
        </div>
        
        <div className="card">
          <h3>Interactive Counter</h3>
          <p>Current count: <span className="count">{count}</span></p>
          <div className="button-group">
            <button onClick={() => setCount(count - 1)}>
              Decrease
            </button>
            <button onClick={() => setCount(0)}>
              Reset
            </button>
            <button onClick={() => setCount(count + 1)}>
              Increase
            </button>
          </div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <h4>🚀 Modern React</h4>
            <p>Built with React 18 and modern JavaScript features</p>
          </div>
          <div className="feature-card">
            <h4>🎨 Beautiful UI</h4>
            <p>Modern design with gradients and glassmorphism effects</p>
          </div>
          <div className="feature-card">
            <h4>📱 Responsive</h4>
            <p>Fully responsive design that works on all devices</p>
          </div>
          <div className="feature-card">
            <h4>⚡ Fast</h4>
            <p>Optimized for performance with web vitals monitoring</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;