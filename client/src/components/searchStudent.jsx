import React, { useState } from 'react';
import axios from 'axios';
import './css/login.css'

function SearchStudent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [student, setStudent] = useState(null);

  const handleSearch = () => {
    // Make an API request to fetch student details based on searchTerm
    axios.get(`http://localhost:5000/students/${searchTerm}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  };

  return (
    <div>
      <label className='label'>Enter registration No.</label>
      <input
        type="text"
        placeholder="Enter student name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='submit' onClick={handleSearch}>Search.</button>

      {student && (
        <div>
         <h1>Student Details</h1>
          <ul>
          {student.map((students)=>(
            <li key={students._id}>
          <strong>Reg No:</strong> {students.reg_no}<br />
          <strong>Name:</strong> {students.name}<br />
          <strong>Gender:</strong> {students.gender}<br />
          <strong>Contact:</strong> {students.contact}<br />
          <strong>E-mail:</strong> {students.email}<br />
          <strong>Father's Name:</strong> {students.father}<br />
          <strong>Date of birth:</strong> {students.dob}<br />
          <strong>Address:</strong> {students.address}<br />
          <strong>Course:</strong> {students.program}<br />
          <strong>Specialization:</strong> {students.specialization}<br />
          <strong>Program Year:</strong> {students.year}<br />
          <strong>Semester:</strong> {students.semester}<br />
          <strong>CGPA:</strong> {students.cgpa}<br />
           <strong>Hostel:</strong> {students.hostel}<br />
          <strong>Room No:</strong> {students.room}<br /><br/>
          {/* <div>
            <button className='submit' >Update details</button>
            <button className='submit' >Delete student</button>
          </div> */}
          </li>
          ))}
      </ul>
    </div>
      )}
    </div>)
     
}

export default SearchStudent;
