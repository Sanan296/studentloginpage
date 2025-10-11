import React from "react";
import "./studentcard.css";
const StudentCard = ({ name, rollNumber, course, department }) => {
  return (
    <div className="student-card">
      <p>Name: Ali Ahmad {name}</p>
      <p>Roll Number: L1F25BSIT0777{rollNumber}</p>
      <p>Course:Human Computer Interaction{course}</p>
      <p>Department: Computer Science{department}</p>
      <p>Course Attendance:<span className="percentage"> 100%</span></p>
    </div>
  )     
};
export default StudentCard;
