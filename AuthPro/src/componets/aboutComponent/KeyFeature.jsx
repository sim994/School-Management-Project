import React from "react";
import { KeyFeatureCard } from "../KeyFeatureCard";

export function KeyFeature() {
  return (
    <section className="key-feature-section">
      
      <KeyFeatureCard
        featureName="Student Profiles"
        descriptions="Detailed profiles including academic history, attendance
        records, and personal documentation stored securely."
      />
      <KeyFeatureCard
        featureName="Performance Analytics"
        descriptions="Visual representations of class performance and individual
        student growth trends using Chart.js."
      />
      <KeyFeatureCard
        featureName="Attendance Management"
        descriptions="Streamlined daily attendance marking with automated
        notifications for consecutive absences."
      />
      <KeyFeatureCard
        featureName="Admin Dashboard"
        descriptions="Centralized control for user roles, system settings, and
        high-level institutional reports."
      />
    </section>
  );
}
