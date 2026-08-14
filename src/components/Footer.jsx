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
    if (policyTitle === 'Privacy Policy') {
      setCurrentPage('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (policyTitle === 'Refund Policy') {
      setCurrentPage('refund');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (policyTitle === 'Terms & Conditions') {
      setCurrentPage('terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert(`${policyTitle} popup simulator:\n\nThis page is not initialized yet. All parameters are fully governed by A Grade Tutor coordinators on WhatsApp.`);
    }
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
            <div style={{ display: 'flex', alignItems: 'center', background: '#ffffff', padding: '8px 18px', borderRadius: '10px', width: 'fit-content', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <img src="/logo.png" alt="A Grade Tutor Logo" style={{ height: '54px', objectFit: 'contain' }} />
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

            <div>
              <p style={{ fontSize: '11px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px', fontWeight: '700' }}>Email Us:</p>
              <a 
                href="mailto:agradetutoreducation@gmail.com" 
                style={{ fontWeight: '800', fontSize: '14.5px', color: '#fbbf24', textDecoration: 'none' }}
              >
                agradetutoreducation@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '4px' }}>
              <a href="https://www.instagram.com/agradetutor?igsh=OXcyNTQ0cjk4MHFw&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/a-grade-tutor/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:agradetutoreducation@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
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

        {/* Bottom Banner Card: Coordinator WhatsApp Hotline & Email */}
        <div style={{ background: '#375d8a', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '800', margin: 0, fontFamily: 'var(--font-headings)' }}>
            Connect Instantly with an Academic Coordinator
          </h5>
          <div style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, fontFamily: 'var(--font-body)', fontWeight: '500', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
            <span>Get 24/7 direct access and live assignment updates directly on WhatsApp: <a href="https://wa.me/919429379139" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24', fontWeight: '800', textDecoration: 'underline' }}>+91 9429379139</a></span>
            <span>Or email us at: <a href="mailto:agradetutoreducation@gmail.com" style={{ color: '#fbbf24', fontWeight: '800', textDecoration: 'underline' }}>agradetutoreducation@gmail.com</a></span>
          </div>
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
