import React, { useState, useEffect } from "react";
import './InternetSecurity.css'
import internetSecurityData from "./internetSecurityData"
import InternetSecurityCards from "./InternetSecurityCards"
import Loading from "../Loading/Loading";

export default function InternetSecurity() {
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
    internetSecurityData
    .map(item => {
        return (
            <InternetSecurityCards
                {...item}
            />
        )
    });

  return (
    <div className="internet-security-container">
      {isLoading ? (
        <Loading /> // Render the loading animation while isLoading is true
      ) : (
        <>
          <h1>Brand New</h1>
          <div className="internet-security-grid">
            {brandNew}
          </div>
          {/* <div className="horizontal-line"></div> */}
          <hr className="horizontal-line" />
        </>
      )}
    </div>
  );
}
