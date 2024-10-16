import React from 'react';

const Footer = () => {
  return (
  // Add this in your Home.js and Login.js components, right before the closing </animated.div> tag

<footer>
  <p>&copy; {new Date().getFullYear()} OAuth 2.0 . All rights reserved.</p>
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
  </div>
</footer>

  );
};

export default Footer;
