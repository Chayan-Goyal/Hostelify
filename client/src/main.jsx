import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx'
import Login from './components/Login.jsx';
import BookNow from './components/BookNow.jsx';
import StudentsData from './components/studentsData.jsx';
import SearchStudent from './components/searchStudent.jsx'; 
import Admin from './components/Admin.jsx';
import Nav from './components/Nav.jsx';
import Add from './components/add.jsx';
import UpdateStudent from './components/update.jsx';
import {FAQ,privacy,help} from './components/FAQ.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>


<Routes>
  <Route path="/about" element={<><Navbar/><About/></>} />
  <Route path="/abouta" element={<><Nav/><About/></>} />
  <Route path="/" element={<><Navbar/><Home/></>} />
  <Route path="/login" element={<><Navbar/><Login/></>} />
  <Route path="/book" element={<><Navbar/><BookNow/></>} />
  <Route path="/students" element={<><Nav/><StudentsData/></>} />
  <Route path='/search' element={<><Nav/><SearchStudent/></>} />
  <Route path='/admin' element={<><Nav/><Admin/></>} />
  <Route path="/add" element={<><Nav/><Add/></>} />
  <Route path= "/update" element={<><Nav/><UpdateStudent/></>} />
  <Route path="/faq" element={<><Nav/><FAQ/></>} />
  <Route path="/privacy" element={<><Nav/><privacy/></>} />
  <Route path="/help" element={<><Nav/><help/></>} />
</Routes>
<Footer/>
</BrowserRouter>
);



