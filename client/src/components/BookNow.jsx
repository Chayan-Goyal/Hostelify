import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAsyncValue } from "react-router-dom";
function BookNow() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  // Handlers for button clicks
  const handleAddClick = () => {
    setShowAddForm(true);
    setShowUpdateForm(false);
    setShowDeleteForm(false);
  };

  const handleUpdateClick = () => {
    setShowAddForm(false);
    setShowUpdateForm(true);
    setShowDeleteForm(false);
  };

  const handleDeleteClick = () => {
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(true);
  };
  const [studentData, setStudentData] = useState({
    reg_no: 0,
    name: "",
    contact: 0,
    email: "",
    gender: "",
    hostel: "",
    room: "",
  });

  // Handle changes in input fields and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Handle form submission
  const handleSubmit1 = (e) => {
    e.preventDefault();

    // Send a POST request to add a new course using Axios
    axios
      .post("http://localhost:5001/book", studentData)
      .then((response) => {
        console.log(studentData);
        // Successful response handling
        console.log("Student added successfully.");
        // You can redirect to another page or update the UI as needed here
      })
      .catch((error) => {
        // Error handling
        console.error("Error adding student:", error);
      });
    alert("Successfully Added!");
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    // Send a POST request to add a new course using Axios
    axios
      .patch("http://localhost:5001/book/"+studentData.reg_no, studentData)
      .then((response) => {
        console.log(studentData);
        // Successful response handling
        console.log("Student updated successfully.");
        // You can redirect to another page or update the UI as needed here
      })
      .catch((error) => {
        // Error handling
        console.error("Error adding student:", error);
      });
    alert("Successfully Updated!");
  };
  

  
  const handleSubmit3 = (e) => {
    e.preventDefault();

    // Send a POST request to add a new course using Axios
    axios
      .delete("http://localhost:5001/book/"+studentData.reg_no, studentData)
      .then((response) => {
        console.log(studentData);
        // Successful response handling
        console.log("Student deleted successfully.");
        // You can redirect to another page or update the UI as needed here
      })
      .catch((error) => {
        // Error handling
        console.error("Error adding student:", error);
      });
    alert("Successfully DELETED!");
  };

  return (
   
    <div>
      <div style={{display:"flex",justifyContent:"space-around", padding:"40px"}}>
        <button  className="btn" style={{ height:"50px", fontSize:"20px", border:"2px solid gray", borderRadius:"8px", backgroundColor:"black",color:"white", padding:"5px 10px" }}   onClick={handleAddClick}>Add Student</button>
        <button  className="btn" style={{ height:"50px", fontSize:"20px", border:"2px solid gray", borderRadius:"8px", backgroundColor:"black",color:"white", padding:"5px 10px" }}onClick={handleUpdateClick}>Update Student</button>
        <button className="btn"  style={{ height:"50px", fontSize:"20px", border:"2px solid gray", borderRadius:"8px", backgroundColor:"black",color:"white", padding:"5px 10px" }}onClick={handleDeleteClick}>Delete Student</button>
      </div>
      {showAddForm &&  <div>
      <h1>Add Student</h1>
      <form action="/book" method="post" onSubmit={handleSubmit1}>
        <div className="Nam">
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

        <div className="Nam">
          <label className="label">Student Name:</label>
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

        <div className="Nam">
          <label className="label">Email address:</label>
          <input
            className="credential sub"
            type="text"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            placeholder="enter email address"
          />
        </div>

        <div className="Nam">
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

        <div className="Nam">
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

        <button className="submit" type="submit">
          Add Student
        </button>
      </form>
    </div>}
      {showUpdateForm &&  <div>
      <h1>Update Student</h1>
      <form action="/book" method="patch" onSubmit={handleSubmit2}>
        <div className="Nam">
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

        <div className="Nam">
          <label className="label">Student Name:</label>
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

        <div className="Nam">
          <label className="label">Email address:</label>
          <input
            className="credential sub"
            type="text"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            placeholder="enter email address"
          />
        </div>

        <div className="Nam">
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

        <div className="Nam">
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

        <button className="submit" type="submit">
          Update Student
        </button>
      </form>
    </div>}
      {showDeleteForm && <div>
      <h1>Delete Student</h1>
      <form action="/book" method="delete" onSubmit={handleSubmit3}>
        <div className="Nam">
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


        <button className="submit" type="submit">
          Delete Student
        </button>
      </form>
    </div>}
    </div>
  );
}

export default BookNow;
