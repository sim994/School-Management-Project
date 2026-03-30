import React from "react";
import { FeactureCard } from "../FeactureCard";
import student from "../../assets/feactureIcon/student.png";
import auth from "../../assets/feactureIcon/auth.png";
import table from "../../assets/feactureIcon/table.png";

export function Feacture() {
  return (
    <section className="feacture-section">
      <div className="heading-section">
        <h1>Powerful Feactures For Modern Education</h1>
        <p>
          Everything you need to manage your student database efficiently and
          securely in one place.
        </p>
      </div>
      <div className="feacture-card-section">
        <FeactureCard
          img="../feactureIcon/student.png"
          title="Add & Manage Students"
          description="Easily create, update, and
          delete student records with an
          intuitive interface designed for
          speed."
        />
        <FeactureCard
          img={table}
          title="Organized Data Table"
          description="View all student information in
          a clean, filterable, and
          sortable data table powered
          by modern frontend tools."
        />
        <FeactureCard
          img={auth}
          title="Secure Authentication"
          description="Protected routes and secure
          login system using JWT and
          industry-standard security
          practices for data safety."
        />
      </div>
    </section>
  );
}
