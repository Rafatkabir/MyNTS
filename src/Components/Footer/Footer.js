import React from "react";
import logo from "../../Images/NavBar/logo.png";
import "./Footer.css";
import { FaFacebook, FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-contact">
        <div>
          <img className="footer-logo" src={logo} />
        </div>
        <div className="contact-logos">
          <FaFacebook className="footer-facebook-logo" />
          <FaEnvelope className="footer-gmail-logo" />
          <FaWhatsapp className="footer-whatsapp-logo" />
          <FaLinkedin className="footer-linkedin-logo" />
        </div>
      </div>
      <div className="footer-options">
        <div className="vertical-line"></div>
        <ul>
          <li>
            <NavLink className="footer-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="laptop">
              Laptop
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="software">
              Software
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="internet-security">
              Internet Security
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="hardware-security">
              Hardware Security
            </NavLink>
          </li>
          <li className="and-sign">
            <NavLink className="footer-link" to="service-&-solution">
              Service & Solution
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="accessories">
              Accessories{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="about">
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="request">Request Product</NavLink>
          </li> */}
          <li>
            <NavLink className="footer-link" to="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <div className="vertical-line"></div>
        <ul>
          <li>
            <NavLink className="footer-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="laptop">
              Laptop
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="software">
              Software
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="internet-security">
              Internet Security
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="hardware-security">
              Hardware Security
            </NavLink>
          </li>
          <li className="and-sign">
            <NavLink className="footer-link" to="service-&-solution">
              Service & Solution
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="accessories">
              Accessories{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="about">
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="request">Request Product</NavLink>
          </li> */}
          <li>
            <NavLink className="footer-link" to="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
