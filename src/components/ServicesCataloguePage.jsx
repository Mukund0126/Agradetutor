import React, { useState } from 'react';

const servicesList = [
  {
    num: '01',
    title: 'Online Assignment Help',
    slug: 'assignment',
    desc: 'Need study guidance or have doubts? Clear your doubts, find your solution, and seek expert help for all college homework, worksheet problems, and course tasks.',
    tag: 'Popular',
    iconType: 'assignment',
    bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    iconColor: '#3b82f6'
  },
  {
    num: '02',
    title: 'Essay Writing Service',
    slug: 'essay-writing',
    desc: 'Get plagiarism-free research papers, essays, proofreading, and structuring matching top university rubrics. Handled by expert academic authors and thesis editors.',
    tag: 'Best Seller',
    iconType: 'essay',
    bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
    iconColor: '#ec4899'
  },
  {
    num: '03',
    title: 'Live Session Help',
    slug: 'live-session',
    desc: 'Connect in real-time with verified PhD tutors for instant exam preparation, complex mathematical derivations, database design, or lab debriefings.',
    tag: 'Direct Match',
    iconType: 'live',
    bgGradient: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)',
    iconColor: '#6366f1'
  },
  {
    num: '04',
    title: 'Lab Report Writing Help',
    slug: 'lab-report',
    desc: 'Rigorous science and engineering reports with precise data calculations, interactive charts, graphs, and complete methodology explanations matching academic expectations.',
    tag: 'Premium Quality',
    iconType: 'lab',
    bgGradient: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
    iconColor: '#10b981'
  },
  {
    num: '05',
    title: 'Project Report Writing',
    slug: 'project-report',
    desc: 'Comprehensive support for final term projects, computer science systems design, data analysis worksheets, and detailed technical writing guidelines.',
    tag: 'Technical Core',
    iconType: 'project',
    bgGradient: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
    iconColor: '#14b8a6'
  },
  {
    num: '06',
    title: 'Speech Writing Service',
    slug: 'speech-writing',
    desc: 'Captivating and structured speech drafts customized for public speaking, business presentations, university debates, and ceremonies.',
    tag: 'Creative Fold',
    iconType: 'speech',
    bgGradient: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
    iconColor: '#f97316'
  },
  {
    num: '07',
    title: 'Presentation Writing Help',
    slug: 'presentation-writing',
    desc: 'Sleek PowerPoint or Google Slides templates designed with structured summaries, custom visual styles, and complete presenter outline notes.',
    tag: 'Top Rated',
    iconType: 'presentation',
    bgGradient: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
    iconColor: '#ef4444'
  },
  {
    num: '08',
    title: 'Video Solutions',
    slug: 'video-solution',
    desc: 'Step-by-step whiteboard video recordings explaining complex math formulas, coding segments, or engineering problems in complete detail.',
    tag: 'Highly Visual',
    iconType: 'video',
    bgGradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
    iconColor: '#a855f7'
  },
  {
    num: '09',
    title: 'Online Tutoring',
    slug: 'online-tutoring',
    desc: 'Personalized 1-on-1 online tutoring sessions covering global school and university curricula. Real-time whiteboards and flexible timing.',
    tag: '1-to-1 Elite',
    iconType: 'tutoring',
    bgGradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    iconColor: '#0ea5e9'
  }
];

