import React from "react";
import StudentCard from "../components/StudentCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Student Management System 👨‍🎓</h1>
      <StudentCard />
    </div>
  );
};

export default Home;
