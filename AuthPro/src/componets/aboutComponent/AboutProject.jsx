import React from "react";

export function AboutProject() {
  return (
    <section className="about-section">
      <div className="wrapper">
        <article>
          <p>MERN STACK PROJECT</p>
          <p className="main-heading">Student <span>Management</span> System</p>
          <p>
            A comprehensive academic administration platform designed to
            modernize record-keeping, automate grading systems, and improve
            communication between faculty and students.
          </p>
        </article>
          <video
            src="../illustrations/abouthero.mp4"
            autoPlay
            muted
            playsInline
            className="about-video"
          />
      </div>
    </section>
  );
}

