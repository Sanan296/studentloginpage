import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Students.css";

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali Khan", age: 21, grade: "A", course: "BSCS" },
    { id: 2, name: "Ayesha Ahmed", age: 22, grade: "B+", course: "BBA" },
    { id: 3, name: "Usman Tariq", age: 20, grade: "A", course: "BSSE" },
    { id: 4, name: "Sara Malik", age: 23, grade: "A-", course: "BSIT" },
    { id: 5, name: "Hassan Raza", age: 21, grade: "D", course: "BSCS" },
  ]);

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="students-page">
      <h1>Students Page</h1>

      {students.length === 0 ? (
        <p>No Data Found 😔</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>{student.course}</td>
                <td>
                  <Link to={`/students/${student.id}`} state={{ student }}>
                    <button className="view-btn">View</button>
                  </Link>
                  <button className="delete-btn" onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
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