export default function ServicesCataloguePage({ setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesList.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (slug) => {
    setCurrentPage(`service-${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderServiceVisual = (type, color) => {
    const iconStyle = { width: '80px', height: '80px', color: color };
    switch(type) {
      case 'assignment':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'essay':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        );
      case 'live':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'lab':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'project':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25m-11.142 0L10.5 7.5l5.571 2.25m-11.142 4.5L10.5 16.5l5.571-2.25" />
          </svg>
        );
      case 'speech':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        );
      case 'presentation':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M19.5 3v11.25a2.25 2.25 0 01-2.25 2.25H16.5m-3-13.5v13.5m0-13.5L9 5.25m4.5-.75l3.75 1.5M9 16.5h6" />
          </svg>
        );
      case 'video':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l-4.5 3v-6l4.5 3z" />
          </svg>
        );
      default:
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 017.218 5.84a50.566 50.566 0 00-2.658.813m-11.144-.149l6.578 3.29a1.25 1.25 0 001.124 0l6.578-3.29M4.26 10.147v6.347V20.25M20.25 10.147v6.347V20.25" />
          </svg>
        );
    }
  };

  return (
    <div className="services-catalogue-page" style={{ background: '#f8fafc', paddingBottom: '60px' }}>
      
      {/* Search Header Banner */}
      <section style={{ padding: '80px 0 60px 0', background: 'radial-gradient(circle at 50% 10%, rgba(99, 102, 241, 0.06) 0%, transparent 70%)', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary-glow)', color: 'var(--primary)', padding: '6px 18px', borderRadius: '100px', fontWeight: '700', fontSize: '12px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            📚 SERVICE CATALOGUE
          </div>
          <h1 style={{ fontSize: '46px', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: '1.15', fontFamily: 'var(--font-headings)' }}>
            A Grade Tutor <span className="gradient-text">At Your Service</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.6', marginBottom: '36px', fontWeight: '500', fontFamily: 'var(--font-body)' }}>
            Everything You Need to Succeed: Explore our wide range of professional academic help services, tailored to support your education journey 24/7.
          </p>

          {/* Premium Search input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '560px', margin: '0 auto' }}>
            <span style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: 'var(--text-light)' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search for assignment, essay, programming help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="creative-input"
              style={{ 
                padding: '16px 20px 16px 54px', 
                fontSize: '15px', 
                borderRadius: '100px',
                border: '1.5px solid #cbd5e1',
                boxShadow: 'var(--shadow-md)',
                background: '#ffffff',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Catalogue Cards List - Searchable Alternating Cards */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {filteredServices.length > 0 ? (
            filteredServices.map((svc, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={svc.num}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    alignItems: 'stretch',
                    borderRadius: '24px',
                    border: '1.5px solid #e2e8f0',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                    background: '#ffffff',
                    overflow: 'hidden',
                    minHeight: '300px',
                    transition: 'all 0.3s ease',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
                  }}
                >
                  {/* Image/Visual Mockup Side */}
                  <div 
                    style={{ 
                      flex: 1, 
                      background: svc.bgGradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '40px',
                      position: 'relative'
                    }}
                  >
                    <div 
                      style={{ 
                        background: '#ffffff', 
                        borderRadius: '16px', 
                        padding: '24px', 
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(226, 232, 240, 0.8)'
                      }}
                    >
                      {renderServiceVisual(svc.iconType, svc.iconColor)}
                    </div>

                    <span 
                      style={{ 
                        position: 'absolute', 
                        top: '16px', 
                        left: '16px', 
                        background: `${svc.iconColor}12`,
                        padding: '6px 14px', 
                        borderRadius: '100px', 
                        fontSize: '11.5px', 
                        fontWeight: '800', 
                        color: svc.iconColor,
                        border: `1.5px solid ${svc.iconColor}25`,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontFamily: 'var(--font-headings)'
                      }}
                    >
                      {svc.tag}
                    </span>
                  </div>

                  {/* Body Content Side */}
                  <div 
                    style={{ 
                      flex: 1.2, 
                      padding: '48px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      gap: '16px' 
                    }}
                  >
                    <div style={{ fontSize: '48px', fontWeight: '900', color: '#cbd5e1', fontFamily: 'var(--font-headings)', lineHeight: '1' }}>
                      {svc.num}
                    </div>
                    <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-headings)', margin: 0 }}>
                      {svc.title}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: '1.7', fontWeight: '500', fontFamily: 'var(--font-body)', margin: 0 }}>
                      {svc.desc}
                    </p>

                    <div style={{ marginTop: '12px' }}>
                      <button 
                        onClick={() => handleServiceClick(svc.slug)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          outline: 'none', 
                          color: svc.iconColor, 
                          fontWeight: '800', 
                          fontSize: '15px', 
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 0',
                          fontFamily: 'var(--font-headings)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                      >
                        Know more <span style={{ transition: 'transform 0.2s' }}>&gt;</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #cbd5e1' }}>
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>🔍</span>
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>No services found</h3>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>We couldn't find any services matching "{searchQuery}". Try searching for another topic or chat with us on WhatsApp.</p>
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div 
            style={{ 
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', 
              borderRadius: '24px', 
              padding: '48px', 
              textAlign: 'center', 
              color: '#ffffff',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <h2 style={{ fontSize: '32px', color: '#ffffff', fontWeight: '800', marginBottom: '12px', fontFamily: 'var(--font-headings)' }}>
              Get Answers in a Few Hours
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '15px', maxWidth: '600px', margin: '0 auto 28px auto', lineHeight: '1.6', fontFamily: 'var(--font-body)', fontWeight: '500' }}>
              Don't stress over tight deadlines. Send your guidelines directly to our WhatsApp coordinator line and get matched with a PhD-level expert helper in minutes.
            </p>
            
            <a 
              href="https://wa.me/919429379139?text=Hi%2C%20I%20need%20academic%20help%20urgently.%20Please%20guide%20me%20on%20getting%20started."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontSize: '15px', padding: '14px 36px', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '100px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
              </svg>
              Instant Help? WhatsApp Us!
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
