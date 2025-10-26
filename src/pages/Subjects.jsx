import React, { useState } from "react";
import "./Subjects.css";

const Subjects = () => {
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedSemester, setSelectedSemester] = useState(null);

  // Define subjects data
  const subjectsData = {
    CS: {
      1: ["Programming Fundamentals", "Calculus I", "ICT", "English", "Applied Physics"],
      2: ["OOP", "Discrete Mathematics", "Database Systems", "Pakistan Studies", "Linear Algebra"],
      3: ["Data Structures", "Operating Systems", "Software Engineering", "Communication Skills", "Statistics"],
      4: ["Web Development", "Computer Networks", "Numerical Computing", "Technical Writing", "Probability"],
      5: ["Algorithm Design", "AI Basics", "Database Administration", "Mobile Computing", "Computer Architecture"],
      6: ["Compiler Construction", "Machine Learning", "Data Warehousing", "Entrepreneurship", "Research Methods"],
      7: ["Parallel Computing", "Network Security", "Cloud Computing", "Professional Ethics", "UI/UX Design"],
      8: ["Final Year Project II", "Big Data", "Cyber Security", "Blockchain Basics", "Project Management"]
    },
    SE: {
      1: ["Programming Fundamentals", "Calculus I", "ICT", "English", "Applied Physics"],
      2: ["OOP", "Discrete Structures", "Database Systems", "Pakistan Studies", "Linear Algebra"],
      3: ["Data Structures", "Software Design", "Computer Architecture", "Communication Skills", "Statistics"],
      4: ["Software Requirements", "Human Computer Interaction", "Numerical Computing", "Technical Writing", "Probability"],
      5: ["Software Testing", "AI Basics", "Web Engineering", "Mobile Computing", "Software Construction"],
      6: ["Software Quality", "Machine Learning", "Project Management", "Entrepreneurship", "Research Methods"],
      7: ["Software Reuse", "Network Security", "Cloud Computing", "Professional Ethics", "UI/UX Design"],
      8: ["Final Year Project II", "Software Maintenance", "Cyber Security", "Blockchain Basics", "Agile Methods"]
    },
    AI: {
      1: ["Intro to AI", "Linear Algebra", "ICT", "English", "Programming Fundamentals"],
      2: ["OOP", "Probability", "Database Systems", "Pakistan Studies", "Discrete Math"],
      3: ["Data Structures", "Machine Learning I", "Operating Systems", "Communication Skills", "Statistics"],
      4: ["Deep Learning", "Computer Vision", "Web Development", "Technical Writing", "Numerical Analysis"],
      5: ["Reinforcement Learning", "Data Science", "AI Ethics", "Mobile Computing", "Algorithm Design"],
      6: ["NLP", "Cloud AI", "Robotics", "Entrepreneurship", "Research Methods"],
      7: ["Computer Graphics", "Network Security", "Big Data AI", "Professional Ethics", "AI Optimization"],
      8: ["Final Year Project II", "AI in Healthcare", "AI for IoT", "Blockchain Basics", "Project Management"]
    }
  };

  return (
    <div className="subjects-container">
      <h2>Offered Subjects</h2>

      {/* Department Selector */}
      <div className="dropdown-container">
        <label>Select Department:</label>
        <select
          value={selectedDept}
          onChange={(e) => {
            setSelectedDept(e.target.value);
            setSelectedSemester(null);
          }}
        >
          <option value="">-- Choose Department --</option>
          <option value="CS">Computer Science (CS)</option>
          <option value="SE">Software Engineering (SE)</option>
          <option value="AI">Artificial Intelligence (AI)</option>
        </select>
      </div>

      {/* Show Semesters if Department Selected */}
      {selectedDept && (
        <div className="semester-section">
          <h3>{selectedDept} Department – Select a Semester</h3>
          <div className="semester-buttons">
            {[...Array(8).keys()].map((i) => (
              <button
                key={i + 1}
                onClick={() => setSelectedSemester(i + 1)}
                className={selectedSemester === i + 1 ? "active-semester" : ""}
              >
                Semester {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Show Courses for Selected Semester */}
      {selectedSemester && selectedDept && (
        <div className="courses-section">
          <h4>
            {selectedDept} - Semester {selectedSemester} Courses
          </h4>
          <ul>
            {subjectsData[selectedDept][selectedSemester].map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Subjects;
