import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./StudentDetails.css";

const StudentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;

  if (!student) {
    return <p>No Student Data Found.</p>;
  }

  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <p><strong>Name: </strong> {student.name}</p>
      <p><strong>Age: </strong> {student.age}</p>
      <p><strong>Grade: </strong> {student.grade}</p>
      <p><strong>Course: </strong> {student.course}</p>

      <button onClick={() => navigate("/students")} className="back-btn">
        ⬅ Back to Students
      </button>
    </div>
  );
};

export default StudentDetails;
