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
            </select>
            <select name="All sections" id="section">
              <option value="All classes">All Sections</option>
              <option value="A"> A</option>
              <option value="B"> B</option>
              <option value="C"> C</option>
              <option value="D"> D</option>
            </select>
            <select name="All statuses" id="status">
              <option value="All classes">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspend">Suspend</option>
              <option value="On Leave">On Leave</option>
            </select>
            <button className="search-data-btn">Search Student</button>
            <button className="add-data-btn">
              <NavLink to="/studentform">Add Student</NavLink>
            </button>
          </section>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>STUDENT</th>
              <th>CLASS</th>
              <th>SECTION</th>
              <th>ROLL NO</th>
              <th>PARENT CONTACTS</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="" alt="Image Not Found" />
              </td>
              <td>Class 1</td>
              <td>Section A</td>
              <td>34</td>
              <td>+91 99034 38474</td>
              <td>Active</td>
              <td className="student-actions"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
