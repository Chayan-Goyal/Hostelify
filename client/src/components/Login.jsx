import React from 'react'
import './css/login.css';
import { Link , useNavigate} from 'react-router-dom';
import User from '../assets/img/user.png';
import lock from '../assets/img/lock.png';
import logo from '../assets/img/logo.png'

function Login() {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/admin');
  }

  return (
    <div className="page-sep">
    <div className="login-container">
    <form onSubmit={handleSubmit} className="row-4">
        <Link to={"/"} className="lb">
          <img src={logo} alt="" id="logo" />
          </Link>
        <div className="form-child">
          <img src={User} alt="" className="icon" />
          <input
            className="credential"
            type="text"
            name="username"
            placeholder="username"
            required={true}
          />
        </div>
        <div className="form-child">
          <img src={lock} alt="" className="icon" />
          <input
            className="credential"
            type="password"
            name="password"
            placeholder="password"
            required={true}
          />
        </div>
        <div className="form-child">
          <input className="submit" type="submit" defaultValue="Login" />
        </div>
        <div style={{ margin: "auto", color: "white" }}>
        &nbsp; | &nbsp;{" "} <span className="foot">Forgot password?</span> &nbsp; | &nbsp;{" "}
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;
