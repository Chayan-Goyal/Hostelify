import { Link } from 'react-router-dom';
import React from 'react';
import './css/Footer.css'; // Import the corresponding CSS file

const Footer = () => {
  return (<>
  <div className='footer-area'>
        <footer className="footer-container">
            <div className="sec">
            <div className="quicklinks">
                <h2 >Site Navigation</h2>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/book"}>Book Now</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>
            </div>
                
            </div>
            <div className="quicklinks">
                <h2>Support</h2>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>
            <div className="quicklinks">
                <h2>Contact Us</h2>
                <ul className="info">
                    <li>
                        <span><i className="fa-solid fa-phone"></i></span>
                        <p><a href="tel:+91-7073722268">7073722268</a></p>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-envelope"></i></span>
                        <p><a href="mailto:sumitsingh1339@gmail.com">sumitsingh1339@gmail.com</a></p>
                    </li>
                </ul>
            </div>

        </footer>
        </div>
        
    <div className="copyrightText">
        <p>Copyright &copy; 2024 Hostel. All Rights Reserved.</p>
    </div>
    </>
  );
};

export default Footer;








{/* <footer className="footer-container">
      <p>&copy; 2024 HOSTELIFY. All rights reserved.</p>
    </footer> */}