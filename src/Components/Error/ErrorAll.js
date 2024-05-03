import React from "react";
import { NavLink } from "react-router-dom";
import './ErrorAll.css'


export default function ErrorAll() {
  return (
    <div style={{
        paddingTop:"150px",
        textAlign: "center",
        marginBottom: "150px"
    }}>
      <h1>Page not found !! 😭</h1>
      <h2>
        <NavLink to="/"
        className="error-all-nav-link"
        >
            Back to Home Page
        </NavLink>
      </h2>
    </div>
  );
}
