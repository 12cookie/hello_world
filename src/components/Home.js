import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import './../style/Home.css';

function Home() {

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const preloadImage = () => {
      const img = new Image();
      img.src = "/bg.jpg";
      
      img.onload = () => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      };
      
      img.onerror = () => {
        console.error("Failed to load image");
        setLoading(false);
      };
    };
    
    preloadImage();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className = "home-container">
      <header className = "home-header">
        <h1> Welcome to Babysitter Hub </h1>
        <nav>
          <Link to = "/register" className = "register-button"> Register </Link>
        </nav>
      </header>

      <section className = "hero-section">
        <img src = "/bg.jpg" alt = "Babysitting Service" className = "hero-image"/>
        <div className = "hero-text">
          <h2> Your Trusted Babysitting Service </h2>
          <p> Find top babysitters or join our community to offer your services. </p>
        </div>
      </section>
    </div>
  );
}

export default Home;