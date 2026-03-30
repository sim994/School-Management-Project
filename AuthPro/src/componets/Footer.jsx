import React from "react";
import logo from "../assets/logos/logo.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="logo">
            <span className="logo-icon">
              <img src={logo} alt="Image not found" />
            </span>
            <h3>Student Management</h3>
          </div>

          <p>
            Empowering educational institutions with smart, efficient student
            data management systems built on the MERN stack.
          </p>
        </div>

        <div className="footer-links">
          <h4>RESOURCES</h4>
          <ul>
            <li>Documentation</li>
            <li>API Reference</li>
            <li>GitHub Repo</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>COMPANY</h4>
          <ul>
            <li>About Project</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>SOCIAL</h4>
          <div className="social-icons">
            {/* <Share2 />
            <Github />
            <Youtube /> */} 
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Student Management. Built with MERN Stack.</p>

        <div className="footer-policy">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
