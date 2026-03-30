import React from "react";
import { NavLink } from "react-router-dom";

export function Datatable() {
  return (
    <section className="data-table-section">
      <div className="table-wrapper">
        <div className="table-info-header">
          <section className="basic-info-section">
            <h1>Student Records</h1>
            <p className="total-student-counts">
              Total 10 students enrolled for Academic Year 2025-26
            </p>
          </section>
          <section className="functionality-section">
            <input
              type="text"
              name="searchStudent"
              placeholder="Search Student..."
              className="search-filter"
            />
            <select name="All classes" id="class">
              <option value="All classes">All Classes</option>
              <option value="Class 1" for="class">
                class 1
              </option>
              <option value="Class 2" for="class">
                class 2
              </option>
              <option value="Class 3" for="class">
                class 3
              </option>
              <option value="Class 4" for="class">
                class 4
              </option>
              <option value="Class 5" for="class">
                class 5
              </option>
            </select>
          </section>
          <button className="add-student">
            <NavLink to="/studentform">Add Student</NavLink>
          </button>
        </div>
        <table className="data-table"></table>
      </div>
    </section>
  );
}
