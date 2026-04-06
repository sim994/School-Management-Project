import React from "react";
import { NavLink } from "react-router-dom";

export function Datatable() {
  return (
    <section className="data-table-section">
      <div className="table-wrapper">
        <div className="table-info-header">
          {/* <section className="basic-info-section">
            <h1>Student Records</h1>
            <p className="total-student-counts">
              Total 10 students enrolled for Academic Year 2025-26
            </p>
          </section> */}
          <section className="functionality-section">
            <input
              type="text"
              name="searchStudent"
              placeholder="Search Student..."
              className="search-filter"
            />
            <select name="All classes" id="class">
              <option value="All classes">All Classes</option>
              <option value="Class 1">class 1</option>
              <option value="Class 2">class 2</option>
              <option value="Class 3">class 3</option>
              <option value="Class 4">class 4</option>
              <option value="Class 5">class 5</option>
              <option value="Class 6">class 6</option>
              <option value="Class 7">class 7</option>
              <option value="Class 8">class 8</option>
              <option value="Class 9">class 9</option>
              <option value="Class 10">class 10</option>
              <option value="Class 11">class 11</option>
              <option value="Class 12">class 12</option>
            </select>
            <select name="All sections" id="section">
              <option value="All classes">All Sections</option>
              <option value="A"> A</option>
              <option value="B"> B</option>
              <option value="C"> C</option>
              <option value="D"> D</option>
              <option value="E"> E</option>
            </select>
            <select name="All statuses" id="status">
              <option value="All classes">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspend">Suspended</option>
              <option value="On Leave">On Leave</option>
            </select>
            <button className="search-data-btn">Search Student</button>
            <button className="add-data-btn">
              <NavLink to="/studentform">Add Student</NavLink>
            </button>
          </section>
        </div>
        <table className="data-table">
            
        </table>
      </div>
    </section>
  );
}
