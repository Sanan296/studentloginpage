import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="nav-icon">🎓</span>
        <h2>Student Management System</h2>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/students">Students</NavLink></li>
        <li><NavLink to="/subjects">Subjects</NavLink></li>
        <li><NavLink to="/cgpa">CGPA</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
      </ul>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
