import React, { useState, useEffect } from 'react';
import { servicesConfig } from '../config/servicesConfig';

const countryCodes = [
  { code: '+1', name: 'US', flag: '🇺🇸' },
  { code: '+91', name: 'IN', flag: '🇮🇳' },
  { code: '+44', name: 'GB', flag: '🇬🇧' },
  { code: '+1', name: 'CA', flag: '🇨🇦' },
  { code: '+61', name: 'AU', flag: '🇦🇺' },
  { code: '+971', name: 'AE', flag: '🇦🇪' },
  { code: '+65', name: 'SG', flag: '🇸🇬' },
  { code: '+64', name: 'NZ', flag: '🇳🇿' },
  { code: '+353', name: 'IE', flag: '🇮🇪' },
  { code: '+27', name: 'ZA', flag: '🇿🇦' },
  { code: '+49', name: 'DE', flag: '🇩🇪' },
  { code: '+33', name: 'FR', flag: '🇫🇷' },
  { code: '+966', name: 'SA', flag: '🇸🇦' },
  { code: '+60', name: 'MY', flag: '🇲🇾' },
  { code: '+974', name: 'QA', flag: '🇶🇦' },
  { code: '+968', name: 'OM', flag: '🇴🇲' },
  { code: '+965', name: 'KW', flag: '🇰🇼' },
  { code: '+973', name: 'BH', flag: '🇧🇭' },
  { code: '+852', name: 'HK', flag: '🇭🇰' },
  { code: '+977', name: 'NP', flag: '🇳🇵' },
  { code: '+880', name: 'BD', flag: '🇧🇩' },
  { code: '+94', name: 'LK', flag: '🇱🇰' },
  { code: '+92', name: 'PK', flag: '🇵🇰' },
  { code: '+39', name: 'IT', flag: '🇮🇹' },
  { code: '+34', name: 'ES', flag: '🇪🇸' },
  { code: '+31', name: 'NL', flag: '🇳🇱' },
  { code: '+41', name: 'CH', flag: '🇨🇭' },
  { code: '+46', name: 'SE', flag: '🇸🇪' },
  { code: '+47', name: 'NO', flag: '🇳🇴' },
  { code: '+45', name: 'DK', flag: '🇩🇰' },
  { code: '+358', name: 'FI', flag: '🇫🇮' },
  { code: '+32', name: 'BE', flag: '🇧🇪' },
  { code: '+43', name: 'AT', flag: '🇦🇹' },
  { code: '+55', name: 'BR', flag: '🇧🇷' },
  { code: '+52', name: 'MX', flag: '🇲🇽' },
  { code: '+81', name: 'JP', flag: '🇯🇵' },
  { code: '+82', name: 'KR', flag: '🇰🇷' },
  { code: '+86', name: 'CN', flag: '🇨🇳' }
];

