import React, { useState, useEffect } from "react";
import "./HardwareSecurity.css";
import hardwareSecurityData from "./hardwareSecurityData";
import HardwareSecurityCards from "./HardwareSecurityCards";
import Loading from "../Loading/Loading"; // Assuming you have a Loading component

export default function HardwareSecurity() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to generate a random delay between 1 to 6 seconds
    const getRandomDelay = () => {
      return Math.floor(Math.random() * (3000 - 1000 + 1) + 1000); // Random delay between 1000ms (1 second) and 3000ms (6 seconds)
    };

    // Set a timeout to simulate loading
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the random delay
    }, getRandomDelay());

    // Clean up the timeout when the component unmounts or when isLoading becomes false
    return () => clearTimeout(loadingTimeout);
  }, []);

  const hardwareSecurityItems = hardwareSecurityData.map((item) => {
    return <HardwareSecurityCards key={item.id} {...item} />;
  });

  return (
    <div className="hardware-security-container">
      {isLoading ? (
        <Loading /> // Render the loading animation while isLoading is true
      ) : (
        <>
          <h1>Hardware Security</h1>
          <div className="hardware-security-grid">{hardwareSecurityItems}</div>
          <hr className="horizontal-line" />
        </>
      )}
    </div>
  );
}
