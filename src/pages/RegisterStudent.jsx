import React, { useState } from "react";
import "./RegisterStudent.css";

const RegisterStudent = () => {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    department: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newStudents = [...students, { ...student, id: Date.now() }];
    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
    setStudent({ name: "", roll: "", department: "" });
  };

  const handleDelete = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  return (
    <div className="register-page">
      <h2>Register New Student</h2>
      <form onSubmit={handleRegister}>
        <input
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          name="roll"
          placeholder="Roll No"
          value={student.roll}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterStudent;
