import React from 'react';
import './footer.css'; // Import the associated CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Travel Blog Diary. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

