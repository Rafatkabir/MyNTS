import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import Loading from "../Loading/Loading"; // Assuming you have a Loading component
import "./Request.css";
import TextInput from "../Forms/TextInput";
import axios from "axios";
import Dropdown from "../Dropdown/Dropdown"; // Import the Dropdown component

export default function Request() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_no: "",
    service_name: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false); // New state for submission status

  useEffect(() => {
    // Simulate loading with a timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Navigate to homepage after 2 seconds when submission is successful
    if (submitted) {
      const redirectTimeout = setTimeout(() => {
        // Redirect to homepage using NavLink
        window.location.href = "/";
      }, 2000);

      // Clean up timeout on unmount
      return () => clearTimeout(redirectTimeout);
    }
  }, [submitted]);

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleDropdownChange = (value) => {
    setFormData({
      ...formData,
      service_name: value,
    });
  };

  const handleSubmit = async () => {
    // Form submission logic
    try {
      await axios.post("http://localhost:5000/submit-form", formData);
      setSubmitted(true); // Set submission status to true
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="request-container">
      {isLoading ? (
        <Loading /> // Render the loading animation while isLoading is true
      ) : (
        <>
          {!submitted ? ( // Check if the form is not submitted
            <div className="form-name">
              Request Form
              <p>Fill up the form and click on "Submit"</p>
              <p>We will contact you in due time (typically 2-3 working days!!)</p>
            </div>
          ) : (
            <div className="after-submission-text">
              <p>Your Submission has been accepted. Redirecting...</p>
              `If it doesn't redirect, please click the `
              <NavLink
              className="after-submit-nav-link"
              to="/">
              Home
              </NavLink>
             ` button to go to the homepage`
            </div>
          )}
          {!submitted && ( // Render the form if it's not submitted
            <div className="form-request">
              <TextInput
                labelText="First Name"
                isRequired={true}
                onInputChange={(value) => handleInputChange("first_name", value)}
              />
              <TextInput
                labelText="Last Name"
                isRequired={true}
                onInputChange={(value) => handleInputChange("last_name", value)}
              />
              <TextInput
                labelText="Email"
                isRequired={true}
                onInputChange={(value) => handleInputChange("email", value)}
              />
              <TextInput
                labelText="Contact No"
                isRequired={true}
                onInputChange={(value) => handleInputChange("contact_no", value)}
              />
              <Dropdown handleDropdownChange={handleDropdownChange} />
              <label style={{ fontSize: "18px" }}>Message</label>
              <div className="form-control">
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required={true}
                  rows={10}
                  style={{
                    width: "480px",
                    fontSize: "18px",
                  }}
                  className="form-message"
                />
              </div>
              <button className="button-86" id="request-submit-btn" onClick={handleSubmit}>
                Request
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
