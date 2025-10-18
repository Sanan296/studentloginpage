import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./StudentDetails.css";

const StudentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;

  if (!student) return <p>No Student Data Found.</p>;

  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll No:</strong> {student.roll}</p>
      <p><strong>Department:</strong> {student.department}</p>

      <button className="back-btn" onClick={() => navigate("/students")}>
        ⬅ Back
      </button>
    </div>
  );
};

export default StudentDetails;
