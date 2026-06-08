import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/products.css';

const CATEGORIES = [
  { id: 'time-attendance', label: 'Time Attendance', count: '3', desc: 'Accurate, AI-biometric visible-light attendance terminals for every workforce' },
  { id: 'access-control', label: 'Access Control', count: '3', desc: 'IP-based and web-based multi-door controllers, readers, and outdoor panels' },
  { id: 'android-terminals', label: 'Android Smart Terminals', count: '3', desc: 'Sleek Android OS biometric systems for custom developer app deployments' },
  { id: 'smart-lock', label: 'Smart Lock', count: '2', desc: 'Hybrid face/fingerprint mortise locks, padlocks, and hotel smart keys' },
  { id: 'entrance-control', label: 'Smart Entrance Control', count: '3', desc: 'High-speed pedestrian gates, swing/flap turnstiles, and boom barriers' },
  { id: 'security-inspection', label: 'Security Inspection', count: '2', desc: 'High-resolution dual-energy X-Ray scanners and multi-zone metal detectors' },
  { id: 'software-platforms', label: 'Software Platforms', count: '2', desc: 'Enterprise security dashboards and real-time attendance management software' },
  { id: 'armatura', label: 'Armatura', count: '2', desc: 'Advanced Armatura access panels, NFC readers, and high-security credentials' }
];

