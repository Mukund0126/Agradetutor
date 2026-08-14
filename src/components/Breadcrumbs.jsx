import React from 'react';
import { servicesConfig } from '../config/servicesConfig';

const Breadcrumbs = ({ currentPage, setCurrentPage }) => {
  if (currentPage === 'home') return null;

  let pageTitle = '';
  
  if (currentPage === 'services') {
    pageTitle = 'All Services';
  } else if (currentPage === 'privacy') {
    pageTitle = 'Privacy Policy';
  } else if (currentPage === 'refund') {
    pageTitle = 'Refund Policy';
  } else if (currentPage === 'terms') {
    pageTitle = 'Terms and Conditions';
  } else if (currentPage.startsWith('service-')) {
    const serviceKey = currentPage.replace('service-', '');
    pageTitle = servicesConfig[serviceKey]?.title || 'Service Details';
  }

  return (
    <div className="container">
      <div className="breadcrumbs">
        <span 
          className="breadcrumbs-link" 
          onClick={() => setCurrentPage('home')}
        >
          Home
        </span>
        <span className="breadcrumbs-separator">›</span>
        <span className="breadcrumbs-current">{pageTitle}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
