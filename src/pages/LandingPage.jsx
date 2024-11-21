import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../styles/LandingPage.module.css";

function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className={styles.App}>
      <div className={styles.topBar}>
        <div className={`container d-flex justify-content-between align-items-center`}>
          <div className={styles.socialLinks}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <button className={`btn ${styles.btn}`}>Skip to Content</button>
        </div>
      </div>

    <header className="bg-light py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="cvsu.png"
              alt="University Logo"
              className="logo-inline mr-2"
              style={{ width: '50px' }}
            />
            <h1 className={`${styles.headerText} display-6 mb-0`}>CvSU - Bacoor Campus</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse justify-content-end ${
              isOpen ? 'show' : 'collapse'
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#information">
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#programs">
                  School Programs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#alumni">
                  Alumni
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

      <main>
      {/* Hero Section */}
      <section className={`${styles.heroSection} d-flex align-items-center`}>
        <div className={styles.heroOverlay}>
          <div className="container text-center">
            <h1 className={`${styles.heading} display-4`}>
              TRUTH · EXCELLENCE · SERVICE
            </h1>
            <p className={`${styles.lead} lead`}>
              The Cavite State University (CvSU) has its humble beginnings in 1906
            </p>
            <div className={`${styles.buttonGroup} mt-4`}>
              <button className={`${styles.button} btn btn-success mx-2`}>
                Faculty Login
              </button>
              <button className={`${styles.button} btn btn-success mx-2`}>
                Student Page
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className={`${styles.infoCards} container py-5`}>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className={`${styles.card} p-3 shadow-sm`}>
              <i className={`${styles.cardIcon} fas fa-university fa-3x mb-3`}></i>
              <p className={styles.cardText}>Admission/Enrollment Page</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className={`${styles.card} p-3 shadow-sm`}>
              <i className={`${styles.cardIcon} fas fa-globe fa-3x mb-3`}></i>
              <p className={styles.cardText}>Website Links</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className={`${styles.card} p-3 shadow-sm`}>
              <i className={`${styles.cardIcon} fas fa-book fa-3x mb-3`}></i>
              <p className={styles.cardText}>Academic Information System</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className={`${styles.card} p-3 shadow-sm`}>
              <i className={`${styles.cardIcon} fas fa-info-circle fa-3x mb-3`}></i>
              <p className={styles.cardText}>Admission Information for New Learners</p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

export default LandingPage;
