import React, { useState, useEffect } from "react";
import { getStudents, deleteStudent, updateStudent } from "../api/studentAPI";
import "./Students.css";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editData, setEditData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");

  // Fetch data from JSON Server
  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students:", err);
      alert("⚠️ Failed to fetch students. Is JSON Server running?");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  // Edit student
  const handleEditClick = (student) => {
    setEditingStudent(student.id);
    setEditData({ ...student });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    await updateStudent(id, editData);
    setEditingStudent(null);
    fetchStudents();
  };

  // Filter + Search logic
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter === "All" || student.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  // Extract unique departments for dropdown
  const uniqueDepartments = [
    "All",
    ...new Set(students.map((s) => s.department))
  ];

  return (
    <div className="students-page">
      <h2>Student List</h2>

      {/* Search and Filter Bar */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name or roll no..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          {uniqueDepartments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Student Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>
                  {editingStudent === student.id ? (
                    <input
                      name="name"
                      value={editData.name}
                      onChange={handleEditChange}
                    />
                  ) : (
                    student.name
                  )}
                </td>

                <td>
                  {editingStudent === student.id ? (
                    <input
                      name="roll"
                      value={editData.roll}
                      onChange={handleEditChange}
                    />
                  ) : (
                    student.roll
                  )}
                </td>

                <td>
                  {editingStudent === student.id ? (
                    <input
                      name="department"
                      value={editData.department}
                      onChange={handleEditChange}
                    />
                  ) : (
                    student.department
                  )}
                </td>

                <td>
                  {editingStudent === student.id ? (
                    <>
                      <button
                        className="save-btn"
                        onClick={() => handleUpdate(student.id)}
                      >
                        Save
                      </button>
                      <button
                        className="cancel-btn"
                        onClick={() => setEditingStudent(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="edit-btn"
                        onClick={() => handleEditClick(student)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", color: "#777" }}>
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
