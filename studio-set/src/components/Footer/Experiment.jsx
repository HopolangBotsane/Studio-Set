// ConditionalFooter component (e.g., in ConditionalFooter.jsx)

import React from 'react';
import { useLocation } from 'react-router-dom';
import { StandardFooter, ExtendedFooter } from './Footers'; // Assuming the footers are in Footers.jsx

/**
 * Renders the footers based on the current page location.
 * - Renders BOTH footers on the homepage ('/').
 * - Renders ONLY the ExtendedFooter on all other pages.
 */
const ConditionalFooter = () => {
  // Get the current pathname from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if the current path is the root homepage path
  const isHomePage = currentPath === '/';

  return (
    <div className="conditional-footer-wrapper">
      {/* LOGIC: Standard Footer renders ONLY IF the user is on the homepage. 
      */}
      {isHomePage && (
        <StandardFooter />
      )}

      {/* LOGIC: Extended Footer is required to render on ALL pages 
        (both homepage and other pages), so it's rendered unconditionally.
      */}
      <ExtendedFooter />
    </div>
  );
};

export default ConditionalFooter;