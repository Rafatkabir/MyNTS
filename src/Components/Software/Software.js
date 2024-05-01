import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading"; // Assuming you have a Loading component
import './Software.css'
import softwareData from "./softwareData";
import SoftwareCards from "./SoftwareCards";

export default function Software() {
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

  const brandNew = 
    softwareData
    .map(item => {
        return (
            <SoftwareCards
                {...item}
            />
        )
    });

  return (
    <div className="software-container">
      {isLoading ? (
        <Loading /> // Render the loading animation while isLoading is true
      ) : (
        <>
          <h1>Softwares</h1>
          <div className="software-grid">
            {brandNew}
          </div>
          {/* <div className="horizontal-line"></div> */}
          <hr className="horizontal-line" />
        </>
      )}
    </div>
  );
}
