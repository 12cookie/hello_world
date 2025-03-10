import React from 'react';
import './../style/Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading Babysitter Hub...</p>
    </div>
  );
}
export default Loader;