const PRODUCTS = [
  // Time Attendance
  { 
    category: 'time-attendance', 
    name: 'SpeedFace-V5L [TD]', 
    sub: 'AI-biometric visible light facial and palm terminal with thermal body temperature scanning.', 
    tags: ['Facial AI', 'Body Temp.', 'Liveness Detection'], 
    badge: 'new', 
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg',
    specs: {
      'Face Capacity': '6,000 templates',
      'Palm Capacity': '3,000 templates',
      'Fingerprint Capacity': '10,000 templates',
      'Transactions': '200,000 logs',
      'Communication': 'TCP/IP, Wi-Fi, RS485, Wiegand',
      'Verification Speed': '<0.1 second',
      'Camera': '2MP Dual-Lens with WDR',
      'OS Platform': 'Linux with Visible Light Facial AI'
    }
  },
  { 
    category: 'time-attendance', 
    name: 'SpeedFace-H5L', 
    sub: 'Hybrid multi-biometric attendance terminal with advanced visible light facial mapping.', 
    tags: ['Visible Light', 'Facial ID', 'Fingerprint'], 
    badge: 'popular',
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Face Capacity': '6,000 templates',
      'Fingerprint Capacity': '10,000 templates',
      'Card Capacity': '10,000 RFID cards',
      'Transactions': '200,000 logs',
      'Display': '5-inch Touch Screen Panel',
      'Communication': 'TCP/IP, Wiegand In/Out, RS485, USB',
      'Processor': '900MHz Dual-Core CPU',
      'Software Support': 'ZKBio Time, ZKBio CVSecurity'
    }
  },
  { 
    category: 'time-attendance', 
    name: 'iClock 9000-G', 
    sub: 'Robust fingerprint attendance terminal with built-in backup battery and cellular GPRS.', 
    tags: ['Fingerprint', 'Cellular GPRS', 'Backup Battery'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Fingerprint Capacity': '6,000 templates',
      'Card Capacity': '10,000 cards',
      'Transactions': '200,000 logs',
      'Backup Battery': 'Built-in 2000mAh (4-6 Hours active)',
      'Communication': 'GPRS, Wi-Fi, TCP/IP, USB Host',
      'Verification Speed': '<0.5 second',
      'Hardware': 'ZKFinger VX10.0 high-speed optical sensor',
      'Report Generation': 'USB Flash Drive Auto-Report'
    }
  },

  // Access Control
  { 
    category: 'access-control', 
    name: 'Atlas 460 Panel', 
    sub: 'State-of-the-art web-based multi-door controller with embedded SSL/TLS server.', 
    tags: ['Built-in Web Server', '4 Doors Control', 'No Software Needed'], 
    badge: 'popular', 
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Doors Controlled': '4 doors (bidirectional)',
      'User Capacity': '5,000 users',
      'Event Capacity': '10,000 logs',
      'Web Server': 'Embedded HTML5 (Safari, Chrome compatible)',
      'Communication': 'TCP/IP, Wi-Fi, PoE supported',
      'Mobile App': 'Atlas Mobile App (iOS & Android)',
      'Encryption': 'Secure SSL/TLS channel encryption',
      'Panel Integration': 'Auxiliary relays & inputs built-in'
    }
  },
  { 
    category: 'access-control', 
    name: 'inBio 460 Pro', 
    sub: 'IP-based multi-door biometric controller for advanced fingerprint card operations.', 
    tags: ['IP-Controller', 'Push SDK', 'Multi-Door Panel'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Doors Controlled': '4 doors',
      'Fingerprint Capacity': '20,000 templates',
      'Card Capacity': '60,000 cards',
      'Event Capacity': '100,000 logs',
      'Processor': '32-bit 400MHz CPU',
      'Communication': 'TCP/IP, RS485',
      'Wiegand Input': '4 reader ports (Wiegand 26-bit to 66-bit)',
      'Security functions': 'Anti-passback, interlock, multi-card open'
    }
  },
  { 
    category: 'access-control', 
    name: 'ProMA-QR Outdoor', 
    sub: 'High-end IP66 weatherproof outdoor biometric reader with integrated QR code scanner.', 
    tags: ['IP66 Waterproof', 'QR Code Reader', 'Vandalproof IK07'], 
    badge: 'new',
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg',
    specs: {
      'Face Capacity': '30,000 templates',
      'Card Capacity': '50,000 cards',
      'QR Code Capacity': 'Supports Dynamic & Static QR codes',
      'Ingress Protection': 'IP66 Waterproof & IK07 Vandalproof',
      'Housing': 'Heavy-duty aluminum alloy metal casing',
      'Communication': 'TCP/IP, OSDP, Wiegand In/Out, RS485',
      'Display': '2-inch TFT Color screen',
      'RFID Support': 'NFC, Mifare, EM Card'
    }
  },

  // Android Smart Terminals
  { 
    category: 'android-terminals', 
    name: 'SpeedFace-V4L', 
    sub: 'Sleek visible-light facial terminal powered by secure Android OS for third-party apps.', 
    tags: ['Android OS', '4-inch Screen', 'API Integration'], 
    badge: 'new', 
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg',
    specs: {
      'Face Capacity': '8,000 templates',
      'Operating System': 'Android OS with security layer',
      'Display': '4-inch TFT color touch panel',
      'Verification Speed': '<0.2 second',
      'Communication': 'TCP/IP, Wi-Fi, Bluetooth, Wiegand',
      'Developer Support': 'Full SDK and API interface access',
      'Sensor Type': 'Dual-Lens camera with visible light AI',
      'Dimensions': '148 x 78 x 16.5 mm'
    }
  },
  { 
    category: 'android-terminals', 
    name: 'ZPad Plus Kiosk', 
    sub: 'Self-service Android visitor management kiosk with built-in camera and card reader.', 
    tags: ['Visitor Kiosk', '7-inch Touchscreen', 'Custom App Build'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg',
    specs: {
      'Display': '7-inch LCD touch screen panel',
      'Operating System': 'Android 6.0 OS',
      'Card Reader': 'Integrated Mifare/EM RFID module',
      'Camera': 'Built-in 2MP camera',
      'Communication': 'Wi-Fi, Ethernet, USB, Bluetooth',
      'Storage': '8GB ROM / 1GB RAM',
      'Power Supply': 'PoE (Power over Ethernet) or 12V DC',
      'Enclosure': 'Desktop stand or Wall-mount'
    }
  },
  { 
    category: 'android-terminals', 
    name: 'S922 Portable', 
    sub: 'Ruggedized portable biometric terminal designed for field attendance and patrol checks.', 
    tags: ['Rugged Portable', 'IP65 Rated', 'Field Enrolment'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Fingerprint Capacity': '5,000 templates',
      'Card Capacity': '30,000 RFID cards',
      'Transactions': '200,000 logs',
      'Ingress Protection': 'IP65 shockproof, dustproof, and waterproof',
      'Communication': '3G/4G, Wi-Fi, TCP/IP, USB Client',
      'Battery Capacity': 'Built-in 7600mAh (up to 16 hours active)',
      'Dimensions': '225 x 235 x 125 mm (rubber protective casing)'
    }
  },

  // Biometric Smart Locks
  { 
    category: 'smart-lock', 
    name: 'TL800 Wi-Fi Lock', 
    sub: 'Smart biometric Wi-Fi video lock with HD camera, intercom, and active indoor screen.', 
    tags: ['Video Intercom', 'Wi-Fi Mortise', 'Mobile Release'], 
    badge: 'new', 
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Verification Modes': 'Face ID, Fingerprint, Card, Passcode, Key',
      'Camera Resolution': '2MP 1080P HD camera with night vision',
      'Indoor Screen': '3.5-inch LCD color screen display',
      'Communication': 'Direct Wi-Fi connection (no bridge needed)',
      'Mobile App': 'USmart Go (real-time video intercom)',
      'Battery Life': '4200mAh Lithium Rechargeable (12 months)',
      'Mortise': 'Fully electronic anti-theft mortise',
      'Material': 'Tempered glass & aluminum housing'
    }
  },
  { 
    category: 'smart-lock', 
    name: 'ML100 BLE DIY', 
    sub: 'Biometric DIY smart lock with Bluetooth, card, and lock passcode capabilities.', 
    tags: ['DIY Single Latch', 'Bluetooth BLE', 'Fingerprint Handle'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Fingerprint Capacity': '100 templates',
      'User Capacity': '300 users',
      'Communication': 'Bluetooth 5.0 BLE',
      'Mortise': 'Single Latch mortise (DIY easy-swap design)',
      'Material': 'Rugged Zinc Alloy casing',
      'Power Supply': '4 x AA alkaline batteries (emergency USB-C port)',
      'Software Support': 'ZSmart mobile app'
    }
  },

  // Entrance Control
  { 
    category: 'entrance-control', 
    name: 'FBL4000 Flap Gate', 
    sub: 'Premium pedestrian flap barrier gate constructed with heavy-duty SUS304 steel.', 
    tags: ['Retractable Flap', 'SUS304 Steel', 'Lobby Security'], 
    badge: 'popular', 
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Throughput Speed': '25 - 30 passages / minute',
      'Barrier Material': 'Acrylic retractable flap panels',
      'Housing': 'Brushed SUS304 Stainless Steel',
      'MCBF': '3 Million cycles',
      'Lane Width': '600 mm',
      'Emergency Feature': 'Barrier automatically collapses on power-cut',
      'Sensor Pairs': '6 pairs of infrared sensors (anti-pinch)'
    }
  },
  { 
    category: 'entrance-control', 
    name: 'TS2000 Pro Turnstile', 
    sub: 'Robust tripod turnstile gate engineered for high-traffic industrial checkpoints.', 
    tags: ['Tripod Turnstile', 'Anti-Tailgating', 'Drop-Arm Safety'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Throughput Speed': '30 passages / minute',
      'Housing': 'Brushed SUS304 Stainless Steel',
      'MCBF': '2 Million cycles',
      'Lane Width': '505 mm',
      'Safety Feature': 'Drop-arm collapses on power-loss/emergency trigger',
      'Bidirectional': 'Supports bidirectional verification control',
      'Dimensions': '1110 x 980 x 260 mm'
    }
  },
  { 
    category: 'entrance-control', 
    name: 'BG1000 Vehicle Barrier', 
    sub: 'High-speed vehicle boom barrier with 24V brushless DC motor and LED strip chassis.', 
    tags: ['Brushless Motor', 'Parking Barrier', '1.5s High Speed'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Operation Speed': '1.5 to 3.0 seconds (adjustable)',
      'Arm Length': '3 to 6 meters (telescopic arm option)',
      'Motor Type': '24V DC Brushless motor (long-life, anti-heating)',
      'MCBF': '3 Million cycles',
      'Chassis Protection': 'IP54 weatherproof structural housing',
      'LED Chassis Strip': 'Changes green/red indicating arm status',
      'Safety Features': 'Rebounds on obstacle collision, loop sensor ready'
    }
  },

  // Security Inspection
  { 
    category: 'security-inspection', 
    name: 'ZKX5030A X-Ray', 
    sub: 'Dual-energy X-Ray baggage scanning system for baggage and parcel threat analysis.', 
    tags: ['Baggage Scanner', 'Dual-Energy X-Ray', 'Threat Image Projection'], 
    badge: 'popular', 
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Tunnel Dimensions': '507 mm (width) x 305 mm (height)',
      'Conveyor Speed': '0.20 m/s',
      'High Wire Resolution': '38 AWG (0.1 mm typical copper wire)',
      'Steel Penetration': '34 mm (typical steel penetration)',
      'Software System': 'Threat Image Projection (TIP), Organic/Inorganic separation',
      'Conveyor Max Load': '120 kg (evenly distributed)',
      'Radiation Safety': 'Strict compliance with international standards (<0.1 \u03bcGy/h)'
    }
  },
  { 
    category: 'security-inspection', 
    name: 'ZK-D3180S Zones', 
    sub: 'Walk-through multi-zone metal detector with precise threat localization zones.', 
    tags: ['18 Detection Zones', '256 Sensitivities', 'Alarm Tally Counter'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Detection Zones': '18 independent zones',
      'Sensitivity Levels': '256 adjustable sensitivity levels per zone',
      'Display Screen': '5.7-inch LCD color control screen',
      'Counting sensors': 'Automated passenger & alarm tally counters',
      'Operating Frequency': '100 operating channels for anti-interference',
      'Material Protection': 'Fireproof, waterproof structural fiber panels',
      'Diagnostics': 'Auto-self diagnostics on power-up'
    }
  },

  // Software Platforms
  { 
    category: 'software-platforms', 
    name: 'ZKBio CVSecurity', 
    sub: 'Unified enterprise all-in-one web-based security microservices platform.', 
    tags: ['Microservices Platform', 'Unified Dashboard', 'Enterprise Linkage'], 
    badge: 'popular', 
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    specs: {
      'System Architecture': 'Web-based microservices architecture (highly scalable)',
      'Modules Supported': 'Access, Attendance, Visitor, Parking, Elevator, CCTV',
      'Max Door Capacity': '10,000 doors control',
      'Max Personnel': '50,000 users database',
      'Database Engine': 'SQL Server, PostgreSQL, Oracle compatible',
      'Global Linkages': 'Dynamic multi-system triggers (e.g. Alarm open doors & record)',
      'Channel Protection': 'HTTPS, SSL/TLS, AES-256 local database encryption'
    }
  },
  { 
    category: 'software-platforms', 
    name: 'ZKBio Time', 
    sub: 'Powerful web-based real-time time attendance and payroll integration software.', 
    tags: ['Time Attendance', 'Real-Time Sync', 'Payroll Middleware'], 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    specs: {
      'System Type': 'Web-based time attendance platform',
      'Synchronization': 'Real-time automatic terminal log capture',
      'Shift Management': 'Flexible schedules, auto-roster, break rules',
      'Reporting Format': 'PDF, Excel, CSV, payroll integrations',
      'API Integrations': 'Zoho, SAP, ADP, Zoho Peoples, Oracle middleware',
      'Mobile App': 'ZKBio Time Mobile App (Geo-Fencing attendance)'
    }
  },

  // Armatura Premium
  { 
    category: 'armatura', 
    name: 'Armatura One Terminal', 
    sub: 'All-in-one intelligent armatura multi-biometric credential reader terminal.', 
    tags: ['AI Facial 50k', 'NFC & NFC Mifare', 'TLS 1.3 Supervised'], 
    badge: 'new', 
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Face Capacity': '50,000 face templates',
      'Credentials Supported': 'AI Face, Fingerprint, RFID Card, Mobile NFC, Bluetooth BLE',
      'Ingress Protection': 'IP66 Weatherproof & IK08 Vandalproof casing',
      'Operating Temperature': '-30\u00b0C to 60\u00b0C (built-in automatic heater)',
      'Encryption Standards': 'TLS 1.3 security channel, AES-256 database',
      'Communication': 'TCP/IP, RS485, OSDP v2 reader interface',
      'Sensor Camera': '2MP Visible Light HDR Facial Camera'
    }
  },
  { 
    category: 'armatura', 
    name: 'Armatura A1 Controller', 
    sub: 'Supervised advanced multi-door armatura access controller with embedded server.', 
    tags: ['OSDP v2', 'Supervised Relays', 'TLS 1.3 Channel'], 
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Doors Controlled': '4 doors (bidirectional OSDP reader support)',
      'Supervised Inputs': '32 supervised input terminal zones',
      'Output Relays': '16 Form-C dry-contact relay outputs',
      'Communication': 'TCP/IP, OSDP v2, RS485 interfaces',
      'Personnel Capacity': '100,000 card holders / 1,000,000 logs offline',
      'ESD Protection': 'Advanced power surge and static discharge shields',
      'Enclosure Box': 'Heavy-duty steel box with backup battery charge circuit'
    }
  }
];

