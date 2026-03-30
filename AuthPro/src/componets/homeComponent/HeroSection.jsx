import React from "react";
import { NavLink } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="wrapper">
        <article>
          <section className="heading-section">
            <p className="heading-1">MERN Stack Portfolio Project</p>
            <h1 className="heading-2">
               Student Managements
              <span className="highlight-txt"> Made Simple</span>
            </h1>
            <p className="heading-3">
              A modern MERN stack solution to streamline student data, manage
              enrollments, and ensure secure authentication for educational
              institutions.
            </p>
          </section>
          <div className="btn-section">
            <button className="login-btn">
              <NavLink to="/login">Get Started</NavLink>
            </button>
            <button className="aboutpage-btn">
              <NavLink to="/about">About Project</NavLink>
            </button>
          </div>
        </article>
        <div className="preview-image">
          <img src="../images/heroimg.png" alt="Image not found" />
        </div>
      </div>
    </section>
  );
}
