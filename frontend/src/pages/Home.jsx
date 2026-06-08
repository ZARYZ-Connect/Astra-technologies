import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/home.css';

export default function Home({ navigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scanState, setScanState] = useState(0);

  useScrollReveal();

  const scanStates = [
    { text: 'Scanning…', style: {} },
    { text: 'Verifying…', style: { background: '#eab308', boxShadow: '0 0 6px #eab308' } },
    { text: 'Access Granted ✓', style: { background: '#22c55e', boxShadow: '0 0 6px #22c55e' } }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setScanState(prev => (prev + 1) % scanStates.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container">
          <div className="hero-inner">
            {/* Left */}
            <div>
              <div className="hero-badge">
                <span>NEW</span> India's #1 Biometric Identity Platform
              </div>
              <h1 className="hero-title">
                Secure Access.<br />
                Seamless <em>Identity.</em><br />
                Trusted Everywhere.
              </h1>
              <p className="hero-desc">
                Astra Technologies delivers cutting-edge biometric solutions — empowering individuals and businesses to use
                their unique identity securely in every interaction.
              </p>
              <div className="hero-actions">
                <a href="#services" className="btn btn-primary" onClick={(e) => handleLinkClick(e, '#services')}>Explore Solutions</a>
                <a href="#about" className="btn btn-outline" onClick={(e) => handleLinkClick(e, '#about')}>Learn More</a>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="hero-stat-val">500<span>+</span></div>
                  <div className="hero-stat-lbl">Deployments Nationwide</div>
                </div>
                <div>
                  <div className="hero-stat-val">99<span>.9%</span></div>
                  <div className="hero-stat-lbl">Uptime Guaranteed</div>
                </div>
                <div>
                  <div className="hero-stat-val">15<span>+</span></div>
                  <div className="hero-stat-lbl">Industries Served</div>
                </div>
              </div>
            </div>
            {/* Right visual */}
            <div className="hero-visual">
              <div className="hero-card-wrap">
                <div className="chip chip-1">
                  <span className="chip-icon">🔒</span> AES-256 Encrypted
                </div>
                <div className="chip chip-2">
                  <span className="chip-icon">⚡</span> &lt;0.3s Recognition
                </div>
                <div className="hero-card">
                  <div className="hc-header">
                    <div className="hc-dot red"></div>
                    <div className="hc-dot yellow"></div>
                    <div className="hc-dot green"></div>
                    <div className="hc-title">Astra Identity Terminal</div>
                  </div>
                  <div className="hc-scan">
                    <div className="fingerprint-icon">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="30" stroke="rgba(0,180,216,0.3)" strokeWidth="1" />
                        <path d="M20 44 C20 44 22 20 32 20 C42 20 44 44 44 44" stroke="#00b4d8" strokeWidth="1.5"
                          fill="none" strokeLinecap="round" />
                        <path d="M24 44 C24 44 24 26 32 26 C40 26 40 44 40 44" stroke="#00b4d8" strokeWidth="1.5"
                          fill="none" strokeLinecap="round" />
                        <path d="M28 44 C28 44 28 32 32 32 C36 32 36 44 36 44" stroke="#00b4d8" strokeWidth="1.5"
                          fill="none" strokeLinecap="round" />
                        <path d="M17 38 C17 38 17 16 32 16 C47 16 47 38 47 38" stroke="rgba(0,180,216,0.5)"
                          strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <path d="M13 34 C13 34 13 12 32 12 C51 12 51 34 51 34" stroke="rgba(0,180,216,0.3)"
                          strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <circle cx="32" cy="32" r="3" fill="#00b4d8" />
                      </svg>
                      <div className="scan-line"></div>
                    </div>
                    <div className="hc-status">
                      <span className="hc-pulsar" style={scanStates[scanState].style}></span>
                      {scanStates[scanState].text}
                    </div>
                  </div>
                  <div className="hc-user">
                    <div className="hc-avatar">AT</div>
                    <div className="hc-user-info">
                      <div className="hc-user-name">Authorised Personnel</div>
                      <div className="hc-user-role">Level 3 — Corporate Campus</div>
                    </div>
                    <div className="hc-access">✓ Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <div className="marquee-item"><span className="dot"></span>Biometric Access Control</div>
          <div className="marquee-item"><span className="dot"></span>Time &amp; Attendance</div>
          <div className="marquee-item"><span className="dot"></span>Smart Door Lock</div>
          <div className="marquee-item"><span className="dot"></span>Turnstile Solutions</div>
          <div className="marquee-item"><span className="dot"></span>Visitor Management</div>
          <div className="marquee-item"><span className="dot"></span>Security Inspection</div>
          <div className="marquee-item"><span className="dot"></span>Identity Platform</div>
          <div className="marquee-item"><span className="dot"></span>HRMS Integration</div>
          {/* Duplicates for seamless loop */}
          <div className="marquee-item"><span className="dot"></span>Biometric Access Control</div>
          <div className="marquee-item"><span className="dot"></span>Time &amp; Attendance</div>
          <div className="marquee-item"><span className="dot"></span>Smart Door Lock</div>
          <div className="marquee-item"><span className="dot"></span>Turnstile Solutions</div>
          <div className="marquee-item"><span className="dot"></span>Visitor Management</div>
          <div className="marquee-item"><span className="dot"></span>Security Inspection</div>
          <div className="marquee-item"><span className="dot"></span>Identity Platform</div>
          <div className="marquee-item"><span className="dot"></span>HRMS Integration</div>
        </div>
      </div>

      {/* ─── WHY ASTRA ─── */}
      <section className="features-section" id="why">
        <div className="container">
          <div className="features-intro reveal">
            <div>
              <div className="tag">Why Astra</div>
              <h2 className="section-title">Built for Security.<br />Designed for Scale.</h2>
            </div>
            <p className="section-sub" style={{ textAlign: 'right' }}>Three core pillars that set Astra apart from every other biometric provider in India.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">🔬</div>
              <div className="feature-title">Revolutionary Solutions</div>
              <p className="feature-desc">We've redefined access control by integrating biometric technology with the most advanced security ecosystems — setting new standards for enterprise protection.</p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">🏗️</div>
              <div className="feature-title">Innovative Architecture</div>
              <p className="feature-desc">Our identity platform is simple, flexible, and fully customisable — adapting to your business processes rather than forcing you to adapt to ours.</p>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">🏆</div>
              <div className="feature-title">High-Quality Products</div>
              <p className="feature-desc">Experience best-in-class biometric devices and entrance control systems engineered for reliable performance, longevity, and zero downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-inner">
            <div className="about-img-wrap reveal">
              <img 
                src="https://astratechnologies.in/wp-content/uploads/2025/11/VL-1.jpg"
                alt="Astra Technologies Identity Platform" 
                className="about-img"
                onError={(e) => {
                  e.target.style.background = 'linear-gradient(135deg,#0a1f3a,#0d3b72)';
                  e.target.removeAttribute('src');
                }}
              />
              <div className="about-badge">
                <div className="about-badge-num">10+</div>
                <div className="about-badge-txt">Years of Innovation</div>
              </div>
            </div>
            <div className="about-text reveal">
              <div className="tag">About Us</div>
              <h2 className="section-title">Redefining Identity Solutions for the Digital Age</h2>
              <p className="section-sub" style={{ maxWidth: '100%', marginTop: '1rem' }}>
                As digital threats grow more sophisticated, Astra Technologies leads biometric innovation — delivering
                unparalleled solutions for secure, seamless identity management across industries.
              </p>
              <div className="about-bullets">
                <div className="about-bullet">
                  <span className="about-bullet-icon">✦</span>
                  <span><strong>Versatile &amp; Adaptable</strong> — From logistics and transportation to healthcare and finance, our platform fits every industry.</span>
                </div>
                <div className="about-bullet">
                  <span className="about-bullet-icon">✦</span>
                  <span><strong>State-of-the-Art Platform</strong> — Designed with simplicity and flexibility, empowering teams to deploy and scale rapidly.</span>
                </div>
                <div className="about-bullet">
                  <span className="about-bullet-icon">✦</span>
                  <span><strong>Mission-Driven</strong> — We believe every individual's biometric credentials are their rightful identity — and we protect that right.</span>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a href="about.html" className="btn btn-primary" onClick={(e) => handleLinkClick(e, 'about.html')}>Discover Our Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header reveal">
            <div className="tag">Our Services</div>
            <h2 className="section-title">Find Out What We Provide</h2>
            <p className="section-sub">End-to-end biometric and identity management services — from hardware to integration to lifecycle support.</p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-num">01</div>
              <div className="service-icon-wrap">🖐️</div>
              <div className="service-name">Biometric Access Control</div>
              <p className="service-desc">Deploy fingerprint and facial recognition at doors, turnstiles, and restricted zones. Real-time monitoring and full audit trails included.</p>
            </div>
            <div className="service-card reveal">
              <div className="service-num">02</div>
              <div className="service-icon-wrap">🪪</div>
              <div className="service-name">Visitor &amp; Contractor Management</div>
              <p className="service-desc">Secure, time-bound access for visitors, vendors, and contractors. Capture identity, issue passes, and track every entry from a single dashboard.</p>
            </div>
            <div className="service-card reveal">
              <div className="service-num">03</div>
              <div className="service-icon-wrap">🔗</div>
              <div className="service-name">Custom Integrations &amp; Identity Platform</div>
              <p className="service-desc">API-driven architecture connects Astra's platform with your existing HRMS, surveillance, and IT systems for future-ready integration.</p>
            </div>
            <div className="service-card reveal">
              <div className="service-num">04</div>
              <div className="service-icon-wrap">⏱️</div>
              <div className="service-name">Time &amp; Attendance Automation</div>
              <p className="service-desc">Replace manual registers with accurate biometric attendance. Integrates with HR and payroll to eliminate errors and buddy punching.</p>
            </div>
            <div className="service-card reveal">
              <div className="service-num">05</div>
              <div className="service-icon-wrap">🚧</div>
              <div className="service-name">Entrance Control &amp; Turnstile Solutions</div>
              <p className="service-desc">Combine biometrics with flap barriers, tripod turnstiles, and full-height gates for high-security factories, data centres, and campuses.</p>
            </div>
            <div className="service-card reveal">
              <div className="service-num">06</div>
              <div className="service-icon-wrap">🛡️</div>
              <div className="service-name">AMC, Support &amp; Project Consulting</div>
              <p className="service-desc">Complete lifecycle support — from site survey and solution design to installation, training, and annual maintenance contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST ─── */}
      <section className="trust-section" id="trust">
        <div className="container">
          <div className="trust-inner">
            <div className="trust-text reveal">
              <div className="tag">Trusted By Leaders</div>
              <h2 className="section-title">Technology-Driven Companies Choose Astra</h2>
              <p className="section-sub">Organisations across India rely on Astra to secure offices, warehouses, plants, and campuses — where uptime, accuracy, and reliability are non-negotiable.</p>
              <div className="trust-stats-row">
                <div className="trust-stat">
                  <div className="trust-stat-val">500<span>+</span></div>
                  <div className="trust-stat-lbl">Sites Secured</div>
                </div>
                <div className="trust-stat">
                  <div className="trust-stat-val">15<span>+</span></div>
                  <div className="trust-stat-lbl">Industries</div>
                </div>
                <div className="trust-stat">
                  <div className="trust-stat-val">99<span>.9%</span></div>
                  <div className="trust-stat-lbl">Uptime SLA</div>
                </div>
              </div>
            </div>
            <div className="trust-cards reveal">
              <div className="trust-card">
                <div className="trust-card-icon">🏭</div>
                <div className="trust-card-name">Manufacturing &amp; Logistics</div>
                <div className="trust-card-sub">Factory floors, warehouses, and distribution hubs</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🏥</div>
                <div className="trust-card-name">Healthcare</div>
                <div className="trust-card-sub">Hospitals, clinics, and pharmaceutical plants</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🏦</div>
                <div className="trust-card-name">BFSI &amp; Finance</div>
                <div className="trust-card-sub">Banks, NBFCs, and financial data centres</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🏢</div>
                <div className="trust-card-name">Corporate &amp; IT Parks</div>
                <div className="trust-card-sub">Campus-wide access and attendance management</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🛒</div>
                <div className="trust-card-name">Retail &amp; E-Commerce</div>
                <div className="trust-card-sub">Back offices, fulfilment centres, flagship stores</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🚌</div>
                <div className="trust-card-name">Transportation</div>
                <div className="trust-card-sub">Depots, terminals, and fleet management hubs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section-old">
        <div className="container">
          <div className="cta-box reveal">
            <h2>Ready to Secure Your Premises?</h2>
            <p>Talk to our biometric experts today and get a free site assessment and solution proposal tailored to your needs.</p>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-primary" onClick={(e) => handleLinkClick(e, '#contact')}>Book a Free Demo</a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-inner reveal">
            <div className="contact-left">
              <div className="tag">Get In Touch</div>
              <h2 className="contact-title">Let's Secure Your <em>Premises</em></h2>
              <p className="contact-sub">Talk to our biometric experts. We'll assess your site and propose the perfect solution — at the right budget.</p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">📍</span>
                  <div><strong>Astra Technologies</strong><span>Bengaluru, Karnataka, India</span></div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">📞</span>
                  <div><strong>Call Us</strong><a href="tel:+919483201072">+91 94832 01072</a></div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">🟢</span>
                  <div><strong>Whatsapp Enquiries</strong><a href="https://wa.me/919980154338" target="_blank" rel="noreferrer">+91 99801 54338</a></div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">☎️</span>
                  <div><strong>Support Desk</strong><a href="tel:08068281342">080 68281342 / 48 / 14</a></div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">✉️</span>
                  <div><strong>Email Us</strong><a href="mailto:sales@astratechnologies.in">sales@astratechnologies.in</a></div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              {!formSubmitted ? (
                <form className="contact-form" id="contactForm" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="+91 94832 01072" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Company / Organisation</label>
                    <input type="text" placeholder="Your company name" />
                  </div>
                  <div className="form-group">
                    <label>What do you need?</label>
                    <select required>
                      <option value="">Select a product / service…</option>
                      <option value="Time Attendance System">Time Attendance System</option>
                      <option value="Access Control">Access Control</option>
                      <option value="Smart Entrance / Turnstile">Smart Entrance / Turnstile</option>
                      <option value="Smart Door Lock">Smart Door Lock</option>
                      <option value="Security Inspection Equipment">Security Inspection Equipment</option>
                      <option value="Video Surveillance">Video Surveillance</option>
                      <option value="Software / Integration">Software / Integration</option>
                      <option value="AMC / Support">AMC / Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Tell us about your site or requirements…"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '.95rem', padding: '.9rem' }}>
                    Send Message ✉️
                  </button>
                  <p className="form-note">We respond within 24 hours on business days.</p>
                </form>
              ) : (
                <div className="form-success" id="formSuccess" style={{ display: 'flex' }}>
                  <div className="success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you. Our team will get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
