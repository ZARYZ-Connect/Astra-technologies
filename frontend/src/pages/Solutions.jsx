import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/solutions.css';

export default function Solutions({ navigate }) {
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
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container page-hero-inner">
          <div className="tag">What We Solve</div>
          <h1>Industry <em>Solutions</em></h1>
          <p>From corporate campuses to government facilities — Astra deploys end-to-end identity and access control solutions tailored to your industry.</p>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">Our Verticals</div>
            <h2 className="section-title">Solving Access for Every Industry</h2>
            <p className="section-sub" style={{ marginInline: 'auto' }}>Purpose-built integrations for the environments that matter most.</p>
          </div>
          <div className="solutions-grid">
            <div className="solution-card reveal">
              <div className="solution-icon">🏢</div>
              <h3>Corporate &amp; IT Parks</h3>
              <p>Multi-floor access control, visitor management, and time-attendance for large workforces across multiple sites.</p>
              <div className="solution-tags">
                <span className="solution-tag">Flap Barriers</span>
                <span className="solution-tag">Time Attendance</span>
                <span className="solution-tag">HRMS Integration</span>
              </div>
            </div>
            <div className="solution-card reveal">
              <div className="solution-icon">🏭</div>
              <h3>Manufacturing &amp; Factories</h3>
              <p>Rugged biometric terminals for shift tracking, zone-restricted access, and production floor monitoring.</p>
              <div className="solution-tags">
                <span className="solution-tag">Tripod Turnstile</span>
                <span className="solution-tag">Fingerprint</span>
                <span className="solution-tag">Payroll Export</span>
              </div>
            </div>
            <div className="solution-card reveal">
              <div className="solution-icon">🏥</div>
              <h3>Healthcare &amp; Hospitals</h3>
              <p>Touchless access for sterile zones, staff authentication, and visitor restriction at ward and ICU entrances.</p>
              <div className="solution-tags">
                <span className="solution-tag">Face Recognition</span>
                <span className="solution-tag">Touchless</span>
                <span className="solution-tag">Visitor Mgmt</span>
              </div>
            </div>
            <div className="solution-card reveal">
              <div className="solution-icon">🏫</div>
              <h3>Education &amp; Universities</h3>
              <p>Campus-wide access control, library and lab management, exam hall security with smartphone detection.</p>
              <div className="solution-tags">
                <span className="solution-tag">Campus Access</span>
                <span className="solution-tag">Smartphone Detector</span>
                <span className="solution-tag">Boom Barrier</span>
              </div>
            </div>
            <div className="solution-card reveal">
              <div className="solution-icon">🏨</div>
              <h3>Hotels &amp; Hospitality</h3>
              <p>Smart hotel locks, guest check-in kiosks, and staff attendance — all integrated with your property management system.</p>
              <div className="solution-tags">
                <span className="solution-tag">Hotel Smart Lock</span>
                <span className="solution-tag">Android Kiosk</span>
                <span className="solution-tag">PMS Integration</span>
              </div>
            </div>
            <div className="solution-card reveal">
              <div className="solution-icon">🏛️</div>
              <h3>Government &amp; Defence</h3>
              <p>High-security perimeter control, X-ray baggage inspection, and biometric identity verification for sensitive facilities.</p>
              <div className="solution-tags">
                <span className="solution-tag">X-Ray Scanner</span>
                <span className="solution-tag">Full Height Turnstile</span>
                <span className="solution-tag">Multi-Modal</span>
              </div>
            </div>
            <div className="solution-card reveal">
              <div className="solution-icon">🏬</div>
              <h3>Retail &amp; Malls</h3>
              <p>People counting, queue management, staff access, and CCTV surveillance integrated into one platform.</p>
              <div className="solution-tags">
                <span className="solution-tag">IP Camera</span>
                <span className="solution-tag">Swing Barrier</span>
                <span className="solution-tag">LPR Parking</span>
              </div>
            </div>
            <div className="solution-card reveal">
              <div className="solution-icon">🏗️</div>
              <h3>Construction &amp; Worksites</h3>
              <p>Contractor attendance, sub-contractor tracking, and portable handheld biometric enrolment on-site.</p>
              <div className="solution-tags">
                <span className="solution-tag">Portable Android</span>
                <span className="solution-tag">Cloud Attendance</span>
                <span className="solution-tag">Multi-Site</span>
              </div>
            </div>
            <div className="solution-card reveal">
              <div className="solution-icon">🏘️</div>
              <h3>Residential &amp; Gated Communities</h3>
              <p>Boom barriers, video intercoms, and smart door locks — seamless access for residents and controlled entry for visitors.</p>
              <div className="solution-tags">
                <span className="solution-tag">Boom Barrier</span>
                <span className="solution-tag">SIP Intercom</span>
                <span className="solution-tag">Smart Lock</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADS SECTION */}
      <section className="downloads-section">
        <div className="container">
          <div className="downloads-header reveal">
            <div className="tag">Resources</div>
            <h2 className="section-title">Software &amp; Documentation Downloads</h2>
            <p className="section-sub" style={{ marginInline: 'auto' }}>Download the latest software packages, drivers, and documentation for our solutions and ZKTeco products.</p>
          </div>
          
          <div className="downloads-grid">
            {/* ZKTeco Products Section Header */}
            <div style={{ gridColumn: '1/-1', padding: '1.5rem 0', borderBottom: '2px solid var(--border)', marginBottom: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem' }}>ZKTeco Software Suite</h3>
            </div>

            {/* Easy Cafeteria */}
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">Easy Cafeteria</div>
                <div className="download-type">Cafeteria Management Software</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">251.39 MB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/easy-cafeteria#Download" className="download-btn" target="_blank" rel="noreferrer">⬇️ Download</a>
            </div>

            {/* ZKTime.Net-3.0 */}
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">ZKTime.Net-3.0</div>
                <div className="download-type">Time &amp; Attendance Solution</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">91.24 MB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/ZKTime.Net-3.0#Download" className="download-btn" target="_blank" rel="noreferrer">⬇️ Download</a>
            </div>

            {/* Easy Gymfit */}
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">Easy Gymfit</div>
                <div className="download-type">Gym &amp; Fitness Management</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">1.09 GB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/easy-gymfit#Download" className="download-btn" target="_blank" rel="noreferrer">⬇️ Download</a>
            </div>

            {/* Astra Solutions Section Header */}
            <div style={{ gridColumn: '1/-1', padding: '1.5rem 0 1rem', borderTop: '2px solid var(--border)', borderBottom: '2px solid var(--border)', margin: '1.5rem 0' }}>
              <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem' }}>Astra Integrated Solutions</h3>
            </div>

            {/* easyWDMS Linux */}
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">easyWDMS-10.2.3-linux-x64</div>
                <div className="download-type">Document Management System</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">43.46 MB</div>
              <div className="download-date">2026-03-30</div>
              <a href="#contact" className="download-btn" onClick={(e) => handleLinkClick(e, '#contact')}>⬇️ Download</a>
            </div>

            {/* easyWDMS Windows */}
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">easyWDMS-10.2.3-win-x64</div>
                <div className="download-type">Document Management System</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">312.41 MB</div>
              <div className="download-date">2026-03-30</div>
              <a href="#contact" className="download-btn" onClick={(e) => handleLinkClick(e, '#contact')}>⬇️ Download</a>
            </div>

            {/* easyTimePro Linux */}
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">easyTimePro-10.2.3-linux-x64</div>
                <div className="download-type">Time &amp; Attendance Management</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">43.5 MB</div>
              <div className="download-date">2026-03-30</div>
              <a href="#contact" className="download-btn" onClick={(e) => handleLinkClick(e, '#contact')}>⬇️ Download</a>
            </div>

            {/* easyTimePro Windows */}
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">easyTimePro-10.2.3-win-x64</div>
                <div className="download-type">Time &amp; Attendance Management</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">273.67 MB</div>
              <div className="download-date">2026-03-30</div>
              <a href="#contact" className="download-btn" onClick={(e) => handleLinkClick(e, '#contact')}>⬇️ Download</a>
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
