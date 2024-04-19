import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import './css/Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to={"/"} >
        <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to={"/"} className="navbar-link">Home</Link></li>
          <li className="navbar-item"><Link to={"/about"} className="navbar-link">About Us</Link></li>
          <li className="navbar-item"><Link to={"/book"} className="navbar-link">Book Now</Link></li>
          <li className="navbar-item"><Link to={"/login"} className="navbar-link">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
