import React from 'react';
import styles from "./Navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg bg-black rounded shadow-sm`}>
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Logo Section */}
        <a href="#home" className="d-flex align-items-center">
          <img src="/logo.png" alt="Logo" className={`${styles.logo_image} me-2`} />
        </a>

        {/* Navbar Toggler for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className={`${styles.nav_link} nav-link active text-white`}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#events" className={`${styles.nav_link} nav-link text-white`}>Events</a>
            </li>
            <li className="nav-item">
              <a href="#speakers" className={`${styles.nav_link} nav-link text-white`}>Speakers</a>
            </li>
            <li className="nav-item">
              <a href="#team" className={`${styles.nav_link} nav-link text-white`}>Team</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
