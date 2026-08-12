import React from 'react';

export default function Footer({ setCurrentPage }) {
  const handleScrollTo = (sectionId) => {
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
    }, 150);
  };

  const handleServiceClick = (slug) => {
    setCurrentPage(`service-${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppQuery = (topicName) => {
    const text = encodeURIComponent(`Hi, I am interested in your homework help service for ${topicName}. Please guide me on getting started.`);
    window.open(`https://wa.me/919429379139?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handlePolicyClick = (policyTitle) => {
    alert(`${policyTitle} popup simulator:\n\nThis page is not initialized yet. All parameters are fully governed by A Grade Tutor coordinators on WhatsApp.`);
  };

  const servicesLinks = [
    { label: 'Assignment Help', slug: 'assignment' },
    { label: 'Essay Writing Help', slug: 'essay-writing' },
    { label: 'Live Session Help', slug: 'live-session' },
    { label: 'Lab Report Help', slug: 'lab-report' },
    { label: 'Project Report Help', slug: 'project-report' },
    { label: 'Speech Writing Service', slug: 'speech-writing' },
    { label: 'Presentation Writing Help', slug: 'presentation-writing' },
    { label: 'Video Solution Help', slug: 'video-solution' },
    { label: 'Online Tutoring Help', slug: 'online-tutoring' }
  ];

  const subjectsLinks = [
    { label: 'Mathematics Help', query: 'Mathematics' },
    { label: 'Physics Help', query: 'Physics' },
    { label: 'Chemistry Help', query: 'Chemistry' },
    { label: 'Computer Science Help', query: 'Computer Science' },
    { label: 'Economics Help', query: 'Economics' },
    { label: 'Accounting & Finance Help', query: 'Accounting & Finance' }
  ];

  const companyLinks = [
    { label: 'Become a Tutor', action: () => handleScrollTo('become-a-tutor') },
    { label: 'FAQs & Support', action: () => handleScrollTo('faq') },
    { label: 'Student Reviews', action: () => handleScrollTo('testimonials') },
    { label: 'Refund Policy', action: () => handlePolicyClick('Refund Policy') },
    { label: 'Privacy Policy', action: () => handlePolicyClick('Privacy Policy') },
    { label: 'Terms & Conditions', action: () => handlePolicyClick('Terms & Conditions') }
  ];

  return (
    <footer style={{ backgroundColor: '#4e75a3', color: '#ffffff', padding: '60px 0 30px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Main 4-Column Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '40px', textAlign: 'left', marginBottom: '50px' }} className="footer-grid-4">
          
          {/* Column 1: Brand & Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', background: '#ffffff', padding: '6px 14px', borderRadius: '8px', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <img src="/logo.png" alt="A Grade Tutor Logo" style={{ height: '36px', objectFit: 'contain' }} />
            </div>

            <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#cbd5e1', margin: 0, fontFamily: 'var(--font-body)', fontWeight: '500' }}>
              Your ultimate academic partner. Connecting you directly to specialized academic tutors over WhatsApp for 100% human, custom solutions. Available 24/7.
            </p>

            <div>
              <p style={{ fontSize: '11px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px', fontWeight: '700' }}>WhatsApp Support Hotline:</p>
              <a 
                href="https://wa.me/919429379139" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontWeight: '800', fontSize: '17px', color: '#fbbf24', textDecoration: 'none' }}
              >
                +91 9429379139
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '4px' }}>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Our Services (9 Implemented Core Services) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '800', fontFamily: 'var(--font-headings)', margin: 0 }}>
              Our Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
              {servicesLinks.map((link, idx) => (
                <li key={idx} style={{ listStyle: 'none' }}>
                  <span 
                    onClick={() => handleServiceClick(link.slug)}
                    style={{ cursor: 'pointer', fontSize: '13px', color: '#cbd5e1', transition: 'color 0.2s', fontFamily: 'var(--font-body)', fontWeight: '500' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subjects We Support (6 implemented subjects) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '800', fontFamily: 'var(--font-headings)', margin: 0 }}>
              Subjects Help
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
              {subjectsLinks.map((link, idx) => (
                <li key={idx} style={{ listStyle: 'none' }}>
                  <span 
                    onClick={() => handleWhatsAppQuery(link.query)}
                    style={{ cursor: 'pointer', fontSize: '13px', color: '#cbd5e1', transition: 'color 0.2s', fontFamily: 'var(--font-body)', fontWeight: '500' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Policies */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '800', fontFamily: 'var(--font-headings)', margin: 0 }}>
              Company & Policies
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
              {companyLinks.map((link, idx) => (
                <li key={idx} style={{ listStyle: 'none' }}>
                  <span 
                    onClick={link.action}
                    style={{ cursor: 'pointer', fontSize: '13px', color: '#cbd5e1', transition: 'color 0.2s', fontFamily: 'var(--font-body)', fontWeight: '500' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Banner Card: Coordinator WhatsApp Hotline */}
        <div style={{ background: '#375d8a', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '800', margin: 0, fontFamily: 'var(--font-headings)' }}>
            Connect Instantly with an Academic Coordinator
          </h5>
          <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, fontFamily: 'var(--font-body)', fontWeight: '500' }}>
            Get 24/7 direct access and live assignment updates directly on WhatsApp: <a href="https://wa.me/919429379139" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24', fontWeight: '800', textDecoration: 'underline' }}>+91 9429379139</a>
          </p>
        </div>

        {/* Brand Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', fontSize: '12.5px', color: '#cbd5e1' }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: '500' }}>
            © {new Date().getFullYear()} A Grade Tutor. All Rights Reserved. Reference solutions are meant for study and reference purposes only.
          </p>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: '500' }}>
            Direct Coordinator Hotline: <a href="https://wa.me/919429379139" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: '700' }}>WhatsApp Support</a>
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 968px) {
          .footer-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid-4 {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
