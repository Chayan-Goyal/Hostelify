import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import * as React from 'react';
import './css/Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to={"/admin"} >
        <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to={"/admin"} className="navbar-link">Home</Link></li>
          <li className="navbar-item"><Link to={"/abouta"} className="navbar-link">About Us</Link></li>
          <li className="navbar-item"><Link to={"/students"} className="navbar-link">Students Data</Link></li>
          <li className="navbar-item"><Link to={"/search"} className="navbar-link">Search Student</Link></li>
          <li className="navbar-item"><Link to={"/add"} className="navbar-link">Add Student</Link></li>
          <li className="navbar-item"><Link to={"/"} className="navbar-link">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;