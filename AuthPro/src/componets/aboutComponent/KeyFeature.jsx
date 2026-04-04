import React from "react";
import { KeyFeatureCard } from "../KeyFeatureCard";
import profile from "../aboutComponent/keyicons/profile.png"
import analytics from "../aboutComponent/keyicons/analytics.png"
import antendance from "../aboutComponent/keyicons/antendance.png"
import deshboard from "../aboutComponent/keyicons/deshboard.png"

export function KeyFeature() {
  return (
    <section className="key-feature-section">
      <h1>Key Features</h1>
      <div className="key-feature-wrapper">
        <KeyFeatureCard
          image={profile}
          featureName="Student Profiles"
          descriptions="Detailed profiles including academic history, attendance
          records stored securely."
          />
        <KeyFeatureCard
          image={analytics}
          featureName="Performance Analytics"
          descriptions="Visual representations of class performance and individual
          student growth trends using Chart.js."
          />
        <KeyFeatureCard
          image={antendance}
          featureName="Attendance Management"
          descriptions="Streamlined daily attendance marking with automated
          notifications for consecutive absences."
          />
        <KeyFeatureCard
          image={deshboard}
          featureName="Admin Dashboard"
          descriptions="Centralized control for user roles, system settings, and
        high-level institutional reports."
        />
      </div>
    </section>
  );
}
