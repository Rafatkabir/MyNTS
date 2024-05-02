import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./NavBar.css";
import logo from "../../Images/NavBar/logo.png";
import Footer from "../Footer/Footer";
export default function NavBar() {
  return (
    <div>
      <nav className="nav-container">
        <img src={logo} />
        <ul>
          <li>
            <NavLink className='nav-link' to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="laptop">Laptop</NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="software">Software</NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="internet-security">Internet Security</NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="hardware-security">Hardware Security</NavLink>
          </li>
          <li  className="and-sign">
            <NavLink className='nav-link' to="service-&-solution">
              Service <div>&</div> Solution
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="accessories">Accessories </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="about">About</NavLink>
          </li>
          {/* <li>
            <NavLink to="request">Request Product</NavLink>
          </li> */}
          <li>
            <NavLink className='nav-link' to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
