import React, { useState } from "react";
import { addStudent } from "../api/studentAPI";
import "./RegisterStudent.css";

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    department: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudent(formData);
      alert("✅ Student Registered Successfully!");
      setFormData({ name: "", roll: "", department: "" });
    } catch (err) {
      console.error("Error adding student:", err);
      alert("❌ Failed to register student");
    }
  };

  return (
    <div className="register-container">
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Enter Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="roll"
          placeholder="Enter Roll No"
          value={formData.roll}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterStudent;
