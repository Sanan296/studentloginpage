import axios from "axios";

// Base URL for your backend
const API_URL = "http://localhost:5000/students";

// 🧩 CRUD Operations

// GET all students
export const getStudents = () => axios.get(API_URL);

// GET a single student by ID
export const getStudentById = (id) => axios.get(`${API_URL}/${id}`);

// POST - Add a new student
export const addStudent = (student) => axios.post(API_URL, student);

// PUT - Update a student
export const updateStudent = (id, student) => axios.put(`${API_URL}/${id}`, student);

// DELETE - Remove a student
export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);
