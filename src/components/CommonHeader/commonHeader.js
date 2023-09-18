import React from 'react';
import Header from './Header/Header'; // Import your Header component
import Footer from './footer/footer'; // Import your Footer component

function commonHeader() {
  return (
    <div className="common">
      <Header />
      {/* <Footer /> */}
    </div>
  );
}

export default commonHeader;
