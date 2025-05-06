import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="header">
        <div className="logo">Vending Solutions</div>
        <a href="tel:+1-855-929-1042" className="contact-button">
          Contáctanos: +51 983582413
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            New Vending Machines<br />Starting at $3,993
          </h1>
          <p className="hero-description">
            We are the leading supplier of high-quality vending machines to help your business thrive and enhance customer experiences.
          </p>
          <a href="#machines" className="explore-button">
            Explore Machines
          </a>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">[Vending Machine Image Placeholder]</div>
        </div>
      </section>

      {/* Vending Machines Section */}
      <section id="machines" className="machines-section">
        <h2 className="machines-title">Our Vending Machines</h2>
        <div className="machines-grid">
          {/* Machine 1 */}
          <a href="/technical-sheet/snack-vending-machine" className="machine-card">
            <div className="machine-image">
              <div className="image-placeholder">[Snack Vending Machine Image]</div>
            </div>
            <div className="machine-info">
              <h3 className="machine-name">Snack Vending Machine</h3>
              <p className="machine-description">Perfect for snacks and small items. View technical sheet for details.</p>
            </div>
          </a>
          {/* Machine 2 */}
          <a href="/technical-sheet/drink-vending-machine" className="machine-card">
            <div className="machine-image">
              <div className="image-placeholder">[Drink Vending Machine Image]</div>
            </div>
            <div className="machine-info">
              <h3 className="machine-name">Drink Vending Machine</h3>
              <p className="machine-description">Ideal for beverages of all kinds. Check the technical sheet.</p>
            </div>
          </a>
          {/* Machine 3 */}
          <a href="/technical-sheet/combo-vending-machine" className="machine-card">
            <div className="machine-image">
              <div className="image-placeholder">[Combo Vending Machine Image]</div>
            </div>
            <div className="machine-info">
              <h3 className="machine-name">Combo Vending Machine</h3>
              <p className="machine-description">Snacks and drinks in one. See the technical sheet.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>2-Year Parts Warranty | 100% Financing Available | #1 Choice for Profitable Vending</p>
          </div>
          <div className="footer-links">
            <a href="/about" className="footer-link">About</a>
            <a href="/financing" className="footer-link">Financing</a>
            <a href="/resources" className="footer-link">Resources</a>
            <a href="/contact" className="footer-link">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;