import React, { useState, useEffect } from 'react';

export default function Header({ setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = () => {
      setDropdownOpen(false);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const serviceLinks = [
    'Assignment', 'Essay Writing', 'Lab Report', 'Project Report',
    'Presentation Writing', 'Online Tutoring', 'Video Solution',
    'Write my Research Paper', 'Dissertation Writing', 'Do my Homework',
    'Do my Assignment', 'Thesis Writing'
  ];

  const getSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    
    if (sectionId === 'top') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleServiceClick = (service) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const slug = getSlug(service);
    setCurrentPage(`service-${slug}`);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 250); // 250ms is perfect for bridging gap to selection
    setHoverTimeout(timeout);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Top Query Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <a 
            href="https://wa.me/919429379139?text=Hi%2C%20I%20have%20a%20query%20regarding%20A%20Grade%20Tutor." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="announcement-link"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
            </svg>
            <span>WhatsApp for any query : +91 9429379139</span>
          </a>
        </div>
      </div>

      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          
          {/* Brand Logo */}
          <div className="logo" onClick={() => handleNavClick('top')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="A Grade Tutor Logo" style={{ height: '60px', objectFit: 'contain' }} />
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <span className="nav-link" onClick={() => handleNavClick('top')}>Home</span>
            
            {/* Services Dropdown */}
            <div 
              className="services-dropdown-container" 
              style={{ position: 'relative' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={`nav-link dropdown-toggle ${dropdownOpen ? 'active' : ''}`} 
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', userSelect: 'none' }}
              >
                Services <span style={{ fontSize: '10px', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
              </span>
              
              {dropdownOpen && (
                <div className="services-dropdown" onClick={(e) => e.stopPropagation()}>
                  <div className="dropdown-grid">
                    {serviceLinks.map((service, idx) => (
                      <span 
                        key={idx} 
                        onClick={() => handleServiceClick(service)}
                        className="dropdown-item"
                        style={{ cursor: 'pointer' }}
                      >
                        {service}
                      </span>
                    ))}
                    <div 
                      onClick={() => {
                        setDropdownOpen(false);
                        setMobileMenuOpen(false);
                        setCurrentPage('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="dropdown-item"
                      style={{ 
                        gridColumn: '1 / -1', 
                        borderTop: '1.5px solid #f1f5f9', 
                        paddingTop: '12px', 
                        marginTop: '4px', 
                        fontWeight: '800', 
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        fontSize: '13.5px'
                      }}
                    >
                      <span>View All Services Catalogue</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <span className="nav-link" onClick={() => handleNavClick('how-it-works')}>How It Works</span>
            <span className="nav-link" onClick={() => handleNavClick('become-a-tutor')}>Become a Tutor</span>
            <span className="nav-link" onClick={() => handleNavClick('get-quote')}>Get Quote</span>
            <span className="nav-link" onClick={() => handleNavClick('faq')}>FAQ</span>
            
            <a 
              href="https://wa.me/919429379139?text=Hi%2C%20I%20want%20to%20get%20academic%20help%20from%20A%20Grade%20Tutor." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              style={{ padding: '8px 20px', fontSize: '14px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
              </svg>
              Chat Now
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <div 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', cursor: 'pointer' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </div>
        </div>

        <style>{`
          .services-dropdown-container {
            height: 100%;
            display: flex;
            align-items: center;
          }
          .services-dropdown {
            position: absolute;
            top: 75px;
            left: 50%;
            transform: translateX(-50%);
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            padding: 20px;
            width: 480px;
            z-index: 1000;
            animation: slideDown 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .services-dropdown::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 0;
            right: 0;
            height: 20px;
            background: transparent;
          }
          .dropdown-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .dropdown-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: var(--text-secondary);
            font-weight: 500;
            padding: 8px 12px;
            border-radius: var(--radius-sm);
            transition: var(--transition);
          }
          .dropdown-item:hover {
            background-color: var(--bg-secondary);
            color: var(--accent-purple);
            padding-left: 16px;
          }
          .dropdown-item .bullet {
            color: var(--accent-purple);
            font-size: 11px;
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(-5px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
          @media (max-width: 768px) {
            .nav-menu {
              display: ${mobileMenuOpen ? 'flex' : 'none'} !important;
              position: absolute;
              top: 80px;
              left: 0;
              right: 0;
              background: var(--bg-primary);
              flex-direction: column;
              padding: 24px;
              gap: 20px;
              border-bottom: 1px solid var(--border-color);
              box-shadow: var(--shadow-lg);
            }
            .mobile-toggle {
              display: block !important;
            }
            .services-dropdown {
              position: static;
              transform: none;
              width: 100%;
              box-shadow: none;
              border: none;
              padding: 10px 0;
              animation: none;
            }
            .dropdown-grid {
              grid-template-columns: 1fr;
            }
            .services-dropdown-container {
              flex-direction: column;
              align-items: center;
              width: 100%;
            }
            .dropdown-item {
              justify-content: center;
            }
          }
        `}</style>
      </header>
    </>
  );
}
