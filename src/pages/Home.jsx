import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
<Navbar />;
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to Student Management System</h1>
        <p>
          Manage student registrations, offered subjects and CGPA calculations all in one place.
        </p>
        <div className="home-buttons">
          <button className="btn register-btn" onClick={() => navigate("/register")}>
            Get Registered
          </button>
          <button className="btn subjects-btn" onClick={() => navigate("/subjects")}>
            Offered Subjects
          </button>
          <button className="btn cgpa-btn" onClick={() => navigate("/cgpa")}>
            CGPA Calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
