// Update.jsx

import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [reg_no, setReg_no] = useState('');
  const [student, setStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState({
    name: '',
    gender: '',
    contact: '',
    email: '',
    father: '',
    dob: '',
    address: '',
    program: '',
    specialization: '',
    year: '',
    semester: '',
    cgpa: '',
    hostel: '',
    room: ''
  });

  const handleSearch = () => {
    axios.get(`http://localhost:5000/students/${reg_no}`)
      .then((response) => {
        setStudent(response.data);
        setUpdatedStudent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent({ ...updatedStudent, [name]: value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/students/${reg_no}`, updatedStudent)
      .then((response) => {
        console.log('Student updated successfully:', response.data);
        // Optionally, you can redirect the user or perform any other action upon successful update
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };

  return (
    <div>
      <h1>Update Student Details</h1>
      <label>
        Enter Registration Number:
        <input
          type="text"
          value={reg_no}
          onChange={(e) => setReg_no(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      {student && (
        <div>
          <h2>Student Details</h2>
          {/* Display student details */}
          <form onSubmit={handleUpdate}>
            {/* Populate form fields with student details */}

<div className='Nam'>
  <label className='label'>Student Name:</label>
  <input
    className="credential sub"
    type="text"
    name="name"
    value={updatedStudent.name}
    onChange={handleChange}
    placeholder="Name"
    required
  />
</div>

<div className='Nam'>
  <label>Contact:</label>
  <input
    className="credential sub"
    placeholder="Enter Mob. No."
    type="number"
    name="contact"
    value={updatedStudent.contact}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label className='label'>Email address:</label>
  <input
    className="credential sub"
    type="text"
    name="email"
    value={updatedStudent.email}
    onChange={handleChange}
    placeholder="enter email address"
  />
</div>

<div className='Nam'>
  <label>Date of Birth:</label>
  <input
    className="credential sub"
    placeholder="Enter DOB"
    type="date"
    name="dob"
    value={updatedStudent.dob}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label>Address:</label>
  <input
    className="credential sub"
    placeholder="Enter address"
    type="text"
    name="address"
    value={updatedStudent.address}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label>Gender:</label>
  <input
    className="credential sub"
    placeholder="Select Gender"
    type="text"
    name="gender"
    value={updatedStudent.gender}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label>Father's Name:</label>
  <input
    className="credential sub"
    placeholder="Enter Father name"
    type="text"
    name="father"
    value={updatedStudent.father}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label>Course:</label>
  <input
    className="credential sub"
    placeholder="Enter Course"
    type="text"
    name="program"
    value={updatedStudent.program}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  Specialization:
  <input
    className="credential sub"
    placeholder="Enter specialization"
    type="text"
    name="specialization"
    value={updatedStudent.specialization}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label>Program Year:</label>
  <input
    className="credential sub"
    placeholder="Enter year"
    type="text"
    name="year"
    value={updatedStudent.year}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label>Semester:</label>
  <input
    className="credential sub"
    placeholder="Enter Semester"
    type="text"
    name="semester"
    value={updatedStudent.semester}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label>CGPA:</label>
  <input
    className="credential sub"
    placeholder="Enter your current CGPA"
    type="number"
    name="cgpa"
    value={updatedStudent.cgpa}
    onChange={handleChange}
    required
  />
</div>

<div className='Nam'>
  <label>Hostel Preference:</label>
  <input
    className="credential sub"
    placeholder="Enter desired Hostel "
    type="text"
    name="hostel"
    value={updatedStudent.hostel}
    onChange={handleChange}
  />
</div>

<div className='Nam'>
  <label>Room No. Preferred:</label>
  <input
    className="credential sub"
    placeholder="Enter Room. NO."
    type="text"
    name="room"
    value={updatedStudent.room}
    onChange={handleChange}
  />
</div>

            {/* Render other fields similarly */}
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update;
