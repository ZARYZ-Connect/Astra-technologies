import { useState, useEffect } from 'react';

export default function Header({ currentPath, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
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
      setMenuOpen(false);
      return;
    }
    
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      const cleanPath = path === 'products.html' ? '/products' : '/' + path.replace('.html', '');
      e.preventDefault();
      navigate(cleanPath);
      setMenuOpen(false);
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    e.preventDefault();
    const cleanTo = to === 'index.html' ? '/' : '/' + to.replace('.html', '');
    navigate(cleanTo);
    setMenuOpen(false);
  };

  const isActive = (pathName) => {
    const normPath = currentPath === '/' ? '/index.html' : currentPath;
    if (pathName === 'index.html' && (normPath === '/' || normPath === '/index.html')) return 'active';
    if (normPath.includes(pathName.replace('.html', ''))) return 'active';
    return '';
  };

  return (
    <>
      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <button className="mobile-close" id="mobileClose" onClick={() => setMenuOpen(false)}>✕</button>
        <img 
          src="https://astratechnologies.in/wp-content/uploads/2025/11/astra-technologies.png" 
          alt="Astra" 
          className="mobile-nav-logo" 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="mobile-divider"></div>
        <a href="index.html" className={isActive('index.html')} onClick={(e) => handleLinkClick(e, 'index.html')}>Home</a>
        <a href="about.html" className={isActive('about.html')} onClick={(e) => handleLinkClick(e, 'about.html')}>About Us</a>
        <a href="products.html" className={isActive('products.html')} onClick={(e) => handleLinkClick(e, 'products.html')}>Products</a>
        <a href="solutions.html" className={isActive('solutions.html')} onClick={(e) => handleLinkClick(e, 'solutions.html')}>Solutions</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Us</a>
      </div>

      {/* NAV */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '.6rem' }} onClick={(e) => handleLinkClick(e, 'index.html')}>
            <img 
              src="https://astratechnologies.in/wp-content/uploads/2025/11/astra-technologies.png" 
              alt="Astra Technologies" 
              className="nav-logo" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                const txt = e.target.nextSibling;
                if (txt) txt.style.display = 'block';
              }}
            />
            <span id="nlt" style={{ display: 'none', fontFamily: "'Raleway', sans-serif", fontWeight: 900, fontSize: '1.1rem', letterSpacing: '.04em', color: '#fff' }}>
              ASTRA TECHNOLOGIES
            </span>
          </a>
          <ul className="nav-links">
            <li><a href="index.html" className={isActive('index.html')} onClick={(e) => handleLinkClick(e, 'index.html')}>Home</a></li>
            <li><a href="about.html" className={isActive('about.html')} onClick={(e) => handleLinkClick(e, 'about.html')}>About Us</a></li>
            <li className="has-dropdown">
              <a href="products.html" id="products" className={isActive('products.html')} onClick={(e) => handleLinkClick(e, 'products.html')}>Products ▾</a>
              <div className="dropdown">
                <a href="products.html#time-attendance" onClick={(e) => handleLinkClick(e, 'products.html#time-attendance')}>Time Attendance</a>
                <a href="products.html#access-control" onClick={(e) => handleLinkClick(e, 'products.html#access-control')}>Access Control</a>
                <a href="products.html#android-terminals" onClick={(e) => handleLinkClick(e, 'products.html#android-terminals')}>Android Smart Terminals</a>
                <a href="products.html#smart-lock" onClick={(e) => handleLinkClick(e, 'products.html#smart-lock')}>Smart Lock</a>
                <a href="products.html#entrance-control" onClick={(e) => handleLinkClick(e, 'products.html#entrance-control')}>Smart Entrance Control</a>
                <a href="products.html#security-inspection" onClick={(e) => handleLinkClick(e, 'products.html#security-inspection')}>Security Inspection</a>
                <a href="products.html#software-platforms" onClick={(e) => handleLinkClick(e, 'products.html#software-platforms')}>Software Platforms</a>
                <a href="products.html#armatura" onClick={(e) => handleLinkClick(e, 'products.html#armatura')}>Armatura</a>
              </div>
            </li>
            <li><a href="solutions.html" className={isActive('solutions.html')} onClick={(e) => handleLinkClick(e, 'solutions.html')}>Solutions</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Us</a></li>
          </ul>
          <button className="hamburger" id="hamburger" aria-label="Menu" onClick={() => setMenuOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </>
  );
}
