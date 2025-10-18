import React, { useState } from "react";
import "./CGPA.css";

const CGPA = () => {
  const [grades, setGrades] = useState([""]);
  const [result, setResult] = useState(null);

  const handleGradeChange = (index, value) => {
    const newGrades = [...grades];
    newGrades[index] = value;
    setGrades(newGrades);
  };

  const handleAddSubject = () => {
    setGrades([...grades, ""]);
  };

  const handleRemoveSubject = (index) => {
    const newGrades = grades.filter((_, i) => i !== index);
    setGrades(newGrades);
  };

  const handleCalculate = () => {
    if (grades.length === 0) {
      setResult("Please add at least one subject.");
      return;
    }

    const points = { A: 4, "B+": 3.5, B: 3, C: 2, D: 1, F: 0 };
    const total = grades.reduce((sum, g) => sum + (points[g] || 0), 0);
    setResult((total / grades.length).toFixed(2));
  };

  return (
    <div className="cgpa-page">
      <h2>CGPA Calculator</h2>

      <div className="subjects-list">
        {grades.map((grade, index) => (
          <div key={index} className="subject-row">
            <select
              value={grade}
              onChange={(e) => handleGradeChange(index, e.target.value)}
            >
              <option value="">Select Grade</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>

            <button
              className="remove-btn"
              onClick={() => handleRemoveSubject(index)}
              disabled={grades.length === 1}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cgpa-buttons">
        <button className="add-btn" onClick={handleAddSubject}>
          + Add Subject
        </button>
        <button className="calc-btn" onClick={handleCalculate}>
          Calculate CGPA
        </button>
      </div>

      {result && (
        <h3 className="cgpa-result">
          {isNaN(result) ? result : `Your CGPA: ${result}`}
        </h3>
      )}
    </div>
  );
};

export default CGPA;
