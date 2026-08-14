import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';
import ServicesCataloguePage from './components/ServicesCataloguePage';
import LegalPage from './components/LegalPage';
import RefundPage from './components/RefundPage';
import TermsPage from './components/TermsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'services', or 'service-<slug>'

  // Helper to handle switching views cleanly
  const renderPage = () => {
    if (currentPage === 'home') {
      return <LandingPage setCurrentPage={setCurrentPage} />;
    } else if (currentPage === 'services') {
      return <ServicesCataloguePage setCurrentPage={setCurrentPage} />;
    } else if (currentPage === 'privacy') {
      return <LegalPage />;
    } else if (currentPage === 'refund') {
      return <RefundPage />;
    } else if (currentPage === 'terms') {
      return <TermsPage />;
    } else if (currentPage.startsWith('service-')) {
      const serviceKey = currentPage.replace('service-', '');
      return <ServicePage serviceKey={serviceKey} setCurrentPage={setCurrentPage} />;
    }
    return <LandingPage setCurrentPage={setCurrentPage} />;
  };

  return (
    <div className="app-wrapper">
      {/* Sticky Header */}
      <Header setCurrentPage={setCurrentPage} />

      {/* Main Layout Body */}
      <main key={currentPage} className="page-transition-wrapper">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Sticky Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/919429379139?text=Hi%20A%20Grade%20Tutor%2C%20I%20need%20academic%20assistance%20on%20my%20coursework." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp pulse-animation"
        title="Connect on WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.448 4.969 1.449 5.375 0 9.747-4.321 9.75-9.63 0-2.573-1.002-4.991-2.822-6.813C16.726 2.339 14.316 1.336 11.75 1.336 6.372 1.336 2 5.659 1.997 10.97c0 1.838.487 3.593 1.411 5.163l-1.077 3.93 4.07-1.066c.265.144.53.28.796.406v-.004z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
