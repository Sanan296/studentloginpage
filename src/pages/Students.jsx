import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Students.css";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(saved);
  }, []);

  const handleDelete = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  return (
    <div className="students-page">
      <h1>Students List</h1>
      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.roll}</td>
                <td>{s.department}</td>
                <td>
                  <Link to={`/students/${s.id}`} state={{ student: s }}>
                    <button className="view-btn">View</button>
                  </Link>
                  <button className="delete-btn" onClick={() => handleDelete(s.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Students;
