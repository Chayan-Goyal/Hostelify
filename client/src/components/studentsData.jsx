import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentsData = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the backend API
    axios.get("http://localhost:5000/students")
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
}, []);

  if (!students) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <ul>
        {students.map((students) => (
          <li key={students._id}>
            <strong>Reg No:</strong> {students.reg_no}
            <br />
            <strong>Name:</strong> {students.name}
            <br />
           
            <strong>Course:</strong> {students.program}
            <br />
            <strong>Hostel Alloted:</strong> {students.hostel}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsData;
