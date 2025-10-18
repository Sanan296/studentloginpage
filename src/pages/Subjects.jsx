import React from "react";
import "./Subjects.css";

const Subjects = () => {
  const subjects = [
    "Programming Fundamentals",
    "Data Structures",
    "Operating Systems",
    "Database Systems",
    "Computer Networks",
  ];

  return (
    <div className="subjects-page">
      <h2>Offered Subjects</h2>
      <ul>
        {subjects.map((subj, i) => (
          <li key={i}>{subj}</li>
        ))}
      </ul>
    </div>
  );
};

export default Subjects;
