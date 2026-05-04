import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};