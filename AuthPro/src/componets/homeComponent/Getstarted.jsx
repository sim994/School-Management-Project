import React from "react";
import { NavLink } from "react-router-dom";

export function Getstarted() {
  return (
    <section className="getstarted-section">
      <div className="section-wrapper">
        <h2>Ready to organize your data?</h2>
        <p>
          Experience the simplest way to manage student records today. Join our
          beta program and start scaling your institution.
        </p>
        <button className="getstarted-btn">
          <NavLink to="/login">Get Started Now</NavLink>
        </button>
      </div>
    </section>
  );
}
