import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ handleDropdownChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Click to see the options"
  );
  const dropdownRef = useRef(null);

  // Function to handle click outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle the visibility of the dropdown content
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle selection of main menu item
  const handleMainMenuItemClick = (item) => {
    handleDropdownChange(item);
    setSelectedOption(item); // Set the selected option
    setIsDropdownOpen(false); // Close dropdown after selecting an item
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div style={{ fontSize: "18px" }}>Select The Service You Want</div>
      <div className="dropbtn-container">
        <button
          className="dropbtn"
          onClick={toggleDropdown}
          style={{
            fontSize:
              selectedOption === "Click to see the options"
                ? "15px"
                : "18px",
          }}
        >
          {selectedOption}
        </button>

        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="main-menu">
              <div
                className="main-menu-content"
                onClick={() => handleMainMenuItemClick("Network Services")}
              >
                Network Services
              </div>
              <div
                className="main-menu-content"
                onClick={() => handleMainMenuItemClick("Printer Services")}
              >
                Printer Services
              </div>
              <div
                className="main-menu-content"
                onClick={() => handleMainMenuItemClick("Computer Services")}
              >
                Computer Services
              </div>
              <div
                className="main-menu-content"
                onClick={() => handleMainMenuItemClick("LED Repairing")}
              >
                LED Repairing
              </div>
              <div
                className="main-menu-content"
                onClick={() => handleMainMenuItemClick("Laptop Services")}
              >
                Laptop Services
              </div>
              <div
                className="main-menu-content"
                onClick={() => handleMainMenuItemClick("IT Enabled Services")}
              >
                IT Enabled Services
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
