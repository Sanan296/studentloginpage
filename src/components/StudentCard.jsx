import React from "react";
import "./StudentCard.css";

const StudentCard = () => {
  const students = [
    { name: "Ali Khan", rollNumber: "1010", course: "BSCS", department: "Computer Science" },
    { name: "Ayesha Ahmed", rollNumber: "1025", course: "BBA", department: "Business Administration" },
    { name: "Usman Tariq", rollNumber: "0103", course: "BSSE", department: "Software Engineering" },
     { name: "Sara Malik", rollNumber: "0509", course: "BSIT", department: "Computer Science" },
    { name: "Hassan Raza", rollNumber: "0110", course: "BSCS", department: "Computer Science" },
  ];

  return (
    <div className="cards-container">
      {students.map((student, index) => (
        <div key={index} className="student-card">
          <h3>{student.name}</h3>
          <p><strong>Roll No:</strong> {student.rollNumber}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Department:</strong> {student.department}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
