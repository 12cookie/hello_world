import React from 'react';
import { Link } from 'react-router-dom';
import './../style/Home.css';

function Home() {
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