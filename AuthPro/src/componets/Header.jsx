import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logos/logo.png";

export function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  setTimeout(() => {
    setActiveMenu(null);
  }, 5000);
  return (
    <nav>
      {/* <img src={close} alt="Image not found" /> */}
      <div className="nav-wrapper">
        <div className="logo">
          <img src={logo} alt="Icon Not Found" />
          <p>Student Management</p>
        </div>

        <ul className="nav-links">
          <li className="link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="link">
            <NavLink to="/aboutproject">About Project</NavLink>
          </li>
          <li className="link">
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
          {/* Student Dropdown */}
          <li className="dropdown">
            <span
              className="dropdown-title"
              onClick={() => toggleMenu("student")}
            >
              Students ▾
            </span>

            <ul
              className="dropdown-menu"
              style={{ display: activeMenu === "student" ? "flex" : "none" }}
            >
              <li>
                <NavLink to="/studentform">Student Form</NavLink>
              </li>

              <li>
                <NavLink to="/datatable">Student Table</NavLink>
              </li>
            </ul>
          </li>

          {/* Account Dropdown */}
          <li className="dropdown">
            <span
              className="dropdown-title"
              onClick={() => toggleMenu("account")}
            >
              Account ▾
            </span>

            <ul
              className="dropdown-menu"
              style={{ display: activeMenu === "account" ? "flex" : "none" }}
            >
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>

              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>

              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
