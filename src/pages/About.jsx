import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Student Management System</h1>
        <p className="intro">
          The Student Management System (SMS) is an advanced web application designed to help educational institutions manage student information efficiently. It provides an interactive Admin Panel where administrators can register students, track their data, and calculate academic performance.
        </p>

        <h2>🎯 Key Features</h2>
        <ul className="features-list">
          <li><strong>Admin Authentication:</strong> Secure login and signup using browser local storage.</li>
          <li><strong>Student Registration:</strong> Add, edit, or delete student records dynamically.</li>
          <li><strong>Subjects Management:</strong> Manage and view offered subjects for each department.</li>
          <li><strong>CGPA Calculator:</strong> Calculate student CGPA based on selected grades.</li>
          <li><strong>Local Storage Integration:</strong> Data is stored temporarily in the browser for testing and demo purposes.</li>
          <li><strong>Responsive Design:</strong> Works smoothly on both desktop and mobile devices.</li>
        </ul>

        <h2>💡 Purpose</h2>
        <p>
          This project demonstrates how a simple yet effective web-based management system can be built using React. It helps administrators save time by centralizing student information, reducing manual paperwork, and improving overall efficiency.
        </p>

        <h2>🛠️ Technologies Used</h2>
        <ul className="tech-list">
          <li>React JS (Frontend Framework)</li>
          <li>React Router DOM (Page Navigation)</li>
          <li>Local Storage (Temporary Database)</li>
          <li>CSS3 (Custom Styling)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