export default function Products({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useScrollReveal([activeCategory, searchQuery]);

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

  const filteredCategories = CATEGORIES.filter(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    
    const productsInCat = PRODUCTS.filter(p => p.category === cat.id);
    if (!searchQuery) return productsInCat.length > 0;
    
    const q = searchQuery.toLowerCase();
    const matchingProducts = productsInCat.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.sub.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
    return matchingProducts.length > 0;
  });

  const getFilteredProducts = (catId) => {
    const productsInCat = PRODUCTS.filter(p => p.category === catId);
    if (!searchQuery) return productsInCat;
    
    const q = searchQuery.toLowerCase();
    return productsInCat.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.sub.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container page-hero-inner">
          <div className="tag">Full Catalogue</div>
          <h1>Our <em>Product</em> Range</h1>
          <p>Enterprise-grade biometric devices, access control systems, software platforms, and security inspection tools — all engineered for India's most demanding environments.</p>
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              className="search-input" 
              id="searchInput"
              placeholder="Search products, e.g. SpeedFace, Atlas controller, armatura…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveCategory('all');
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="container stats-bar-inner">
          <div className="stat-item">
            <div className="stat-val">8<span>+</span></div>
            <div className="stat-lbl">Premium Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">17<span>+</span></div>
            <div className="stat-lbl">ZKTeco Models</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">500<span>+</span></div>
            <div className="stat-lbl">Sites Deployed</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">99<span>.9%</span></div>
            <div className="stat-lbl">Uptime SLA</div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
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

      {/* MAIN PRODUCTS LAYOUT */}
      <div className="container">
        <div className="products-layout">
          {/* SIDEBAR */}
          <button className="sidebar-toggle" id="sidebarToggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰ Browse Categories
          </button>
          
          <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} id="sidebar">
            <div className="sidebar-section">
              <div className="sidebar-title">Categories</div>
              <button 
                className={`cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('all');
                  setSidebarOpen(false);
                }}
              >
                All Products <span className="cat-count">17</span>
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id}
                  className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSidebarOpen(false);
                    const el = document.getElementById(cat.id);
                    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                  }}
                >
                  {cat.label} <span className="cat-count">{cat.count}</span>
                </button>
              ))}
            </div>
            <div className="sidebar-section" style={{ marginTop: '.5rem' }}>
              <div className="sidebar-title">Need Help?</div>
              <div style={{ background: 'rgba(0,180,216,.06)', border: '1px solid rgba(0,180,216,.15)', borderRadius: '10px', padding: '1rem', fontSize: '.83rem', color: 'var(--muted)' }}>
                <p style={{ color: 'var(--white)', fontWeight: 600, fontFamily: 'var(--font-h)', marginBottom: '.4rem' }}>Talk to an Expert</p>
                <p>Not sure which ZKTeco model fits your site? Our engineers will assess and recommend.</p>
                <a href="#contact" className="btn btn-primary" style={{ marginTop: '.85rem', fontSize: '.78rem', padding: '.5rem 1rem', borderRadius: '6px' }} onClick={(e) => handleLinkClick(e, '#contact')}>Book a Demo →</a>
              </div>
            </div>
          </aside>

          {/* PRODUCT CONTENT */}
          <main id="productMain">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(cat => {
                const matchedProducts = getFilteredProducts(cat.id);
                return (
                  <div key={cat.id} className="cat-section reveal" id={cat.id}>
                    <div className="cat-section-title">
                      <div>
                        <div className="cat-section-label">{cat.label}</div>
                        <div className="cat-section-desc">{cat.desc}</div>
                      </div>
                    </div>
                    <div className="product-grid">
                      {matchedProducts.map((p, idx) => (
                        <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                          {/* Real Transparent Product Image */}
                          <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                            <img src={p.image} alt={p.name} className="product-card-img" />
                          </div>
                          
                          {/* Clean Product Name without any leading Emojis */}
                          <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                            {p.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--muted)' }}>
                <h3>No matching products found</h3>
                <p style={{ marginTop: '.5rem' }}>Try refining your search query or choosing another category.</p>
              </div>
            )}

            {/* CTA BANNER */}
            <div className="cta-banner reveal">
              <h3>Can't Find the Right ZKTeco Model?</h3>
              <p>Our solutions team will survey your site and design a custom biometric system that fits perfectly — at the right budget.</p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-primary" onClick={(e) => handleLinkClick(e, '#contact')}>Book a Free Consultation</a>
                <a href="#contact" className="btn btn-outline" onClick={(e) => handleLinkClick(e, '#contact')}>Download Catalogue</a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* DYNAMIC TECHNICAL SPECS MODAL */}
      {selectedProduct && (
        <div className="specs-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="specs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="specs-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="specs-modal-header">
              <div className="specs-modal-visual">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="specs-modal-img" />
              </div>
              <div>
                <h2>{selectedProduct.name}</h2>
                <div className="specs-modal-meta">
                  <span className="specs-modal-badge">{CATEGORIES.find(c => c.id === selectedProduct.category)?.label}</span>
                  {selectedProduct.badge && (
                    <span className={`specs-modal-status ${selectedProduct.badge}`}>
                      {selectedProduct.badge.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="specs-modal-body">
              <p className="specs-modal-desc">{selectedProduct.sub}</p>
              
              <div className="specs-table-title">⚡ Technical Specifications</div>
              <div className="specs-table">
                {Object.entries(selectedProduct.specs).map(([key, val]) => (
                  <div className="specs-row" key={key}>
                    <span className="specs-label">{key}</span>
                    <span className="specs-value">{val}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="specs-modal-footer">
              <a href="#contact" className="btn btn-primary" style={{ padding: '.65rem 1.4rem', fontSize: '.88rem' }} onClick={(e) => {
                setSelectedProduct(null);
                handleLinkClick(e, '#contact');
              }}>
                Enquire Now
              </a>
              <button className="btn btn-outline" style={{ padding: '.65rem 1.4rem', fontSize: '.88rem' }} onClick={() => setSelectedProduct(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