export default function ServicePage({ serviceKey, setCurrentPage }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsAppNum, setWhatsAppNum] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+1');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);

  // Find config for the active service
  const config = servicesConfig[serviceKey];

  // Quick Form State
  const [formData, setFormData] = useState({
    subject: 'Mathematics',
    topic: '',
    deadline: '',
    budget: '',
    grade: 'A+ Grade',
    instructions: '',
  });

  const subjectsList = [
    'Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Mechanical Engineering',
    'Electrical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Biology',
    'Economics', 'Finance & Accounting', 'Business Statistics', 'Essay Writing', 'English Literature'
  ];

  const handleTextMeNow = (e) => {
    e.preventDefault();
    if (!whatsAppNum) {
      alert('Please enter your WhatsApp number.');
      return;
    }
    const cleanNum = whatsAppNum.replace(/\D/g, '');
    const waMsg = `Hi A Grade Tutor! I want to get instant online homework help. My WhatsApp number is ${phonePrefix} ${cleanNum}. Please connect me with a coordinator!`;
    const encoded = encodeURIComponent(waMsg);
    window.open(`https://wa.me/919429379139?text=${encoded}`, '_blank');
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleScrollToSection = (sectionId) => {
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
  };

  // Reset form and scroll to top when serviceKey changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setFormData({
      subject: 'Mathematics',
      topic: '',
      deadline: '',
      budget: '',
      grade: 'A+ Grade',
      instructions: '',
    });
    setActiveFaq(null);
  }, [serviceKey]);

  if (!config) {
    return (
      <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
        <h2>Service Page Not Found</h2>
        <button onClick={() => setCurrentPage('home')} className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Homepage
        </button>
      </div>
    );
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!formData.topic || !formData.deadline || !formData.budget) {
      alert('Please fill out all required fields.');
      return;
    }

    const refId = `AGT-${Math.floor(1000 + Math.random() * 9000)}`;
    const attachedFilesText = selectedFiles.length > 0 
      ? selectedFiles.map(f => f.name).join(', ') 
      : 'None (will upload in chat)';

    const waMessage = `*New ${config.title} Request (A Grade Tutor)*\n\n` +
      `📌 *Order Ref:* ${refId}\n` +
      `📚 *Subject:* ${formData.subject}\n` +
      `📝 *Topic/Title:* ${formData.topic}\n` +
      `⏱ *Deadline:* ${formData.deadline}\n` +
      `💰 *Estimated Budget:* ₹${formData.budget}\n` +
      `🎓 *Target Grade:* ${formData.grade}\n` +
      `📎 *Attached Files:* ${attachedFilesText}\n` +
      `📋 *Instructions:* ${formData.instructions || 'None'}\n\n` +
      `Please connect me with a subject-matter expert for this task.`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/919429379139?text=${encodedMessage}`;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedFiles([]);
      setFormData({
        subject: 'Mathematics',
        topic: '',
        deadline: '',
        budget: '',
        grade: 'A+ Grade',
        instructions: '',
      });
      window.location.href = waUrl;
    }, 800);
  };

  const handleFaqToggle = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (serviceKey === 'assignment') {
    return (
      <div className="service-page assignment-special-page" style={{ backgroundColor: '#ffffff', color: '#1e293b', fontFamily: 'var(--font-body)' }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '40px 0 60px', background: 'radial-gradient(circle at 80% 20%, #fff7ed 0%, #ffffff 70%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            
            {/* Breadcrumbs */}
            <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#64748b', fontWeight: '600', marginBottom: '32px', textAlign: 'left' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>Home</span>
              <span>&gt;</span>
              <span style={{ color: '#0f172a' }}>Online Assignment Help</span>
            </div>

            <div className="grid-cols-2" style={{ alignItems: 'center', gap: '48px' }}>
              
              {/* Left Column */}
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'inline-block', padding: '6px 14px', background: '#ffe4e6', border: '1px solid #fecdd3', borderRadius: '100px', color: '#e11d48', fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.5px' }}>
                  Expert Help 24/7
                </div>

                <h1 style={{ fontSize: '38px', lineHeight: '1.2', color: '#0a2540', fontWeight: '900', marginBottom: '20px', fontFamily: 'var(--font-headings)' }}>
                  Assignment Helper | <br />
                  Online Assignment Help — <br />
                  <span style={{ color: '#ea580c' }}>Expert Tutors 24/7</span>
                </h1>

                <p style={{ fontSize: '16.5px', color: '#475569', marginBottom: '28px', lineHeight: '1.5', fontWeight: '500' }}>
                  Get top-quality academic assistance with online assignment help services
                </p>

                {/* Bullets with check icons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                  {[
                    'Step-by-step solutions',
                    'Urgent support available',
                    'Confidential service'
                  ].map((bullet, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ecfdf5', border: '1.5px solid #10b981', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '11px' }}>
                        ✓
                      </div>
                      <span style={{ fontSize: '14.5px', fontWeight: '700', color: '#1e293b' }}>{bullet}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleScrollToSection('whatsapp-support-section')}
                  className="btn pulse-animation"
                  style={{ backgroundColor: '#ea580c', color: '#ffffff', padding: '14px 32px', fontSize: '15px', fontWeight: '800', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(234, 88, 12, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  Get Online Assignment Help →
                </button>
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                  src="/assignment_hero_illustration.jpg" 
                  alt="Online Assignment Help" 
                  style={{ width: '100%', maxWidth: '540px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}
                />
              </div>

            </div>

          </div>
        </section>

        {/* STATS & RATINGS SECTION */}
        <section style={{ padding: '40px 0', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            
            {/* Boxed Stats Card */}
            <div style={{ background: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '16px', padding: '36px 20px', boxShadow: '0 4px 20px rgba(234, 88, 12, 0.03)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'center' }} className="stats-box-grid">
                <div>
                  <h3 style={{ fontSize: '36px', color: '#ea580c', fontWeight: '900', margin: '0 0 4px 0' }}>4.5/5</h3>
                  <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>Ratings</p>
                </div>
                <div style={{ borderLeft: '1.5px solid #fed7aa', borderRight: '1.5px solid #fed7aa' }}>
                  <h3 style={{ fontSize: '36px', color: '#ea580c', fontWeight: '900', margin: '0 0 4px 0' }}>303,336+</h3>
                  <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>Student Reviews</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '36px', color: '#ea580c', fontWeight: '900', margin: '0 0 4px 0' }}>64,999+</h3>
                  <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>Subject Matter Experts</p>
                </div>
              </div>
            </div>

            {/* Badges bar */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginTop: '30px', fontSize: '13px', color: '#475569', fontWeight: '700' }}>
              <span>⭐ 4.9/5 Rating</span>
              <span>👥 50,000+ Students Helped</span>
              <span>🛡️ 100% Plagiarism Free</span>
              <span>🌍 Trusted Globally</span>
            </div>

          </div>
        </section>

        {/* WHATSAPP SUPPORT SECTION WIDGET */}
        <section id="whatsapp-support-section" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '1100px' }}>
            <div 
              style={{ 
                background: '#ffffff', 
                borderRadius: '24px', 
                border: '1.5px solid #e2e8f0', 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', alignItems: 'stretch' }} className="whatsapp-box-grid">
                
                {/* Left pane */}
                <div style={{ padding: '48px', borderRight: '1.5px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', border: '1px solid #d1fae5', color: '#065f46', padding: '5px 12px', borderRadius: '100px', fontWeight: '700', fontSize: '12px', alignSelf: 'flex-start', marginBottom: '16px' }}>
                    <span style={{ width: '6px', height: '6px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
                    WhatsApp Support
                  </div>
                  
                  <h3 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', marginBottom: '16px', lineHeight: '1.2', fontFamily: 'var(--font-headings)' }}>
                    Get Instant <br />
                    Online Homework Help <br />
                    <span style={{ color: '#ea580c' }}>via WhatsApp</span>
                  </h3>
                  
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px' }}>
                    Get instant homework help from top tutors—just a WhatsApp message away. 24/7 hw help support for all your academic needs!
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* User Avatars */}
                    <div style={{ display: 'flex' }}>
                      {['A', 'S', 'M', 'R'].map((char, index) => (
                        <div 
                          key={index} 
                          className="avatar-overlap"
                          style={{ 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            backgroundColor: index % 2 === 0 ? '#ea580c' : '#3b82f6', 
                            color: '#ffffff', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            fontWeight: '800', 
                            fontSize: '12px',
                            border: '2px solid #ffffff',
                            marginLeft: index > 0 ? '-8px' : '0',
                            zIndex: 10 - index
                          }}
                        >
                          {char}
                        </div>
                      ))}
                    </div>

                    <div>
                      <div style={{ display: 'flex', gap: '2px', color: '#ea580c', fontSize: '13px' }}>★★★★★</div>
                      <p style={{ fontSize: '12px', color: '#475569', margin: 0, fontWeight: '700' }}>
                        <span style={{ color: '#0f172a' }}>2M+ students</span> trust A Grade Tutor
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right pane */}
                <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fafbfc', position: 'relative' }}>
                  
                  {/* Floating animated Envelope */}
                  <div style={{ position: 'absolute', top: '16px', right: '16px', opacity: '0.8' }} className="envelope-svg">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="30" width="70" height="50" rx="6" fill="#fed7aa" stroke="#ea580c" strokeWidth="3" />
                      <path d="M15 32 L50 60 L85 32" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <g className="envelope-paper">
                        <rect x="25" y="15" width="50" height="35" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                        <line x1="32" y1="23" x2="68" y2="23" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                        <line x1="32" y1="29" x2="60" y2="29" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                        <line x1="32" y1="35" x2="52" y2="35" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>

                  <form onSubmit={handleTextMeNow} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '380px', margin: '0 auto', textAlign: 'left' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', letterSpacing: '0.5px' }}>YOUR WHATSAPP NUMBER</label>
                      
                      <div className="premium-tel-container">
                        <select 
                          value={phonePrefix} 
                          onChange={(e) => setPhonePrefix(e.target.value)}
                          className="premium-tel-select"
                        >
                          {countryCodes.map((c, idx) => (
                            <option key={idx} value={c.code}>{c.flag} {c.code}</option>
                          ))}
                        </select>
                        <input 
                          type="tel" 
                          placeholder="WhatsApp Number Only"
                          value={whatsAppNum}
                          onChange={(e) => setWhatsAppNum(e.target.value)}
                          required
                          className="premium-tel-input"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="btn" 
                      style={{ 
                        width: '100%', 
                        padding: '14px 0', 
                        fontSize: '15px', 
                        fontWeight: '800', 
                        borderRadius: '8px', 
                        backgroundColor: '#22c55e', 
                        color: 'white',
                        border: 'none',
                        boxShadow: '0 6px 20px rgba(34, 197, 94, 0.25)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
                      </svg>
                      Text Me Now
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '6px 0', color: '#94a3b8', fontSize: '11px', fontWeight: '800' }}>
                      <span style={{ borderBottom: '1px solid #e2e8f0', flex: 1 }}></span>
                      <span style={{ padding: '0 8px', textTransform: 'uppercase' }}>or</span>
                      <span style={{ borderBottom: '1px solid #e2e8f0', flex: 1 }}></span>
                    </div>

                    <button 
                      type="button"
                      onClick={() => window.open('https://wa.me/919429379139?text=Hi%20A%20Grade%20Tutor%2C%20I%20need%20academic%20assistance.', '_blank')}
                      className="btn"
                      style={{ 
                        width: '100%', 
                        padding: '12px 0', 
                        fontSize: '13px', 
                        fontWeight: '700', 
                        borderRadius: '8px', 
                        backgroundColor: '#fff7ed', 
                        color: '#ea580c',
                        border: '1.5px dashed #fed7aa',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      📋 Get Homework Help →
                    </button>

                    {/* 2x2 badges grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 16px', marginTop: '24px', fontSize: '12px', color: '#475569', fontWeight: '600' }}>
                      <span>⚡ Instant reply</span>
                      <span>🔒 100% private</span>
                      <span>🎓 Top tutors</span>
                      <span>📚 All subjects</span>
                    </div>
                  </form>
                </div>

              </div>

              {/* Bottom Value Propositions banner */}
              <div 
                style={{ 
                  background: '#f8fafc', 
                  borderTop: '1px solid #e2e8f0', 
                  padding: '16px 24px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  flexWrap: 'wrap',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#64748b'
                }}
                className="whatsapp-widget-banner"
              >
                <span>● All Subjects Covered</span>
                <span>● Instant Response</span>
                <span>● 100% Confidential</span>
                <span>● Top Rated Service</span>
                <span>● Money-back Guarantee</span>
                <span>● 2M+ Students Helped</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW A GRADE TUTOR WORKS SECTION */}
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '1140px' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'inline-block', padding: '5px 12px', background: '#ffe4e6', color: '#e11d48', borderRadius: '100px', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.5px' }}>
                Simple Process
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0a2540', marginBottom: '8px', fontFamily: 'var(--font-headings)' }}>
                How A Grade Tutor Works
              </h2>
              <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '48px' }}>
                Get expert help in 4 simple steps
              </p>
            </div>

            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              
              {/* Steps process list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                {/* Connecting Line */}
                <div style={{ position: 'absolute', top: '20px', bottom: '20px', left: '39px', width: '2px', backgroundColor: '#e2e8f0', zIndex: 1 }}></div>

                {[
                  {
                    step: 1,
                    title: 'Submit Your Assignment',
                    desc: 'Share your requirements, upload files, and set your deadline. It takes less than 2 minutes.'
                  },
                  {
                    step: 2,
                    title: 'Get Matched with Expert',
                    desc: 'We instantly match you with a verified subject expert who specializes in your topic.'
                  },
                  {
                    step: 3,
                    title: 'Make Payment',
                    desc: "Pay securely through our platform. Money-back guarantee if you're not satisfied."
                  },
                  {
                    step: 4,
                    title: 'Receive Your Solution',
                    desc: 'Get plagiarism-free, detailed solutions delivered before your deadline. Guaranteed.'
                  }
                ].map((s, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ea580c', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '16px', flexShrink: 0, boxShadow: '0 4px 10px rgba(234,88,12,0.2)' }}>
                      {s.step === 1 ? '📤' : s.step === 2 ? '👤' : s.step === 3 ? '💳' : '📄'}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16.5px', fontWeight: '850', color: '#0f172a', margin: '0 0 6px 0' }}>{s.title}</h4>
                      <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: '1.5' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom button */}
            <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <button 
                onClick={() => handleScrollToSection('whatsapp-support-section')}
                className="btn pulse-animation"
                style={{ backgroundColor: '#ea580c', color: '#ffffff', padding: '14px 40px', fontSize: '15px', fontWeight: '800', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(234, 88, 12, 0.25)' }}
              >
                Get Started Now →
              </button>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>Connect instantly with a PhD expert on WhatsApp</span>
            </div>

          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '1140px' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ display: 'inline-block', padding: '5px 12px', background: '#ffe4e6', color: '#e11d48', borderRadius: '100px', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.5px' }}>
                A Grade Tutor Advantage
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0a2540', marginBottom: '16px', fontFamily: 'var(--font-headings)' }}>
                Benefits of Online Assignment Help
              </h2>
              <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Everything you get when you choose A Grade Tutor for your assignment help and academic needs — quality, speed, and peace of mind in one place.
              </p>
            </div>

            <div className="grid-cols-2" style={{ gap: '32px', alignItems: 'stretch' }}>
              
              {/* Left Card: What's Included */}
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderTop: '5px solid #10b981', borderRadius: '16px', padding: '36px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '800' }}>✓</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: 0 }}>What's Included</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Step-by-step solutions',
                    'Expert tutors available 24/7',
                    'Plagiarism-free work',
                    'On-time delivery',
                    'Affordable pricing',
                  ].map((item, idx) => (
                    <div key={idx} style={{ padding: '14px 16px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '800' }}>✓</div>
                      <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#1e293b' }}>{item}</span>
                    </div>
                  ))}
                  
                  {/* Highlighted last item */}
                  <div style={{ padding: '14px 16px', background: '#ecfdf5', borderRadius: '8px', border: '1.5px dashed #a7f3d0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '800' }}>✓</div>
                    <span style={{ fontSize: '13.5px', fontWeight: '800', color: '#065f46' }}>Unlimited revisions</span>
                  </div>
                </div>
              </div>

              {/* Right Card: Why Students Need Help */}
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderTop: '5px solid #ea580c', borderRadius: '16px', padding: '36px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>💬</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Why Students Need Assignment Help</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Tight deadlines leaving no time for research',
                    'Complex topics that are hard to understand alone',
                    'Multiple assignments piling up at once',
                    'Need expert-level accuracy for high grades',
                    'Balancing work, life, and academics'
                  ].map((item, idx) => (
                    <div key={idx} style={{ padding: '14px 16px', background: '#fff7ed', borderRadius: '8px', border: '1px solid #ffedd5', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ea580c' }}></div>
                      <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#ea580c' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FREE WITH EVERY ORDER SECTION */}
        <section style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '1140px' }}>
            
            {/* Outline Box */}
            <div style={{ border: '2.5px solid #fed7aa', background: '#fffbeb', borderRadius: '24px', padding: '40px 32px 32px 32px', position: 'relative', textAlign: 'left' }}>
              
              {/* Header inside border */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: '100px', color: '#ea580c', fontWeight: '800', fontSize: '14px', position: 'absolute', top: '-18px', left: '24px' }}>
                ⚡ Free With Every Order
              </div>

              {/* 3x2 grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '16px' }} className="freebies-grid">
                {[
                  { label: 'Plagiarism report', icon: '📄' },
                  { label: 'Revisions until satisfied', icon: '🔁' },
                  { label: 'APA / MLA formatting', icon: '📐' },
                  { label: 'Title & reference page', icon: '📖' },
                  { label: '24/7 customer support', icon: '💬' },
                  { label: 'Expert consultation', icon: '🎓' }
                ].map((item, idx) => (
                  <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.01)' }}>
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#334155' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Starting price and button */}
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ padding: '8px 24px', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '100px', color: '#ea580c', fontWeight: '800', fontSize: '13.5px', textTransform: 'none' }}>
                Assignment / Homework Help Starting @ $20 per 5 Questions
              </div>
              <button 
                onClick={() => handleScrollToSection('whatsapp-support-section')}
                className="btn pulse-animation"
                style={{ backgroundColor: '#ea580c', color: '#ffffff', padding: '14px 44px', fontSize: '15px', fontWeight: '800', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(234, 88, 12, 0.25)' }}
              >
                Sign up now! →
              </button>
            </div>

          </div>
        </section>

        {/* TRUSTED BY 1.1M+ HAPPY STUDENTS SECTION */}
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '1140px' }}>
            
            <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0a2540', textAlign: 'center', marginBottom: '40px', fontFamily: 'var(--font-headings)' }}>
              Trusted by <span style={{ color: '#ea580c' }}>1.1 M+ Happy Students</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="reviews-cards-grid">
              
              {/* Card 1: Trust Pilot */}
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '20px', color: '#00b67a', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  ★ <span style={{ color: '#0f172a', fontSize: '14px', fontWeight: '900' }}>Trustpilot</span>
                </div>
                <h4 style={{ fontSize: '13.5px', color: '#64748b', fontWeight: '700', marginBottom: '12px' }}>Trust Pilot</h4>
                <p style={{ fontSize: '32px', color: '#ea580c', fontWeight: '900', margin: 0 }}>4.4</p>
              </div>

              {/* Card 2: Edu Reviewer */}
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '20px', color: '#3b82f6', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  📘 <span style={{ color: '#0f172a', fontSize: '13.5px', fontWeight: '900' }}>EduReviewer</span>
                </div>
                <h4 style={{ fontSize: '13.5px', color: '#64748b', fontWeight: '700', marginBottom: '12px' }}>Edu Reviewer</h4>
                <p style={{ fontSize: '32px', color: '#ea580c', fontWeight: '900', margin: 0 }}>4.4</p>
              </div>

              {/* Card 3: Sitejabber */}
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '20px', color: '#0ea5e9', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  ⭐ <span style={{ color: '#0f172a', fontSize: '14px', fontWeight: '900' }}>Sitejabber</span>
                </div>
                <h4 style={{ fontSize: '13.5px', color: '#64748b', fontWeight: '700', marginBottom: '12px' }}>Sitejabber</h4>
                <p style={{ fontSize: '32px', color: '#ea580c', fontWeight: '900', margin: 0 }}>4.6</p>
              </div>

              {/* Card 4: Student Review */}
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '20px', color: '#6366f1', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  🎓 <span style={{ color: '#0f172a', fontSize: '14px', fontWeight: '900' }}>Student Review</span>
                </div>
                <h4 style={{ fontSize: '13.5px', color: '#64748b', fontWeight: '700', marginBottom: '12px' }}>Student Review</h4>
                <p style={{ fontSize: '32px', color: '#ea580c', fontWeight: '900', margin: 0 }}>4.8</p>
              </div>

            </div>

          </div>
        </section>

        {/* SIGNIFICANT ASPECTS & DESCRIPTION SECTION */}
        <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '1140px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.2fr', gap: '48px', alignItems: 'center' }} className="aspects-grid">
              
              {/* Left Column: Copywriting */}
              <div style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0a2540', marginBottom: '24px', lineHeight: '1.3', fontFamily: 'var(--font-headings)' }}>
                  A Grade Tutor - One of the Best Assignment Help Websites For Excellent Expert Assistance
                </h2>
                <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
                  Academic demands are increasing as education evolves, prompting more students to seek personalized assignment help. Recent reports show that over half of higher education learners need help with assignments. 56% of students who used online assignment help reported better academic performance and reduced study stress. These figures reflect changing student behavior due to challenges such as subject confusion, knowledge gaps, and a lack of clarity.
                </p>
                <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: 0 }}>
                  Students are increasingly aware of when they need assignment help. Those in need benefit significantly from professional support, which reinforces knowledge and enables academic success. Assignment services reinforce knowledge, enabling students to master subjects and maintain excellent educational records. Whether burdened with heavy workloads or pursuing other interests, A Grade Tutor's service helps students excel and reach their academic goals.
                </p>
              </div>

              {/* Right Column: Aspects Card */}
              <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '24px', border: '1.5px solid #bae6fd', padding: '48px 36px', boxShadow: '0 10px 30px rgba(14,165,233,0.05)', position: 'relative' }}>
                <div style={{ display: 'inline-block', padding: '5px 14px', background: '#0c4a6e', color: '#e0f2fe', borderRadius: '100px', fontWeight: '800', fontSize: '10px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>
                  4 Significant Aspects of
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: '900', color: '#0f172a', marginBottom: '36px', fontFamily: 'var(--font-headings)' }}>
                  Assignment Help Service
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 20px' }} className="aspects-subgrid">
                  {[
                    {
                      num: 1,
                      title: 'Assured Quality',
                      avatar: '👩‍🎓',
                      bullets: ['100% task accuracy', 'Detailed explanations', 'Step-wise solutions']
                    },
                    {
                      num: 2,
                      title: 'Time Constraints',
                      avatar: '⏱️',
                      bullets: ['Quick turnover time', '24/7 expert guidance', 'On-time submission']
                    },
                    {
                      num: 3,
                      title: 'Uniqueness',
                      avatar: '🛡️',
                      bullets: ['Non plagiarized task', 'Personalized solutions', 'Multiple modifications']
                    },
                    {
                      num: 4,
                      title: 'Learning Scope',
                      avatar: '📚',
                      bullets: ['Thorough subject understanding', 'Cover knowledge gaps', 'Increased knowledge retention']
                    }
                  ].map((a, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'white', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.01)', textAlign: 'left' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f0f9ff', border: '1.5px solid #0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                          {a.avatar}
                        </div>
                        <span style={{ fontSize: '14.5px', fontWeight: '850', color: '#0f172a' }}>{a.title}</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {a.bullets.map((b, bIdx) => (
                          <div key={bIdx} style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '12px', color: '#475569', fontWeight: '600' }}>
                            <span style={{ color: '#10b981' }}>✓</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SUBJECTS & COUNTRIES SECTION */}
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '1140px', textAlign: 'left' }}>
            
            {/* Subjects Covered Fold */}
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#0a2540', marginBottom: '14px', fontFamily: 'var(--font-headings)' }}>
                Subjects Covered By A Grade Tutor Online Assignment Help Platform
              </h2>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '32px' }}>
                The platform uniquely matches each student with a subject-matter expert from its diverse network, covering more than 100 subjects. Students who need assignment help can opt for A Grade Tutor for subject-related tasks in STEM, commerce, management, nursing, and more. Assignment helpers provide assistance with coursework requirements and meet the distinct learning needs of students across all disciplines and academic levels.
              </p>

              {/* Table / Grid list */}
              <div style={{ border: '1.5px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.01)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', background: '#f8fafc', padding: '16px 24px', borderBottom: '1.5px solid #e2e8f0', fontWeight: '800', fontSize: '13.5px', color: '#0f172a' }} className="subject-table-header">
                  <span>Other Assignment Help</span>
                  <span>Topics</span>
                </div>
                {[
                  { sub: 'Math Assignment Help', topics: 'Geometry, Algebra, Calculus' },
                  { sub: 'Physics Assignment Help', topics: 'Gravity, Kinematics, vectors and Projectiles' },
                  { sub: 'Computer Science Assignment Help', topics: 'Coding, Python, R programming' },
                  { sub: 'Chemistry Assignment Help', topics: 'Organic, Inorganic, Ionic and Molecular Compounds' },
                  { sub: 'Economics Assignment Help', topics: 'Socio economic policy, Economic system, Online trading, and economic globalization' }
                ].map((row, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', padding: '16px 24px', borderBottom: idx === 4 ? 'none' : '1px solid #e2e8f0', fontSize: '13.5px', background: idx % 2 === 0 ? 'white' : '#fafbfc' }} className="subject-table-row">
                    <span 
                      onClick={() => handleScrollToSection('whatsapp-support-section')}
                      style={{ color: '#ea580c', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      {row.sub}
                    </span>
                    <span style={{ color: '#475569', fontWeight: '500' }}>{row.topics}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries Fold */}
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#0a2540', marginBottom: '14px', fontFamily: 'var(--font-headings)' }}>
                University Assignment Help For Students Across Different Countries
              </h2>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '32px' }}>
                From Europe to the Middle East, A Grade Tutor's "help me with assignment" service aids university students worldwide. Our team maintains a large, diverse international student base, including students from top institutions. They rely on guidance from our subject matter experts for any subject or academic level. Wherever you are in the world, this university assignment help supports you at your convenience. A Grade Tutor experts are dependable, guiding students to excel and distinguish themselves. We make it a priority to treat every student fairly and provide assistance even during off-hours.
              </p>

              {/* Countries Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="countries-grid">
                {[
                  { flag: '🇺🇸', place: 'USA', text: 'Best assignment help online in different parts of the USA' },
                  { flag: '🇦🇪', place: 'UAE', text: 'Writing assignment help for university students in the UAE' },
                  { flag: '🇬🇧', place: 'UK', text: 'Help with my assignment service for students from the UK' },
                  { flag: '🇦🇺', place: 'Australia', text: 'Best assignment help for university students in Australia' },
                  { flag: '🇬🇧', place: 'UK (Finance)', text: 'Pay for university assignment help for students in the UK' },
                  { flag: '🇸🇬', place: 'Singapore', text: '“Write my assignment” for college students from Singapore' }
                ].map((c, idx) => (
                  <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '28px' }}>{c.flag}</span>
                    <div>
                      <h5 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: '850', color: '#0f172a' }}>{c.place}</h5>
                      <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '500', lineHeight: '1.4' }}>{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Services vs Benefits Fold */}
            <div style={{ marginTop: '60px' }}>
              <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#0a2540', marginBottom: '14px', fontFamily: 'var(--font-headings)' }}>
                Other Services & Benefits
              </h2>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '32px' }}>
                We provide a comprehensive range of academic services designed to help you succeed in every subject. Review the services we offer along with their associated core learning benefits:
              </p>

              <div style={{ border: '1.5px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.01)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.3fr', background: '#f8fafc', padding: '16px 24px', borderBottom: '1.5px solid #e2e8f0', fontWeight: '800', fontSize: '13.5px', color: '#0f172a' }} className="subject-table-header">
                  <span>Other Services</span>
                  <span>Benefits</span>
                </div>
                {[
                  { service: 'Homework Help', benefits: 'Homework Helper From Top-Tier University' },
                  { service: 'Help in Essay', benefits: 'Commitment to Deadline' },
                  { service: 'Video Solutions', benefits: '65000+ subject experts' },
                  { service: 'Lab Report Writing', benefits: 'Round the clock service' },
                  { service: 'Live Sessions', benefits: 'Excellent concept clarity & doubt clearance' },
                  { service: 'Do My Math Homework', benefits: 'Affordable Services' }
                ].map((row, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 2.3fr', padding: '16px 24px', borderBottom: idx === 5 ? 'none' : '1px solid #e2e8f0', fontSize: '13.5px', background: idx % 2 === 0 ? 'white' : '#fafbfc' }} className="subject-table-row">
                    <span 
                      onClick={() => handleScrollToSection('whatsapp-support-section')}
                      style={{ color: '#ea580c', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      {row.service}
                    </span>
                    <span style={{ color: '#475569', fontWeight: '500' }}>{row.benefits}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>



        {/* WHY STUDENTS FEEL THE NEED & DETAILED COPYWRITING */}
        <section style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="container" style={{ maxWidth: '1140px', textAlign: 'left' }}>
            
            <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#0a2540', marginBottom: '14px', fontFamily: 'var(--font-headings)' }}>
              Why Students Feel the Need to Get Assignment Writing Help Online
            </h2>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
              The evolving academic environment has affected student learning in many ways. Now, they encounter new challenges. Higher student-to-tutor ratios, strict schedules, and complex coursework create learning difficulties.
            </p>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '32px' }}>
              Our team understands the obstacles students face in completing assignments. A Grade Tutor addresses these challenges by offering tailored solutions for issues such as insufficient knowledge, unclear assignment formats, and heavy workloads. Students overcome hurdles quickly with personalized help.
            </p>

            {/* Bullets List */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 32px', marginBottom: '60px' }} className="why-need-bullets">
              {[
                "Don't have enough knowledge about the assignment allotted to you.",
                "Copying from friends or classmates is not an option, as your original work could be detected and result in severe consequences for you.",
                "You do have a doubt about the topic of the assignment given to you.",
                "It's too much for you, as you have multiple other assignments to finish.",
                "You need expert assistance with the assignment because you don't have a clear understanding.",
                "For writing assignments, you know that your content quality will not be up to the mark for a higher score.",
                "You have other priorities like job, family, and passion. Not able to finish the assignment on time.",
                "Due to the restricted deadline, making an on-time submission is impossible.",
                "You can do your assignments, but you are unsure whether these solutions are correct.",
                "Offline personalized tuition from experts is too expensive."
              ].map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ea580c', marginTop: '6px', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '13.5px', color: '#475569', fontWeight: '500', lineHeight: '1.4' }}>{bullet}</span>
                </div>
              ))}
            </div>

            {/* What do students get */}
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '60px', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#0a2540', marginBottom: '14px', fontFamily: 'var(--font-headings)' }}>
                What Do Students Get From A Grade Tutor Assignment Help?
              </h2>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
                What do students get from online assignment help? This question often arises in students' minds. Let us look at the reasons that compel them to choose A Grade Tutor whenever they think, "Can I get help with my assignment?" or "Is there someone who can help with my assignment?"
              </p>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '0' }}>
                A Grade Tutor's "write my assignment for me" service becomes one of the best options for students seeking someone to "do my assignment for me." A Grade Tutor prioritizes customer satisfaction. When you sign up for A Grade Tutor online assignment help, you also sign up for the following benefits:
              </p>
            </div>

            {/* Detailed Sub Copywriting Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px 48px' }} className="detailed-copy-grid">
              {[
                {
                  title: 'A Grade Tutor Best Online Assignment Help - Quality Over Quantity',
                  desc: 'Studies have shown that online learning platforms are a valuable resource for students seeking help with assignments. However, it is not task completion that worries students; the quality is the biggest concern when they seek help with assignments. Team A Grade Tutor stands out from the crowd by focusing on the quality of assistance. Though the platform offers assignment help to many students, it never compromises on task quality. Our strong team of experts at A Grade Tutor, the online assignment helper, ensures that students receive high-quality guidance whenever they need help.'
                },
                {
                  title: 'Writing Assignment Help For On-time Submission',
                  desc: 'Students must adhere to their homework deadlines. Failing to do it on time can negatively impact their grades. But with extracurricular activities and multiple tasks, students often struggle to manage their study time and complete their assignments on schedule. One of the best things about opting for online assignment help is that it optimizes your time, boosting efficiency and reducing study stress. Through assignment writing help, you can stay relaxed knowing expert guidance is available whenever you need help.'
                },
                {
                  title: 'Online Assignment Writing For Better Research & Writing',
                  desc: 'While working on assignments, students often get stuck due to limited research and weak academic writing skills. Without a clear understanding of the subject and effective research methods, a logical presentation of ideas and support for arguments with evidence is not possible. A Grade Tutor\'s guidance helps to produce well-researched, clearly structured assignments. It demonstrates strong analysis and clarity. Your task becomes polished, leaving a long-lasting positive impression on readers.'
                },
                {
                  title: 'Help Me with Assignment - For Better Grades',
                  desc: 'A Grade Tutor\'s end-to-end expert support is built aiming to strengthen critical thinking, logical reasoning, and problem-solving skills in students. These abilities enable you to consistently put in the effort required to achieve top results. Your performance earns you strong academic grades, encouraging you to focus on improving to achieve long-term academic success. This dedication to make you stand out in the crowd establishes A Grade Tutor as one of the best assignment help providers in the EdTech industry.'
                },
                {
                  title: 'Assignment Writing Help For University Students',
                  desc: 'Expert assignment writers for university students bring deep subject knowledge and strong academic writing expertise to every task. By choosing our service, students receive guidance directly from qualified specialists with extensive experience and domain expertise. These professionals help students understand complex concepts, bridge knowledge gaps, and resolve doubts effectively, encouraging them to produce high-quality work. The quality support makes students feel confident about their choice.'
                },
                {
                  title: 'Original Work with online assignment solution',
                  desc: 'Schools and universities treat plagiarism as a serious academic offense. If a student is found to have submitted plagiarized work, institutions may take strict action. It could be lowering grades, requiring resubmission, or imposing other academic penalties. Our online homework help platform ensures that every project delivered is completely plagiarism-free. Experts adhere to strict originality standards, ensuring that students can submit their work with confidence without worrying about plagiarism.'
                }
              ].map((item, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '24px' }}>
                  <h4 style={{ fontSize: '16.5px', fontWeight: '850', color: '#0f172a', marginBottom: '12px', lineHeight: '1.4' }}>{item.title}</h4>
                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FAQS ACCORDION SECTION */}
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
          <div className="container" style={{ maxWidth: '840px', textAlign: 'left' }}>
            
            <h2 style={{ fontSize: '28px', fontWeight: '950', color: '#0a2540', marginBottom: '20px', fontFamily: 'var(--font-headings)', textAlign: 'center' }}>
              Online Assignment Help: Frequently Asked Questions
            </h2>

            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '18px' }}>
              A Grade Tutor serves students through its strong network of experienced subject specialists, including 800+ Ph.D. holders. The platform is dedicated to meeting students' diverse academic requirements. This commitment helped our site gain popularity. It is now one of the best choices for students due to its quality, affordability, on-time service, and excellent after-sales support.
            </p>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '32px' }}>
              We often hear questions like, "Can I get assignment online help 24/7? Or is it possible to get personalized assignment help online from experts?" Our answer is Yes! It doesn't matter when you seek help or where you're from; we are always ready to offer students the guidance they need, including affordable assignment help that suits every budget. If you have similar questions, see the FAQs below. We hope these will help you stay informed and make a conscious decision.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              {/* FAQ Item 1 (Always Visible) */}
              <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '24px' }}>
                <h4 style={{ fontSize: '16.5px', fontWeight: '850', color: '#0f172a', marginBottom: '10px', lineHeight: '1.4' }}>
                  Can I pay someone to write my assignment?
                </h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                  Yes. It's possible to pay someone to write your homework if you search online. You will find some companies offering assignment assistance. You can reach out to them and ask them to do your assignment. You just have to pay for the service, and the website will assign an expert to complete your task.
                </p>
              </div>

              {/* Collapsible area for FAQs 2, 3, 4 */}
              {isReadMoreExpanded && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', animation: 'fadeIn 0.3s ease' }}>
                  
                  {/* FAQ Item 2 */}
                  <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '24px' }}>
                    <h4 style={{ fontSize: '16.5px', fontWeight: '850', color: '#0f172a', marginBottom: '10px', lineHeight: '1.4' }}>
                      What does assignment help mean?
                    </h4>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      The term "Assignment help" refers to a service that provides support in completing academic coursework. It can be anything, from assignment assistance online to assignment completion. This help with assignment online aims to support students in achieving better performance & achieve higher grades.
                    </p>
                  </div>

                  {/* FAQ Item 3 */}
                  <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '24px' }}>
                    <h4 style={{ fontSize: '16.5px', fontWeight: '850', color: '#0f172a', marginBottom: '10px', lineHeight: '1.4' }}>
                      Is assignment help legal?
                    </h4>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Assignment services are not considered legal services by some universities, as students often copy-paste answers rather than understand the solutions provided by assignment help services. Professional assignment help services do so by guiding students in understanding problem-solving approaches and enhancing their conceptual clarity.
                    </p>
                  </div>

                  {/* FAQ Item 4 */}
                  <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '24px' }}>
                    <h4 style={{ fontSize: '16.5px', fontWeight: '850', color: '#0f172a', marginBottom: '10px', lineHeight: '1.4' }}>
                      What is online assignment help?
                    </h4>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Online assignment help is an academic help service that completes assignments and provides solutions to students. It helps students improve their performance and overcome study struggles by preparing them academically with expert help.
                    </p>
                  </div>

                </div>
              )}

            </div>

            {/* Read More / Less Toggle Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <button
                onClick={() => setIsReadMoreExpanded(!isReadMoreExpanded)}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #ea580c',
                  color: '#ea580c',
                  borderRadius: '8px',
                  padding: '10px 24px',
                  fontSize: '14.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(234,88,12,0.08)'
                }}
                className="read-more-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fff7ed';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                }}
              >
                {isReadMoreExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>

          </div>
        </section>

        {/* BOTTOM CTA BAR / BANNER */}
        <section style={{ padding: '60px 0', backgroundColor: '#0a2540', textAlign: 'center', color: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '700px' }}>
            <h2 style={{ fontSize: '32px', color: '#ffffff', fontWeight: '950', marginBottom: '16px', fontFamily: 'var(--font-headings)' }}>Struggling with Assignments?</h2>
            <p style={{ fontSize: '15px', color: '#cbd5e1', marginBottom: '28px', lineHeight: '1.6' }}>
              Connect with our academic coordinator panel instantly on WhatsApp. PhD experts are ready to take your task.
            </p>
            <a 
              href={`https://wa.me/919429379139?text=${encodeURIComponent('Hi! I need help with my online assignment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn pulse-animation"
              style={{ backgroundColor: '#22c55e', color: '#ffffff', padding: '14px 36px', fontSize: '15px', fontWeight: '800', borderRadius: '100px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3)' }}
            >
              Connect on WhatsApp Now
            </a>
          </div>
        </section>

        {/* CSS rules for local media adjustments */}
        <style>{`
          @media (max-width: 768px) {
            .stats-box-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .stats-box-grid div {
              border-left: none !important;
              border-right: none !important;
              border-bottom: 1.5px solid #fed7aa;
              padding-bottom: 16px;
            }
            .stats-box-grid div:last-child {
              border-bottom: none !important;
              padding-bottom: 0;
            }
            .whatsapp-box-grid {
              grid-template-columns: 1fr !important;
            }
            .whatsapp-box-grid div:first-child {
              border-right: none !important;
              border-bottom: 1.5px solid #e2e8f0;
            }
            .freebies-grid {
              grid-template-columns: 1fr !important;
            }
            .reviews-cards-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 16px !important;
            }
            .works-grid, .aspects-grid, .subject-table-header, .subject-table-row, .countries-grid, .why-need-bullets, .detailed-copy-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
            .subject-table-header {
              display: none !important;
            }
            .subject-table-row {
              grid-template-columns: 1fr !important;
              gap: 4px !important;
              padding: 12px 16px !important;
            }
            .aspects-subgrid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
          }
          @media (max-width: 480px) {
            .reviews-cards-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="service-page">
      {/* Hero Section with Quick Form */}
      <section className="hero-section" style={{ padding: '60px 0', background: 'radial-gradient(circle at 90% 10%, rgba(99, 102, 241, 0.06) 0%, transparent 65%)' }}>
        <div className="container grid-cols-2" style={{ alignItems: 'center' }}>
          
          {/* Left Hero Text Column */}
          <div>
            <span 
              onClick={() => setCurrentPage('home')} 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-purple)', cursor: 'pointer', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}
            >
              ← Back to Homepage
            </span>
            <h1 style={{ fontSize: '42px', marginBottom: '16px', lineHeight: '1.2' }}>
              {config.title}
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--primary)', fontWeight: '600', marginBottom: '16px' }}>
              {config.subheading}
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
              {config.heroText}
            </p>

            <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
              <div>
                <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)' }}>4.9/5 Rating</span>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Based on student feedback</p>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-color)', height: '40px' }}></div>
              <div>
                <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)' }}>100% Unique</span>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Turnitin report verified</p>
              </div>
            </div>
          </div>

          {/* Right Hero Form Column */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: '440px', padding: '36px', border: '1.5px solid var(--border-color)', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', background: '#ffffff' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary)', marginBottom: '4px' }}>Get Your {config.title} Quote</h3>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Direct WhatsApp match with PhD tutors</p>
              </div>

              <form onSubmit={handleOrderSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '13px', color: '#475569', fontWeight: '700', display: 'block' }}>Select Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="creative-input"
                    style={{
                      padding: '10px 14px',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23334155' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      backgroundSize: '14px',
                      paddingRight: '36px'
                    }}
                  >
                    {subjectsList.map((sub, idx) => <option key={idx} value={sub}>{sub}</option>)}
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '13px', color: '#475569', fontWeight: '700', display: 'block' }}>Topic / Guidelines</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Linear regression analysis worksheet"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                    required
                    className="creative-input"
                    style={{ padding: '10px 14px' }}
                  />
                </div>

                <div className="grid-cols-2" style={{ gap: '14px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '13px', color: '#475569', fontWeight: '700', display: 'block' }}>Deadline</label>
                    <input 
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                      required
                      className="creative-input"
                      style={{ padding: '10px 14px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '13px', color: '#475569', fontWeight: '700', display: 'block' }}>Budget Limit (₹)</label>
                    <input 
                      type="number"
                      placeholder="e.g. 1500"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      required
                      className="creative-input"
                      style={{ padding: '10px 14px' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '13px', color: '#475569', fontWeight: '700', display: 'block' }}>Specific Instructions</label>
                  <textarea 
                    rows="2"
                    placeholder="Describe specific questions or guidelines..."
                    value={formData.instructions}
                    onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                    className="creative-input"
                    style={{ padding: '10px 14px', resize: 'vertical', minHeight: '60px' }}
                  />
                </div>

                 <button 
                  type="submit" 
                  className="btn pulse-animation" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: '14px 0', 
                    fontSize: '15px', 
                    fontWeight: '700', 
                    borderRadius: '100px', 
                    backgroundColor: isSubmitting ? '#4b5563' : '#22c55e', 
                    color: 'white',
                    border: 'none',
                    boxShadow: isSubmitting ? 'none' : '0 8px 20px rgba(34, 197, 94, 0.25)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginTop: '8px'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="spinning-loader" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)"></circle>
                        <path d="M4 12a8 8 0 0 1 8-8"></path>
                      </svg>
                      Connecting to WhatsApp...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
                      </svg>
                      Get Free Quote on WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Why Need Service Section */}
      {config.whyNeedHelp && (
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div className="container">
            <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '24px' }}>
              {config.whyNeedHelp.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '800px', margin: '0 auto 48px', textAlign: 'center', lineHeight: '1.7' }}>
              {config.whyNeedHelp.desc}
            </p>

            <div className="grid-cols-3">
              {config.whyNeedHelp.points.map((pt, idx) => (
                <div key={idx} className="glass-card" style={{ borderLeft: '4px solid var(--accent-purple)', background: 'var(--bg-secondary)' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '10px', fontWeight: '800' }}>{pt.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>{pt.text || pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sub-Topics Covered Section */}
      {config.subTopics && (
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '16px' }}>
              Topics & Modules We Cover in {config.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '650px', margin: '0 auto 48px', textAlign: 'center' }}>
              Our academic experts are qualified to provide step-by-step solutions for the following core subject areas:
            </p>
            
            <div className="grid-cols-3">
              {config.subTopics.map((topic, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', background: 'var(--bg-secondary)' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-purple)' }}>●</span> {topic.name}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                    {topic.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '48px' }}>
            Why Choose A Grade Tutor for {config.title}?
          </h2>
          
          <div className="grid-cols-3">
            {config.benefits.map((benefit, idx) => (
              <div key={idx} className="glass-card" style={{ background: '#ffffff' }}>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '12px', color: 'var(--accent-purple)' }}>✓</span>
                <h3 style={{ fontSize: '16px', marginBottom: '8px', fontWeight: '800' }}>{benefit.title}</h3>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works row */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '48px' }}>How to Order {config.title}</h2>
          
          <div className="grid-cols-3">
            <div className="glass-card" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
              <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', fontWeight: '800', margin: '0 auto 16px' }}>1</div>
              <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Submit details online</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>Fill our quick query box with subjects, deadline, and target grade parameters.</p>
            </div>
            
            <div className="glass-card" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
              <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--whatsapp-green)', color: 'white', fontWeight: '800', margin: '0 auto 16px' }}>2</div>
              <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Confirm Quote on WhatsApp</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>Open chat in one click. Discuss pricing quotes and upload files directly to coordinators.</p>
            </div>
            
            <div className="glass-card" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
              <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-purple)', color: 'white', fontWeight: '800', margin: '0 auto 16px' }}>3</div>
              <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Get Solutions PDF</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>Review correct, step-by-step solutions delivered to your WhatsApp chat box.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS for specific service */}
      {config.faqs && (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>
              Frequently Asked Questions: {config.title}
            </h2>

            <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {config.faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="faq-item" 
                  style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', overflow: 'hidden' }}
                >
                  <div 
                    className="faq-question" 
                    onClick={() => handleFaqToggle(index)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', cursor: 'pointer', fontWeight: '600', fontSize: '15px' }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', fontSize: '16px', color: 'var(--primary)' }}>
                      ▼
                    </span>
                  </div>
                  
                  {activeFaq === index && (
                    <div className="faq-answer" style={{ padding: '0 24px 20px', fontSize: '13px', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '15px', background: '#fafbfc' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="gradient-bg" style={{ padding: '70px 0', textAlign: 'center', color: 'white' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '36px', color: 'white', marginBottom: '16px' }}>Need Help with {config.title}?</h2>
          <p style={{ fontSize: '15px', opacity: '0.9', marginBottom: '28px' }}>
            Send your task details now. Connect with a specialized coordinator on WhatsApp in minutes.
          </p>
          <a 
            href={`https://wa.me/919429379139?text=${encodeURIComponent(config.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp pulse-animation"
            style={{ padding: '12px 36px', fontSize: '15px' }}
          >
            Connect on WhatsApp Now
          </a>
        </div>
      </section>
    </div>
  );
}
