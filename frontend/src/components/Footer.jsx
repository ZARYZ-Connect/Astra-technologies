import { useState, useEffect } from 'react';

export default function Footer({ currentPath, navigate }) {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, to) => {
    if (to.startsWith('#')) {
      const targetId = to.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      const cleanPath = path === 'products.html' ? '/products' : '/' + path.replace('.html', '');
      e.preventDefault();
      navigate(cleanPath);
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    e.preventDefault();
    const cleanTo = to === 'index.html' ? '/' : '/' + to.replace('.html', '');
    navigate(cleanTo);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <img 
                src="https://astratechnologies.in/wp-content/uploads/2025/11/astra-technologies.png" 
                alt="Astra Technologies" 
                className="footer-brand-logo" 
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  const div = e.target.nextSibling;
                  if (div) div.style.display = 'block';
                }}
              />
              <span style={{ display: 'none', fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: '1rem', marginBottom: '.85rem', color: '#fff' }}>
                ASTRA TECHNOLOGIES
              </span>
              <p>Your Rightful Identity,<br/>Securely Delivered.<br/><br/>India's leading provider of biometric identity and access control solutions.</p>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <a href="products.html#time-attendance" onClick={(e) => handleLinkClick(e, 'products.html#time-attendance')}>Time Attendance</a>
              <a href="products.html#access-control" onClick={(e) => handleLinkClick(e, 'products.html#access-control')}>Access Controller</a>
              <a href="products.html#smart-door-lock" onClick={(e) => handleLinkClick(e, 'products.html#smart-door-lock')}>Smart Door Lock</a>
              <a href="products.html#security-inspection" onClick={(e) => handleLinkClick(e, 'products.html#security-inspection')}>Security Inspection</a>
              <a href="products.html#smart-entrance" onClick={(e) => handleLinkClick(e, 'products.html#smart-entrance')}>Smart Entrance</a>
              <a href="products.html#software" onClick={(e) => handleLinkClick(e, 'products.html#software')}>Software</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="solutions.html" onClick={(e) => handleLinkClick(e, 'solutions.html')}>Biometric Access Control</a>
              <a href="solutions.html" onClick={(e) => handleLinkClick(e, 'solutions.html')}>Visitor Management</a>
              <a href="solutions.html" onClick={(e) => handleLinkClick(e, 'solutions.html')}>Time &amp; Attendance</a>
              <a href="solutions.html" onClick={(e) => handleLinkClick(e, 'solutions.html')}>Custom Integrations</a>
              <a href="solutions.html" onClick={(e) => handleLinkClick(e, 'solutions.html')}>Turnstile Solutions</a>
              <a href="solutions.html" onClick={(e) => handleLinkClick(e, 'solutions.html')}>AMC &amp; Support</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="about.html" onClick={(e) => handleLinkClick(e, 'about.html')}>About Us</a>
              <a href="solutions.html" onClick={(e) => handleLinkClick(e, 'solutions.html')}>Solutions</a>
              <a href="products.html" onClick={(e) => handleLinkClick(e, 'products.html')}>Products</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Us</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© <span>{new Date().getFullYear()}</span> Astra Technologies. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-link" aria-label="YouTube">▶</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button className={`back-top ${showBackTop ? 'show' : ''}`} id="backTop" aria-label="Back to top" onClick={handleBackToTop}>
        ↑
      </button>
    </>
  );
}
