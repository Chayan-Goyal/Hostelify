import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
function BookNow() {
  const [studentData, setStudentData] = useState({
    reg_no:0,  
    name: "",
    contact: 0,
    email:"",
    address: "",
    gender: "",
    father:"",
    program:"",
    specialization:"",
    year:"",
    semester:"",
    cgpa:"",
    hostel:"",
    room:""
  });

  // Handle changes in input fields and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send a POST request to add a new course using Axios
    axios.post('http://localhost:5000/students', studentData)
      .then((response) => {
        console.log(studentData);
        // Successful response handling
        console.log('Student added successfully.');
        // You can redirect to another page or update the UI as needed here
      })
      .catch((error) => {
        // Error handling
        console.error('Error adding student:', error);
      });
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>

      <div className='Nam'>
  <label>Registration Number:</label>
  <input
  className="credential sub"
  placeholder="Enter Reg. No."
    type="Number"
    name="reg_no"
    value={studentData.reg_no}
    onChange={handleChange}
    required
  />
</div>

    <div className='Nam'>
      <label className='label'>Student Name:</label>
  <input
   className="credential sub"
    type="text"
    name="name"
    value={studentData.name}
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
    value={studentData.contact}
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
    value={studentData.email}
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
    value={studentData.DOB}
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
    value={studentData.address}
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
    value={studentData.gender}
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
    value={studentData.father}
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
    value={studentData.program}
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
    value={studentData.specialization}
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
    value={studentData.year}
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
    value={studentData.semester}
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
    value={studentData.cgpa}
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
    value={studentData.hostel}
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
    value={studentData.room}
    onChange={handleChange}
  />
</div>

        <button className="submit" type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default BookNow;