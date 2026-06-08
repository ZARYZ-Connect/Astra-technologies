import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import LaserFlow from '../components/LaserFlow';
import '../css/about.css';

export default function About({ navigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useScrollReveal();

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
      <section className="page-hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          <LaserFlow 
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            horizontalBeamOffset={0.7}
            verticalBeamOffset={0.0}
            color="#00b4d8"
            fogIntensity={0.65}
            wispDensity={1.5}
            wispIntensity={8.0}
          />
        </div>
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container page-hero-inner">
          <div className="hero-split">
            <div className="hero-left-content">
              <h1 className="hero-main-title">
                Securing India's <br />
                <span className="highlight-cyan">Identity</span>
              </h1>
              <div className="title-underline"></div>
              
              <p className="hero-desc">
                A decade of deploying biometric and access control infrastructure across India's most demanding environments — from factories to government facilities.
              </p>

              <div className="hero-buttons">
                <a href="#story" onClick={(e) => handleLinkClick(e, '#story')} className="btn-cyan-solid">
                  Discover Our Solutions <span className="arrow">→</span>
                </a>
                <a href="#story" onClick={(e) => handleLinkClick(e, '#story')} className="btn-cyan-outline">
                  <span className="play-icon">▶</span> Watch Our Story
                </a>
              </div>
            </div>

            <div className="hero-right-visual">
              <div className="biometric-scene">
                {/* Custom Biometric SVG */}
                <svg viewBox="0 0 500 500" className="biometric-svg" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow-heavy" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="12" result="blur1" />
                      <feGaussianBlur stdDeviation="6" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur1" />
                        <feMergeNode in="blur2" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-light" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <linearGradient id="cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#4facfe" />
                    </linearGradient>
                    <linearGradient id="shield-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0, 180, 216, 0.25)" />
                      <stop offset="100%" stopColor="rgba(0, 180, 216, 0.02)" />
                    </linearGradient>
                  </defs>

                  {/* Concentric grid circles in background */}
                  <g opacity="0.12">
                    <circle cx="250" cy="230" r="90" fill="none" stroke="#00b4d8" strokeWidth="1" strokeDasharray="3 8" />
                    <circle cx="250" cy="230" r="150" fill="none" stroke="#00b4d8" strokeWidth="0.75" strokeDasharray="4 12" />
                    <circle cx="250" cy="230" r="210" fill="none" stroke="#00b4d8" strokeWidth="0.5" strokeDasharray="6 15" />
                  </g>

                  {/* Dotted Map of India stylized design */}
                  <g opacity="0.18">
                    <path d="M 230,110 L 250,90 L 270,110 L 265,130 L 290,150 L 310,180 L 290,210 L 305,240 L 285,260 L 275,290 L 250,330 L 245,300 L 225,270 L 205,250 L 210,220 L 195,190 L 215,160 L 210,140 Z" fill="none" stroke="#00b4d8" strokeWidth="1.5" strokeDasharray="2 4" />
                  </g>

                  {/* Cyber-grid perspective lines at the bottom of scene */}
                  <g opacity="0.22">
                    <path d="M 120,400 L 380,400 M 100,420 L 400,420 M 70,445 L 430,445" stroke="#00b4d8" strokeWidth="1" />
                    <path d="M 250,320 L 50,450 M 250,320 L 150,450 M 250,320 L 250,450 M 250,320 L 350,450 M 250,320 L 450,450" stroke="#00b4d8" strokeWidth="0.75" />
                  </g>

                  {/* Glowing 3D Podium base */}
                  <g className="podium-group">
                    <ellipse cx="250" cy="340" rx="120" ry="32" fill="none" stroke="#00b4d8" strokeWidth="2" opacity="0.3" filter="url(#glow-heavy)" />
                    <ellipse cx="250" cy="340" rx="95" ry="24" fill="none" stroke="#00f2fe" strokeWidth="1.5" opacity="0.5" />
                    <path d="M 155,340 A 95,24 0 0,0 345,340 L 345,352 A 95,24 0 0,1 155,352 Z" fill="url(#cyan-blue)" opacity="0.2" />
                    <ellipse cx="250" cy="340" rx="80" ry="18" fill="rgba(0, 180, 216, 0.15)" stroke="#00b4d8" strokeWidth="3" filter="url(#glow-light)" />
                    <ellipse cx="250" cy="340" rx="40" ry="8" fill="#00f2fe" filter="url(#glow-heavy)" opacity="0.7" />
                  </g>

                  {/* Dotted connecting laser lines */}
                  <g className="connecting-lines" opacity="0.35" stroke="#00b4d8" strokeWidth="1.25" strokeDasharray="3 5" fill="none">
                    <path d="M 250,210 L 160,150" />
                    <path d="M 250,210 L 370,140" />
                    <path d="M 250,210 L 410,310" />
                    <path d="M 250,210 L 90,300" />
                    <path d="M 250,210 L 250,65" />
                  </g>

                  {/* Glowing Shield */}
                  <g className="shield-group" filter="url(#glow-heavy)">
                    <path d="M 250,110 C 290,110 320,120 320,160 C 320,220 280,260 250,280 C 220,260 180,220 180,160 C 180,110 210,110 250,110 Z" 
                          fill="url(#shield-grad)" stroke="#00f2fe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 250,122 C 277,122 302,130 302,162 C 302,210 272,246 250,264 C 228,246 198,210 198,162 C 198,130 223,122 250,122 Z" 
                          fill="none" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="1.25" strokeDasharray="6 3" />
                  </g>

                  {/* Fingerprint ridges inside shield */}
                  <g className="fingerprint-group" stroke="#00f2fe" strokeWidth="2.2" strokeLinecap="round" fill="none" filter="url(#glow-light)">
                    <path d="M 237,215 C 232,206 234,195 243,187 C 248,183 256,183 260,188 C 264,192 266,198 264,204 C 262,209 259,215 257,219" />
                    <path d="M 230,207 C 224,194 227,180 239,171 C 247,165 259,165 267,172 C 273,178 276,188 273,198 C 271,206 267,215 264,226" />
                    <path d="M 244,204 C 244,201 247,196 252,196 C 257,196 259,200 258,204 C 257,207 255,210 253,212 L 253,222" />
                    <path d="M 250,158 C 232,160 216,174 216,194 C 216,203 219,210 220,214" />
                    <path d="M 279,184 C 283,195 283,206 278,215 C 275,221 271,228 269,235" />
                  </g>

                  {/* Holographic sweep laser scan line */}
                  <line className="scan-line" x1="185" y1="130" x2="315" y2="130" stroke="#00f2fe" strokeWidth="2" filter="url(#glow-heavy)" />
                </svg>

                {/* Floating Glassmorphic Nodes */}
                <div className="floating-node node-gov">🏛️</div>
                <div className="floating-node node-factory">🏭</div>
                <div className="floating-node node-id">🪪</div>
                <div className="floating-node node-shield">🛡️</div>
                <div className="floating-node node-door">🚪</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="reveal">
              <div className="story-label">Who We Are</div>
              <h2 className="story-title">India's Trusted Partner in <em>Biometric Security</em></h2>
              <div className="story-body">
                <p>Astra Technologies is a Bengaluru-based systems integrator and authorised distributor of ZKTeco biometric products across India. We combine world-class hardware with deep local expertise to deliver identity and access control solutions that are reliable, scalable, and affordable.</p>
                <p>From a single-door fingerprint lock for a startup to a multi-building turnstile and CCTV network for a 10,000-employee campus, we have designed and deployed them all. Our tagline is a promise: <strong style={{ color: '#fff' }}>Your Rightful Identity, Securely Delivered.</strong></p>
                <p>We provide end-to-end services: site survey, product selection, installation, commissioning, software configuration, training, and Annual Maintenance Contracts — so you are never alone after the sale.</p>
              </div>
            </div>
            <div className="story-visual reveal">
              <div className="story-visual-inner">
                <div className="value-item">
                  <div className="value-icon">🎯</div>
                  <div className="value-text">
                    <h4>Precision First</h4>
                    <p>Every deployment is engineered to spec. We don't cut corners on hardware, cabling, or commissioning.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <div className="value-text">
                    <h4>Long-Term Partnership</h4>
                    <p>We stay with you post-installation — AMC contracts, firmware updates, and 24×7 remote support.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🇮🇳</div>
                  <div className="value-text">
                    <h4>Built for India</h4>
                    <p>We understand Indian power conditions, dust, humidity, and the unique requirements of Indian enterprises and government bodies.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🔒</div>
                  <div className="value-text">
                    <h4>Security Without Compromise</h4>
                    <p>All products are tested to enterprise-grade standards. We recommend only what we would deploy ourselves.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">Why Astra</div>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-sub" style={{ marginInline: 'auto' }}>Not just a reseller — a solutions partner that understands security infrastructure from the ground up.</p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-card-icon">🏅</div>
              <h3>Authorised ZKTeco Distributor</h3>
              <p>Direct access to the full ZKTeco product range with genuine warranty, firmware support, and replacement guarantees.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">⚙️</div>
              <h3>End-to-End Installation</h3>
              <p>We handle everything from cable trunking and power supply to software configuration and user training on site.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">🔗</div>
              <h3>Deep Integrations</h3>
              <p>HRMS, payroll, SAP, Oracle, Zoho, custom APIs — we connect your biometric data to your existing business systems.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">📞</div>
              <h3>Responsive Support</h3>
              <p>Dedicated support engineers for remote assistance, on-site visits, and same-day response for critical failures.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Direct sourcing and large-volume procurement allow us to offer the best prices without compromising on quality.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">📐</div>
              <h3>Custom System Design</h3>
              <p>No cookie-cutter solutions. Every site gets a tailored architecture designed after a thorough in-person survey.</p>
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
                      <input type="tel" placeholder="+91 98765 43210" required />
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
                      <option value="Security Inspection">Security Inspection</option>
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
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '.9rem' }}>
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
