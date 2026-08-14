import React, { useState, useEffect } from 'react';

const renderSubjectIcon = (type, color) => {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: color,
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
    flexShrink: 0
  };
  
  switch(type) {
    case 'code':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      );
    case 'terminal':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      );
    case 'book':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
      );
    case 'calculator':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <line x1="8" y1="6" x2="16" y2="6"></line>
            <line x1="16" y1="14" x2="16" y2="18"></line>
            <line x1="16" y1="10" x2="16" y2="10"></line>
            <line x1="12" y1="10" x2="12" y2="10"></line>
            <line x1="8" y1="10" x2="8" y2="10"></line>
            <line x1="12" y1="14" x2="12" y2="14"></line>
            <line x1="8" y1="14" x2="8" y2="14"></line>
            <line x1="12" y1="18" x2="12" y2="18"></line>
            <line x1="8" y1="18" x2="8" y2="18"></line>
          </svg>
        </div>
      );
    case 'flask':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3h12"></path>
            <path d="M12 3v6"></path>
            <path d="M8.5 9h7"></path>
            <path d="M16 10a7 7 0 0 1 4 5.9v2.1A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2v-2.1a7 7 0 0 1 4-5.9V3h8"></path>
          </svg>
        </div>
      );
    case 'briefcase':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
      );
    case 'chart':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </div>
      );
    case 'gear':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      );
    case 'trending':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        </div>
      );
    case 'atom':
      return (
        <div style={baseStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12a15.3 15.3 0 0 1 10-4 15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4z"></path>
          </svg>
        </div>
      );
    default:
      return <div style={baseStyle}>📚</div>;
  }
};

const chatSessions = [
  {
    subject: 'Calculus',
    onlineCount: '2,451 Tutors Online Now',
    messages: [
      { sender: 'tutor', text: 'Hi! I can help you with calculus problems. What specific topic are you working on?' },
      { sender: 'student', text: 'Derivatives and chain rule' },
      { sender: 'tutor', text: "Sure! Let's find the derivative of f(x) = ln(3x^2 + 5x). Ready for the step-by-step breakdown?" },
      { sender: 'student', text: 'Yes, please!' }
    ]
  },
  {
    subject: 'Python Programming',
    onlineCount: '1,894 Tutors Online Now',
    messages: [
      { sender: 'tutor', text: 'Hello! I specialize in Python programming and databases. How can I help you today?' },
      { sender: 'student', text: 'I need to write a SQL query to find second highest salary.' },
      { sender: 'tutor', text: "Great! You can use: SELECT MAX(Salary) FROM Employee WHERE Salary < (SELECT MAX(Salary) FROM Employee)." },
      { sender: 'student', text: 'Wow, that is so simple! Thank you!' }
    ]
  },
  {
    subject: 'Essay Writing',
    onlineCount: '3,102 Tutors Online Now',
    messages: [
      { sender: 'tutor', text: 'Hey! Need assistance with your essay formatting or proofreading?' },
      { sender: 'student', text: 'Yes, need to format my sociology paper in APA style.' },
      { sender: 'tutor', text: "I can align all citations, references list, cover page, and abstract margins according to APA 7th edition. Let's get started!" },
      { sender: 'student', text: 'Perfect, let me upload my draft.' }
    ]
  }
];

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


export default function LandingPage({ setCurrentPage }) {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [activeSessionIdx, setActiveSessionIdx] = useState(0);
  const [visibleMessagesCount, setVisibleMessagesCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let t1, t2, t3, t4, t5;

    // student response 1
    t1 = setTimeout(() => {
      setVisibleMessagesCount(2);
    }, 1800);

    // tutor typing indicator starts
    t2 = setTimeout(() => {
      setIsTyping(true);
    }, 3200);

    // tutor message 2 appears
    t3 = setTimeout(() => {
      setIsTyping(false);
      setVisibleMessagesCount(3);
    }, 4800);

    // student response 2
    t4 = setTimeout(() => {
      setVisibleMessagesCount(4);
    }, 6400);

    // Cycle to next session
    t5 = setTimeout(() => {
      setVisibleMessagesCount(1);
      setIsTyping(false);
      setActiveSessionIdx((prev) => (prev + 1) % chatSessions.length);
    }, 11000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [activeSessionIdx]);

  
  // WhatsApp Support Widget State
  const [whatsAppNum, setWhatsAppNum] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+1');

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

  // Quick Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    subject: 'Mathematics',
    topic: '',
    deadline: '',
    budget: '',
    grade: 'A+ Grade',
    instructions: '',
    customSubject: '',
  });

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const subjectsList = [
    'Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Mechanical Engineering',
    'Electrical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Biology',
    'Economics', 'Finance & Accounting', 'Business Statistics', 'Essay Writing', 'English Literature', 'Other'
  ];

  const stats = [
    { value: '4.9/5', label: 'Average Student Rating', icon: '★' },
    { value: '25,000+', label: 'Assignments Delivered', icon: '✓' },
    { value: '500+', label: 'PhD Subject Experts', icon: '🎓' },
    { value: '15 Mins', label: 'Average Response Time', icon: '⚡' },
  ];

  const trustReasons = [
    {
      title: 'Experienced tutors across 100+ subjects',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      ),
      bgColor: '#3b82f6', // Blue
    },
    {
      title: 'On-time delivery guaranteed',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      bgColor: '#10b981', // Emerald Green
    },
    {
      title: '100% plagiarism-free solutions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      bgColor: '#a855f7', // Purple
    },
    {
      title: 'Free revisions until satisfaction',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        </svg>
      ),
      bgColor: '#f97316', // Orange
    },
    {
      title: 'Complete confidentiality',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      bgColor: '#ef4444', // Red
    },
    {
      title: 'Real tutors, real solutions — no AI-generated content',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      bgColor: '#6366f1', // Violet
    }
  ];

  const services = [
    {
      title: 'Assignment Help',
      slug: 'assignment',
      desc: 'Get step-by-step explanations and verified correct solutions for complex assignments across all engineering branches, math, sciences, and humanities.',
      tag: 'Most Popular',
    },
    {
      title: 'Essay Writing',
      slug: 'essay-writing',
      desc: 'Stunning reports, essay compositions, thesis drafts, research paper segments, and custom formatting with a strict zero-plagiarism policy.',
      tag: 'Top Quality',
    },
    {
      title: 'Lab Report Help',
      slug: 'lab-report',
      desc: 'Expert support for physics, chemistry, biology, and engineering lab calculations, graphs, MATLAB, circuit designs, and analysis summaries.',
      tag: 'Technical Help',
    },
    {
      title: 'Project Report Help',
      slug: 'project-report',
      desc: 'Comprehensive project files, code summaries, engineering layouts, CAD models, and research briefs prepared professionally.',
      tag: 'Bestseller',
    },
    {
      title: 'Presentation Writing',
      slug: 'presentation-writing',
      desc: 'Visually compelling PowerPoint slides, speech transcripts, pitch decks, and slide design aligned with your professor instructions.',
      tag: 'Creative',
    },
    {
      title: 'Online Tutoring',
      slug: 'online-tutoring',
      desc: 'One-on-one virtual interactive mentor sessions held on Zoom/Google Meet, or text explanations directly on WhatsApp to guide you through topics.',
      tag: 'Live Now',
    },
    {
      title: 'Video Solutions',
      slug: 'video-solution',
      desc: 'Step-by-step screen recordings where our experts walk through math calculations, code execution, or mechanical formulas.',
      tag: 'Visual Help',
    },
    {
      title: 'Write my Research Paper',
      slug: 'write-my-research-paper',
      desc: 'Advanced research layouts, methodology definitions, results formatting, data analytics, and reference bibliography styling (APA/MLA).',
      tag: 'PhD Writers',
    },
    {
      title: 'Dissertation Writing',
      slug: 'dissertation-writing',
      desc: 'Long-form thesis support, research models, literature reviews, abstract creation, and formatting checks from experienced academic editors.',
      tag: 'Academic Special',
    },
    {
      title: 'Do my Homework',
      slug: 'do-my-homework',
      desc: 'Daily homework worksheets, quizzes preparations, exercises, textbook chapter questions answered with neat descriptions.',
      tag: 'Fast Turnaround',
    },
    {
      title: 'Do my Assignment',
      slug: 'do-my-assignment',
      desc: 'Term assignments, mid-semester code tasks, lab models, and case studies resolved immediately by certified active educators.',
      tag: '24/7 Support',
    },
    {
      title: 'Thesis Writing',
      slug: 'thesis-writing',
      desc: 'Postgraduate and PhD thesis templates, data collection, mathematical modeling, and final editing reviews.',
      tag: 'Expert Grade',
    }
  ];

  const subjectCategories = [
    { name: 'Computer Science', suffix: 'Assignment Help', icon: 'code', color: '#6366f1' },
    { name: 'Programming', suffix: 'Assignment Help', icon: 'terminal', color: '#10b981' },
    { name: 'Accounting', suffix: 'Assignment Help', icon: 'book', color: '#a855f7', highlighted: true },
    { name: 'Mathematics', suffix: 'Assignment Help', icon: 'calculator', color: '#ec4899' },
    { name: 'Chemical Engineering', suffix: 'Assignment Help', icon: 'flask', color: '#059669' },
    { name: 'Management', suffix: 'Assignment Help', icon: 'briefcase', color: '#7c3aed' },
    { name: 'Statistics', suffix: 'Assignment Help', icon: 'chart', color: '#3b82f6' },
    { name: 'Engineering', suffix: 'Assignment Help', icon: 'gear', color: '#4b5563' },
    { name: 'Economics', suffix: 'Assignment Help', icon: 'trending', color: '#ea580c' },
    { name: 'Physics', suffix: 'Assignment Help', icon: 'atom', color: '#0ea5e9' },
    { name: 'Finance', suffix: 'Assignment Help', icon: 'book', color: '#ef4444' },
    { name: 'Coding', suffix: 'Assignment Help', icon: 'code', color: '#2563eb' },
    { name: 'Software', suffix: 'Assignment Help', icon: 'code', color: '#8b5cf6' }
  ];

  const faqData = [
    {
      q: 'How does A Grade Tutor help me get solutions on WhatsApp?',
      a: 'It is very simple! You fill out your assignment instructions in the form on our page. The website packages your details into a structured text and prompts you to open WhatsApp. Once in chat with our coordinator, you send your PDF files, get a quick budget quote, make a payment, and receive step-by-step correct answers directly in WhatsApp.'
    },
    {
      q: 'Can I send file attachments (like PDFs and images) for my homework?',
      a: 'Yes! After you submit your request form, you will be redirected to our WhatsApp line where you can drag-and-drop or upload all assignment sheets, textbook screenshots, templates, or files directly.'
    },
    {
      q: 'Are the solutions provided plagiarism-free?',
      a: 'Absolutely. All solutions are written from scratch by subject experts. We have a strict zero-plagiarism policy. Tutors write out step-by-step derivations or explanations so you can easily understand and review the homework.'
    },
    {
      q: 'How long does it take to get a budget quote and tutor match?',
      a: 'Our WhatsApp academic coordinators are online 24/7. Typically, you will receive a quote and match with a PhD-level subject expert within 5 to 15 minutes of sending your details on WhatsApp.'
    },
    {
      q: 'What is the refund policy if the answer is incorrect?',
      a: 'We guarantee 100% correct answers. If the solution does not match your parameters or guidelines, you can request edits or revisions. In the rare case of incorrect outcomes, our coordinators handle UPI refunds directly.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      uni: 'University of Texas',
      text: 'A Grade Tutor is incredibly fast and reliable. Sending assignments and getting PDFs directly on WhatsApp saves so much time during busy exam weeks!',
      subject: 'Computer Science',
    },
    {
      name: 'Manish Kumar',
      uni: 'BITS Pilani',
      text: 'The step-by-step calculations for my mechanical engineering thermodynamics report were perfect. Very professional tutors.',
      subject: 'Mechanical Engineering',
    },
    {
      name: 'Ashley R.',
      uni: 'Melbourne Uni',
      text: 'My macroeconomics essay was formatted perfectly according to APA guidelines. Plagiarism check was clean too.',
      subject: 'Economics & Writing',
    },
  ];

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

  const handleServiceClick = (slug) => {
    setCurrentPage(`service-${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!formData.topic || !formData.deadline) {
      alert('Please fill out all required fields.');
      return;
    }

    const newId = `AGT-${Math.floor(1000 + Math.random() * 9000)}`;
    const attachedFilesText = selectedFiles.length > 0 
      ? selectedFiles.map(f => f.name).join(', ') 
      : 'None (will upload in chat)';

    const waMessage = `*New Homework Inquiry (A Grade Tutor)*\n\n` +
      `📌 *Order Ref:* ${newId}\n` +
      `📚 *Subject:* ${formData.subject === 'Other' ? formData.customSubject || 'Other' : formData.subject}\n` +
      `📝 *Topic/Title:* ${formData.topic}\n` +
      `⏱ *Deadline:* ${formData.deadline}\n` +
      (formData.budget ? `💰 *Estimated Budget:* ₹${formData.budget}\n` : '') +
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
        customSubject: '',
      });
      window.location.href = waUrl;
    }, 800);
  };

  const handleFaqToggle = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="landing-page">
      
      <style>{`
        @keyframes pulse-green {
          0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        @keyframes premium-gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-badge {
          0% { transform: translateY(0px); box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4); }
          50% { transform: translateY(-6px); box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.6); }
          100% { transform: translateY(0px); box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4); }
        }
        .shadcn-card {
          width: 100%;
          max-width: 440px;
          padding: 36px;
          border: 1px solid #e4e4e7;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
          text-align: left;
        }
        .shadcn-title {
          font-size: 20px;
          font-weight: 800;
          color: #09090b;
          margin-bottom: 6px;
          letter-spacing: -0.5px;
          font-family: var(--font-headings);
          text-align: center;
        }
        .shadcn-desc {
          font-size: 12.5px;
          color: #71717a;
          margin-bottom: 24px;
          text-align: center;
        }
        .shadcn-label {
          font-size: 13px;
          font-weight: 600;
          color: #09090b;
          margin-bottom: 6px;
          display: block;
        }
        .shadcn-input {
          height: 42px;
          width: 100%;
          border-radius: 6px;
          border: 1px solid #e4e4e7;
          background-color: #ffffff;
          padding: 8px 14px;
          font-size: 13.5px;
          color: #09090b;
          outline: none;
          transition: all 0.15s ease-in-out;
          box-sizing: border-box;
        }
        .shadcn-input:focus {
          border-color: #09090b !important;
          box-shadow: 0 0 0 2px rgba(9, 9, 11, 0.08) !important;
        }
        .shadcn-select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 14px;
          padding-right: 40px !important;
        }
        .shadcn-textarea {
          width: 100%;
          border-radius: 6px;
          border: 1px solid #e4e4e7;
          background-color: #ffffff;
          padding: 10px 14px;
          font-size: 13.5px;
          color: #09090b;
          outline: none;
          transition: all 0.15s ease-in-out;
          box-sizing: border-box;
          font-family: inherit;
        }
        .shadcn-textarea:focus {
          border-color: #09090b !important;
          box-shadow: 0 0 0 2px rgba(9, 9, 11, 0.08) !important;
        }
        .shadcn-btn {
          height: 44px;
          width: 100%;
          border-radius: 6px;
          background-color: #09090b;
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
          border: none;
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          margin-top: 8px;
          box-shadow: 0 4px 12px rgba(9, 9, 11, 0.15);
        }
        .shadcn-btn:hover {
          background-color: #27272a;
          transform: translateY(-1px);
        }
      `}</style>

      {/* Hero Section with Embedded Form */}
      <section className="hero-section" style={{ padding: '80px 0', background: 'radial-gradient(circle at 90% 10%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)' }}>
        <div className="container grid-cols-2" style={{ alignItems: 'center' }}>
          
          {/* Hero text panel */}
          <div>
            <div 
              className="hero-floating-proof" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: '#ecfdf5', 
                border: '1.5px solid #10b981', 
                color: '#047857', 
                padding: '6px 16px', 
                borderRadius: '100px', 
                fontWeight: '700', 
                fontSize: '12.5px', 
                marginBottom: '28px',
                boxShadow: '0 2px 10px rgba(16, 185, 129, 0.08)'
              }}
            >
              <span 
                className="live-dot" 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  backgroundColor: '#10b981', 
                  borderRadius: '50%', 
                  display: 'inline-block',
                  animation: 'pulse-green 2s infinite'
                }}
              ></span> 
              <span>2,451 Verified Tutors Online Now</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <div style={{ background: '#faf5ff', border: '1px solid #d8b4fe', color: '#6b21a8', padding: '6px 16px', borderRadius: '100px', fontWeight: '750', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ⭐ 4.9/5 Student Rating
              </div>
              <div style={{ background: '#f0fdfa', border: '1px solid #99f6e4', color: '#115e59', padding: '6px 16px', borderRadius: '100px', fontWeight: '750', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                👥 50K+ Happy Learners
              </div>
              <div style={{ background: '#fff7ed', border: '1px solid #ffedd5', color: '#ea580c', padding: '6px 16px', borderRadius: '100px', fontWeight: '750', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ⚡ Instant Response Match
              </div>
            </div>

            <h1 style={{ fontSize: '48px', lineHeight: '1.12', marginBottom: '20px', letterSpacing: '-1.5px', color: '#0a2540', fontFamily: 'var(--font-headings)' }}>
              Master Your Coursework <br />
              With <span style={{ color: '#ea580c' }}>1-on-1 Expert Support</span>
            </h1>
            
            <p style={{ fontSize: '16px', color: '#475569', marginBottom: '36px', maxWidth: '520px', lineHeight: '1.65', fontWeight: '500' }}>
              Transform your learning experience with step-by-step homework help, detailed concept explanations, and 24/7 direct guidance on WhatsApp.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button 
                onClick={() => handleScrollToSection('get-quote')} 
                className="btn btn-primary"
                style={{ fontSize: '15px', padding: '14px 32px', backgroundColor: '#0a2540', border: 'none', borderRadius: '8px', fontWeight: '800', color: 'white', cursor: 'pointer', boxShadow: '0 8px 20px rgba(10,37,64,0.15)' }}
              >
                Get Free Quote Now →
              </button>
              <a 
                href="https://wa.me/919429379139?text=Hi%20A%20Grade%20Tutor%2C%20I%20need%20academic%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp pulse-animation"
                style={{ fontSize: '15px', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
                </svg>
                Connect on WhatsApp
              </a>
            </div>

            <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid #e2e8f0', paddingTop: '28px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '750', color: '#64748b' }}>
                <span style={{ fontSize: '16px', color: '#ea580c' }}>✓</span> 100% Plagiarism Free
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '750', color: '#64748b' }}>
                <span style={{ fontSize: '16px', color: '#ea580c' }}>✓</span> Verified PhD Experts
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '750', color: '#64748b' }}>
                <span style={{ fontSize: '16px', color: '#ea580c' }}>✓</span> 24/7 Instant Match
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '750', color: '#64748b' }}>
                <span style={{ fontSize: '16px', color: '#ea580c' }}>✓</span> No AI Generated Content
              </div>
            </div>
          </div>

          {/* Compact Form Panel (A Grade Tutor top-fold widget) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="shadcn-card" style={{ 
              width: '100%', 
              maxWidth: '480px', 
              padding: '32px', 
              border: '1px solid #e4e4e7', 
              borderRadius: '24px', 
              background: '#ffffff',
              boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.12), 0 1px 3px rgba(0, 0, 0, 0.02)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              
              {/* Top graduation cap pill badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f5f3ff', border: '1px solid #ddd6fe', color: '#6d28d9', padding: '5px 14px', borderRadius: '100px', fontSize: '11px', fontWeight: '750', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px' }}>🎓</span> PhD Experts. Real Help. Fast.
              </div>

              {/* Header Grid: Text and 3D books image */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '26px', fontWeight: '900', color: '#09090b', marginBottom: '6px', lineHeight: '1.25', letterSpacing: '-0.8px', fontFamily: 'var(--font-headings)' }}>
                    Get Your <br />
                    <span style={{ background: 'linear-gradient(90deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Homework Help Quote</span>
                  </h3>
                  <p style={{ fontSize: '13px', color: '#71717a', margin: 0, fontWeight: '500' }}>
                    Direct <span style={{ color: '#22c55e', fontWeight: '700' }}>WhatsApp</span> match with PhD tutors
                  </p>
                </div>
                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                  <img 
                    src="/books_grad_cap_3d.jpg" 
                    alt="Academic Support" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                  {/* WhatsApp bubble overlay */}
                  <div style={{ position: 'absolute', bottom: '2px', right: '-2px', background: '#22c55e', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(34,197,94,0.35)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
                    </svg>
                  </div>
                </div>
              </div>

              <form onSubmit={handleOrderSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Select Subject */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '6px', background: '#f5f3ff', color: '#6d28d9', fontSize: '13px' }}>📖</span>
                    <label className="shadcn-label" style={{ margin: 0, fontWeight: '700', fontSize: '13.5px' }}>Select Subject</label>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '4px', background: '#f3e8ff', color: '#6d28d9', fontSize: '12px', fontWeight: '800', pointerEvents: 'none' }}>
                      {formData.subject === 'Mathematics' ? '√x' : formData.subject === 'Computer Science' ? '💻' : formData.subject === 'Essay Writing' ? '✍️' : formData.subject === 'Physics' ? '🧪' : '📚'}
                    </span>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="shadcn-input shadcn-select"
                      style={{ paddingLeft: '44px', border: '1px solid #ddd6fe', background: '#ffffff', borderRadius: '8px' }}
                    >
                      {subjectsList.map((sub, idx) => <option key={idx} value={sub}>{sub}</option>)}
                    </select>
                  </div>
                  {formData.subject === 'Other' && (
                    <div style={{ marginTop: '12px', position: 'relative' }}>
                      <input 
                        type="text" 
                        placeholder="Please specify your subject"
                        value={formData.customSubject}
                        onChange={(e) => setFormData({...formData, customSubject: e.target.value})}
                        required
                        className="shadcn-input"
                        style={{ paddingLeft: '14px', border: '1px solid #e4e4e7', borderRadius: '8px' }}
                      />
                    </div>
                  )}
                </div>

                {/* Topic / Guidelines */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '6px', background: '#ecfdf5', color: '#059669', fontSize: '13px' }}>📝</span>
                    <label className="shadcn-label" style={{ margin: 0, fontWeight: '700', fontSize: '13.5px' }}>Topic / Guidelines</label>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      placeholder="e.g. Linear regression analysis worksheet"
                      value={formData.topic}
                      onChange={(e) => setFormData({...formData, topic: e.target.value})}
                      required
                      className="shadcn-input"
                      style={{ paddingLeft: '14px', paddingRight: '40px', border: '1px solid #e4e4e7', borderRadius: '8px' }}
                    />
                    <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '15px', color: '#10b981', pointerEvents: 'none' }}>📄</span>
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '6px', background: '#fff5f5', color: '#e11d48', fontSize: '13px' }}>📅</span>
                    <label className="shadcn-label" style={{ margin: 0, fontWeight: '700', fontSize: '13.5px' }}>Deadline</label>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                      required
                      className="shadcn-input"
                      style={{ paddingLeft: '14px', paddingRight: '40px', border: '1px solid #e4e4e7', borderRadius: '8px' }}
                    />
                    <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '15px', color: '#e11d48', pointerEvents: 'none' }}>📅</span>
                  </div>
                </div>

                {/* Specific Instructions */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '6px', background: '#eff6ff', color: '#2563eb', fontSize: '13px' }}>ℹ️</span>
                    <label className="shadcn-label" style={{ margin: 0, fontWeight: '700', fontSize: '13.5px' }}>Specific Instructions</label>
                  </div>
                  <textarea 
                    rows="2"
                    placeholder="Describe specific questions or guidelines..."
                    value={formData.instructions}
                    onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                    className="shadcn-textarea"
                    style={{ resize: 'vertical', minHeight: '70px', border: '1px solid #e4e4e7', borderRadius: '8px' }}
                  />
                </div>

                {/* Trust Badges Panel */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', background: '#fafafa', padding: '12px', borderRadius: '12px', border: '1px solid #f3f3f3', marginTop: '4px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: '800', color: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <span style={{ color: '#6366f1' }}>🛡️</span> <span style={{ fontSize: '10px' }}>100% Secure</span>
                    </div>
                    <span style={{ fontSize: '9px', color: '#71717a', fontWeight: '600', display: 'block', marginTop: '2px' }}>Your data is safe</span>
                  </div>
                  <div style={{ textAlign: 'center', borderLeft: '1px solid #e4e4e7', borderRight: '1px solid #e4e4e7' }}>
                    <div style={{ fontSize: '11px', fontWeight: '800', color: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <span style={{ color: '#d946ef' }}>⚡</span> <span style={{ fontSize: '10px' }}>Quick Response</span>
                    </div>
                    <span style={{ fontSize: '9px', color: '#71717a', fontWeight: '600', display: 'block', marginTop: '2px' }}>Replies in minutes</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: '800', color: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <span style={{ color: '#6366f1' }}>👤</span> <span style={{ fontSize: '10px' }}>Verified Tutors</span>
                    </div>
                    <span style={{ fontSize: '9px', color: '#71717a', fontWeight: '600', display: 'block', marginTop: '2px' }}>PhD expert help</span>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  style={{
                    height: '48px',
                    width: '100%',
                    borderRadius: '100px',
                    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '14px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 6px 20px rgba(34, 197, 94, 0.25)',
                    marginTop: '8px',
                    position: 'relative',
                    padding: '0 24px'
                  }}
                  className="pulse-animation"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
                  </svg>
                  <span style={{ flex: 1, textAlign: 'center' }}>Get Free Quote on WhatsApp</span>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#ffffff', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '900', flexShrink: 0 }}>→</span>
                </button>


              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '16px' }}>
                <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>{stat.icon}</span>
                <h3 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary)', marginBottom: '4px' }}>{stat.value}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '600' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section - Displays all 12 services structured cleanly */}
      <section id="services" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              background: 'linear-gradient(270deg, #6366f1, #d946ef, #6366f1)',
              backgroundSize: '200% 200%',
              color: '#ffffff', 
              padding: '16px 36px', 
              borderRadius: '100px', 
              fontWeight: '800', 
              fontSize: '22px', 
              letterSpacing: '1px',
              textTransform: 'uppercase',
              animation: 'premium-gradient-shift 4s ease infinite, float-badge 3s ease-in-out infinite'
            }}>
              <span style={{ fontSize: '26px' }}>📚</span> Our Services
            </div>
          </div>

          <div className="grid-cols-3">
            {services.map((svc, i) => (
              <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '250px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '800' }}>{svc.title}</h3>
                    <span style={{ fontSize: '10px', color: 'var(--primary)', background: 'var(--primary-glow)', padding: '3px 8px', borderRadius: '99px', fontWeight: '700' }}>
                      {svc.tag}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '12.5px', marginBottom: '20px', lineHeight: '1.6' }}>{svc.desc}</p>
                </div>
                <div>
                  <button 
                    onClick={() => handleServiceClick(svc.slug)}
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '13px', padding: '10px 0' }}
                  >
                    View Service Page
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Categories Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ffedd5', border: '1px solid #fed7aa', color: '#ea580c', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: '600', fontSize: '13px', marginBottom: '16px' }}>
              🎓 EXPERT TUTORS
            </div>
            <h2 style={{ fontSize: '38px', fontWeight: '800', marginBottom: '12px' }}>Assignment & Homework Help for Every Subject</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16.5px' }}>Expert tutors across 100+ subjects ready to help you succeed</p>
          </div>

          <div className="grid-cols-4" style={{ gap: '20px', marginBottom: '40px' }}>
            {subjectCategories.map((sub, i) => {
              const borderStyle = sub.highlighted 
                ? '1px solid #f97316' 
                : '1px solid var(--border-color)';
              const arrowColor = sub.highlighted ? '#f97316' : '#9ca3af';
              
              return (
                <div 
                  key={i} 
                  onClick={() => handleScrollToSection('get-quote')}
                  className="subject-card"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    background: '#ffffff', 
                    padding: '16px 20px', 
                    borderRadius: '12px', 
                    border: borderStyle,
                    boxShadow: sub.highlighted ? '0 4px 15px rgba(249, 115, 22, 0.08)' : '0 2px 4px rgba(0, 0, 0, 0.02)',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {renderSubjectIcon(sub.icon, sub.color)}
                    <div style={{ textAlign: 'left' }}>
                      <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', display: 'block', lineHeight: '1.2' }}>
                        {sub.name}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                        {sub.suffix}
                      </span>
                    </div>
                  </div>
                  <span 
                    className="arrow-indicator" 
                    style={{ 
                      fontSize: '18px', 
                      fontWeight: '700', 
                      color: arrowColor,
                      marginLeft: '8px'
                    }}
                  >
                    →
                  </span>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', background: 'var(--primary-glow)', color: 'var(--primary)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: '600', fontSize: '13px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              SIMPLE PROCESS
            </span>
            <h2 style={{ fontSize: '38px', fontWeight: '800', marginBottom: '12px' }}>How A Grade Tutor Works</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>Get expert help in 4 simple steps</p>
          </div>

          <div className="grid-cols-4">
            <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--primary)', background: 'var(--bg-secondary)', padding: '24px 20px' }}>
              <div className="flex-center" style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--primary)', color: 'white', fontWeight: '800', fontSize: '18px', margin: '0 auto 20px' }}>1</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>Submit Your Assignment</h3>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Share your requirements, upload files, and set your deadline. It takes less than 2 minutes.
              </p>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--accent-purple)', background: 'var(--bg-secondary)', padding: '24px 20px' }}>
              <div className="flex-center" style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--accent-purple)', color: 'white', fontWeight: '800', fontSize: '18px', margin: '0 auto 20px' }}>2</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>Get Matched with Expert</h3>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                We instantly match you with a verified subject expert who specializes in your topic.
              </p>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid #10b981', background: 'var(--bg-secondary)', padding: '24px 20px' }}>
              <div className="flex-center" style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#10b981', color: 'white', fontWeight: '800', fontSize: '18px', margin: '0 auto 20px' }}>3</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>Make Payment</h3>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Pay securely through our platform. Money-back guarantee if you're not satisfied.
              </p>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--whatsapp-green)', background: 'var(--bg-secondary)', padding: '24px 20px' }}>
              <div className="flex-center" style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--whatsapp-green)', color: 'white', fontWeight: '800', fontSize: '18px', margin: '0 auto 20px' }}>4</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>Receive Your Solution</h3>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Get plagiarism-free, detailed solutions delivered before your deadline. Guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Trust Section */}
      <section id="why-trust-us" style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#d1fae5', color: '#065f46', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: '600', fontSize: '13px', marginBottom: '16px' }}>
            ✓ Trusted by 2M+ Students
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>
            Why Students Trust A Grade Tutor
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', fontWeight: '500' }}>
            Quality and reliability you can count on
          </p>
        </div>

        <div className="container grid-cols-2" style={{ alignItems: 'center', gap: '48px' }}>
          {/* Left Column: List of trust factors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {trustReasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  padding: '16px 20px', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  background: '#ffffff',
                  transition: 'var(--transition)'
                }}
              >
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '10px', 
                    backgroundColor: reason.bgColor, 
                    color: '#ffffff', 
                    flexShrink: 0,
                    padding: '8px'
                  }}
                >
                  {reason.icon}
                </div>
                <span style={{ fontSize: '14.5px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {reason.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Live Chat Simulator Container */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div 
              className="chat-simulator-container" 
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '460px', 
                padding: '24px', 
                background: '#ffffff', 
                borderRadius: '24px', 
                border: '1.5px solid #f1f5f9', 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)',
                fontFamily: 'var(--font-body)',
                margin: '20px 0'
              }}
            >
              {/* Floating Top Badge */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-18px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  background: '#ffffff', 
                  border: '1.5px solid #e2e8f0', 
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', 
                  padding: '8px 20px', 
                  borderRadius: '100px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  whiteSpace: 'nowrap',
                  zIndex: 2
                }}
              >
                <span 
                  style={{ 
                    width: '8px', 
                    height: '8px', 
                    backgroundColor: '#10b981', 
                    borderRadius: '50%', 
                    display: 'inline-block',
                    animation: 'pulse 1.5s infinite'
                  }}
                ></span>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#1e293b' }}>
                  {chatSessions[activeSessionIdx].onlineCount}
                </span>
              </div>

              {/* Chat Simulation Area */}
              <div 
                className="chat-simulator-body" 
                style={{ 
                  background: '#fbfaf7', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  minHeight: '280px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '14px',
                  justifyContent: 'flex-start',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Active Subject Indicator */}
                <div style={{ alignSelf: 'center', background: '#fff7ed', border: '1px solid #ffedd5', color: '#c2410c', padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Live Subject: {chatSessions[activeSessionIdx].subject}
                </div>

                {chatSessions[activeSessionIdx].messages.slice(0, visibleMessagesCount).map((msg, index) => {
                  const isTutor = msg.sender === 'tutor';
                  const bubbleStyle = isTutor 
                    ? {
                        alignSelf: 'flex-start',
                        backgroundColor: '#1e293b',
                        color: '#ffffff',
                        borderRadius: '18px 18px 18px 4px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
                      }
                    : {
                        alignSelf: 'flex-end',
                        backgroundColor: '#f1f5f9',
                        color: '#334155',
                        borderRadius: '18px 18px 4px 18px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.01)'
                      };
                  
                  return (
                    <div 
                      key={index} 
                      style={{ 
                        ...bubbleStyle, 
                        padding: '12px 16px', 
                        maxWidth: '85%', 
                        fontSize: '13px', 
                        lineHeight: '1.45',
                        textAlign: 'left',
                        animation: 'fadeIn 0.3s ease-out both'
                      }}
                    >
                      {msg.text}
                    </div>
                  );
                })}

                {/* Blinking Typing Dot Indicator */}
                {isTyping && (
                  <div 
                    style={{ 
                      alignSelf: 'flex-start', 
                      backgroundColor: '#ffffff', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '14px', 
                      padding: '10px 16px',
                      display: 'flex',
                      gap: '4px',
                      alignItems: 'center',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                )}
              </div>

              {/* Floating circular tutor avatar indicator */}
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '-16px', 
                  right: '-16px', 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  backgroundColor: '#f97316', 
                  boxShadow: '0 8px 20px rgba(249, 115, 22, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 3
                }}
              >
                <span style={{ fontSize: '24px' }}>👨‍🎓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Support Section */}
      <section id="get-quote" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div 
            style={{ 
              background: '#ffffff', 
              borderRadius: '24px', 
              border: '1.5px solid #e2e8f0', 
              boxShadow: 'var(--shadow-lg)', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="grid-cols-2 whatsapp-support-inner">
              
              {/* Left Column: Promotion */}
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#e8f5e9', border: '1px solid #c8e6c9', color: '#2e7d32', padding: '6px 16px', borderRadius: '100px', fontWeight: '700', fontSize: '12px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  💬 WHATSAPP SUPPORT
                </div>
                <h2 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.15', color: '#1e293b', marginBottom: '20px' }}>
                  Get Instant Online Homework Help <br />
                  <span style={{ color: '#ea580c' }}>via WhatsApp</span>
                </h2>
                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                  Get instant homework help from top tutors—just a WhatsApp message away. 24/7 hw help support for all your academic needs!
                </p>

                {/* Overlapping Avatars and Social Proof */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {[
                      { char: 'A', bg: '#f97316' },
                      { char: 'S', bg: '#10b981' },
                      { char: 'M', bg: '#3b82f6' },
                      { char: 'R', bg: '#eab308' }
                    ].map((av, idx) => (
                      <div 
                        key={idx} 
                        className="avatar-overlap"
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          backgroundColor: av.bg, 
                          color: '#ffffff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '800', 
                          fontSize: '15px', 
                          border: '2px solid #ffffff',
                          marginLeft: idx === 0 ? '0' : '-12px',
                          boxShadow: 'var(--shadow-sm)'
                        }}
                      >
                        {av.char}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ color: '#f97316', fontSize: '16px', fontWeight: 'bold', display: 'flex', gap: '2px', marginBottom: '2px' }}>
                      ★★★★★
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0, fontWeight: '600' }}>
                      <strong>2M+ students</strong> trust A Grade Tutor
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interaction Form */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <form onSubmit={handleTextMeNow} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                      YOUR WHATSAPP NUMBER
                    </label>
                    <div className="premium-tel-container">
                      <select 
                        value={phonePrefix} 
                        onChange={(e) => setPhonePrefix(e.target.value)}
                        className="premium-tel-select"
                      >
                        {countryCodes.map((c, index) => (
                          <option key={index} value={c.code} style={{ fontWeight: '600' }}>
                            {c.flag} {c.code} ({c.name})
                          </option>
                        ))}
                      </select>

                      {/* Separator line */}
                      <div style={{ width: '1.5px', height: '24px', backgroundColor: '#cbd5e1', margin: '0 8px' }}></div>

                      <div style={{ display: 'flex', alignItems: 'center', flex: 1, position: 'relative' }}>
                        <input 
                          type="tel" 
                          placeholder="WhatsApp Number Only"
                          value={whatsAppNum}
                          onChange={(e) => setWhatsAppNum(e.target.value)}
                          required
                          className="premium-tel-input"
                          onFocus={(e) => {
                            const container = e.target.closest('.premium-tel-container');
                            if (container) {
                              container.style.borderColor = '#f97316';
                              container.style.boxShadow = '0 0 0 3.5px rgba(249, 115, 22, 0.15)';
                              container.style.background = '#ffffff';
                            }
                          }}
                          onBlur={(e) => {
                            const container = e.target.closest('.premium-tel-container');
                            if (container) {
                              container.style.borderColor = '#cbd5e1';
                              container.style.boxShadow = 'none';
                              container.style.background = '#f8fafc';
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn pulse-animation" 
                    style={{ 
                      width: '100%', 
                      padding: '16px 0', 
                      fontSize: '16px', 
                      fontWeight: '700', 
                      borderRadius: '12px', 
                      backgroundColor: '#22c55e', 
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
                    </svg>
                    Text Me Now
                  </button>
                </form>

                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                  <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase' }}>or</span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                </div>

                {/* Secondary CTA */}
                <button 
                  onClick={() => handleScrollToSection('get-quote')} 
                  className="btn"
                  style={{ 
                    width: '100%', 
                    padding: '14px 0', 
                    fontSize: '14px', 
                    fontWeight: '700', 
                    borderRadius: '12px', 
                    backgroundColor: '#ffffff', 
                    color: '#ea580c', 
                    border: '1.5px solid #ffedd5',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.01)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fff7ed'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
                >
                  📄 Get Homework Help →
                </button>

                {/* 2x2 Feature Grid */}
                <div className="whatsapp-features-grid">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                    <span style={{ color: '#f97316' }}>⚡</span> Instant reply
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                    <span style={{ color: '#f97316' }}>🔒</span> 100% private
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                    <span style={{ color: '#f97316' }}>🧑‍🏫</span> Top tutors
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                    <span style={{ color: '#f97316' }}>🌐</span> All subjects
                  </div>
                </div>

                {/* Floating envelope graphic */}
                <div className="envelope-svg" style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                  <svg width="120" height="96" viewBox="0 0 120 96" fill="none">
                    <circle cx="60" cy="54" r="32" fill="#fff7ed" />
                    <g className="envelope-paper">
                      <rect x="36" y="24" width="48" height="36" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                      <line x1="42" y1="32" x2="78" y2="32" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                      <line x1="42" y1="38" x2="68" y2="38" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                      <line x1="42" y1="44" x2="58" y2="44" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <path d="M28 44 L60 64 L92 44 L92 76 L28 76 Z" fill="#f97316" />
                    <path d="M28 44 L60 62 L92 44" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="92" cy="70" r="10" fill="#3b82f6" />
                    <path d="M89 70 A3 3 0 0 1 95 70" stroke="#ffffff" strokeWidth="1.5" />
                    <circle cx="92" cy="67" r="2" fill="#ffffff" />
                    <circle cx="32" cy="36" r="8" fill="#ec4899" />
                    <text x="29" y="40" fill="#ffffff" fontSize="9" fontWeight="bold">@</text>
                  </svg>
                </div>

                <p style={{ fontSize: '10.5px', color: '#94a3b8', lineHeight: '1.4', margin: 0 }}>
                  *Get instant homework help from top tutors—just a WhatsApp message away. 24/7 support for all your academic needs!
                </p>
              </div>
            </div>

            {/* Bottom Gray Banner */}
            <div 
              style={{ 
                background: '#f1f5f9', 
                padding: '16px 24px', 
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '8px 16px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#64748b'
              }}
            >
              {[
                '2M+ Students Helped',
                '24/7 Live Support',
                'Expert Tutors',
                'All Subjects Covered',
                'Instant Response',
                '100% Confidential',
                'Top Rated Service'
              ].map((prop, idx) => (
                <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>{prop}</span>
                  {idx < 6 && <span style={{ color: '#cbd5e1', fontSize: '8px' }}>●</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Student Success Stories</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>Read reviews from students studying in global universities.</p>
          </div>

          <div className="grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--bg-secondary)' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  "{t.text}"
                </p>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '15px', marginBottom: '2px' }}>{t.name}</h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>{t.uni}</p>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: '600', background: 'var(--primary-glow)', padding: '2px 8px', borderRadius: '4px' }}>
                    {t.subject}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ffedd5', color: '#ea580c', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: '600', fontSize: '13px', marginBottom: '16px' }}>
            📈 Top Universities
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px' }}>
            A Grade Tutor Homework Help Services Trusted By University Students
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            A Grade Tutor has earned the trust of 100,000+ students from top universities worldwide. Our team is trusted by students and available whenever they need help with college homework. While universities set the stage for their success, our initiative to help with homework makes their academic journey easier.
          </p>
        </div>

        <div className="container" style={{ marginBottom: '40px' }}>
          <div className="grid-cols-5">
            {[
              { name: 'Australian National University', image: '/anu_campus.png' },
              { name: 'Murdoch University', image: '/murdoch_campus.png' },
              { name: 'University of Toronto', image: '/toronto_campus.png' },
              { name: 'McMaster University', image: '/mcmaster_campus.png' },
              { name: 'University of Victoria', image: '/uvic_campus.png' }
            ].map((uni, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  textAlign: 'center', 
                  padding: '24px', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border-color)', 
                  boxShadow: 'var(--shadow-sm)',
                  background: '#ffffff',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <img 
                    src={uni.image} 
                    alt={uni.name} 
                    style={{ 
                      width: '180px', 
                      height: '180px', 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      border: '4px solid var(--bg-secondary)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  />
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--primary)', margin: 0 }}>
                  {uni.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => handleScrollToSection('get-quote')} 
            className="btn" 
            style={{ 
              background: '#f97316', 
              color: 'white', 
              fontSize: '15px', 
              padding: '14px 32px',
              boxShadow: '0 8px 20px rgba(249, 115, 22, 0.3)' 
            }}
          >
            Get Homework help
          </button>
        </div>
      </section>

      {/* Become a Tutor Section */}
      <section id="become-a-tutor" style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container grid-cols-2" style={{ alignItems: 'center', gap: '48px' }}>
          <div>
            <div className="badge-tutor" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--primary-glow)', color: 'var(--primary)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: '600', fontSize: '13px', marginBottom: '20px' }}>
              🎓 Share Your Knowledge & Earn
            </div>
            <h2 style={{ fontSize: '36px', marginBottom: '20px', lineHeight: '1.2', color: 'var(--primary)' }}>
              Become an Expert Tutor on <br />
              <span className="gradient-text">A Grade Tutor</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '24px', lineHeight: '1.6' }}>
              Are you a subject matter expert, researcher, or PhD holder? Join our elite global tutor panel and earn a flexible income by helping students solve complex academic problems.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '16px', color: 'var(--accent-purple)', fontWeight: 'bold' }}>1.</span>
                <span style={{ fontSize: '14.5px', fontWeight: '500', color: 'var(--text-primary)' }}>Register & submit your credentials via WhatsApp.</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '16px', color: 'var(--accent-purple)', fontWeight: 'bold' }}>2.</span>
                <span style={{ fontSize: '14.5px', fontWeight: '500', color: 'var(--text-primary)' }}>Pass our subject-specific evaluation test.</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '16px', color: 'var(--accent-purple)', fontWeight: 'bold' }}>3.</span>
                <span style={{ fontSize: '14.5px', fontWeight: '500', color: 'var(--text-primary)' }}>Complete a short training session with tutor managers.</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '16px', color: 'var(--accent-purple)', fontWeight: 'bold' }}>4.</span>
                <span style={{ fontSize: '14.5px', fontWeight: '500', color: 'var(--text-primary)' }}>Receive assignments, submit solutions, and earn daily payouts!</span>
              </div>
            </div>

            <a 
              href="https://wa.me/919429379139?text=Hi%2C%20I%20am%20interested%20in%20becoming%20an%20expert%20tutor%20on%20A%20Grade%20Tutor.%20Please%20guide%20me%20through%20the%20screening%20test."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '14px', padding: '14px 30px' }}
            >
              Apply as Tutor Now
            </a>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: '440px', padding: '32px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--primary)', fontWeight: '800' }}>Tutor Benefits</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>💸</span> <span><strong>Highest Payout Rates:</strong> We pay our experts premium rates with absolute transparency and daily bank transfers.</span>
                </li>
                <li style={{ fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>🕒</span> <span><strong>Flexible Work Hours:</strong> Choose assignments that match your schedule, availability, and specific domain.</span>
                </li>
                <li style={{ fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>📈</span> <span><strong>Consistent Homework Stream:</strong> Get access to hundreds of daily tasks in math, physics, engineering, and coding.</span>
                </li>
                <li style={{ fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>💬</span> <span><strong>Dedicated Coordinator Support:</strong> 24/7 coordinator assistance to answer queries and manage handovers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>Everything you need to know about getting started.</p>
          </div>

          <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="faq-item" 
                style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', overflow: 'hidden', transition: 'var(--transition)' }}
              >
                <div 
                  className="faq-question" 
                  onClick={() => handleFaqToggle(index)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', cursor: 'pointer', fontWeight: '600', fontSize: '15px' }}
                >
                  <span>{item.q}</span>
                  <span style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', fontSize: '18px', color: 'var(--primary)' }}>
                    ▼
                  </span>
                </div>
                
                {activeFaq === index && (
                  <div className="faq-answer" style={{ padding: '0 24px 20px', fontSize: '13px', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '15px', background: '#fafbfc' }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
