import React, { useState, useEffect } from "react";
import "./Accessories.css";
import accessoriesData from "./accessoriesData";
import AccessoriesCards from "./AccessoriesCards";
import Loading from "../Loading/Loading"; // Assuming you have a Loading component

export default function Accessories() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Generate a random delay between 1 to 6 seconds
    const randomDelay = Math.random() * 5000 + 1000; // Random delay between 1000ms (1 second) and 3000ms (6 seconds)
    
    // Simulate loading for the random delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, randomDelay);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

  const hardwareAccessories = accessoriesData
    .filter((item) => item.type === "Hardware Accessories")
    .map((item) => <AccessoriesCards {...item} />);

  const networkAccessories = accessoriesData
    .filter((item) => item.type === "Network  Accessories")
    .map((item) => <AccessoriesCards {...item} />);

  const fiberAccessories = accessoriesData
    .filter((item) => item.type === "Fiber Accessories")
    .map((item) => <AccessoriesCards {...item} />);

  return (
    <div className="accessories-container">
      {isLoading ? (
        <Loading /> // Render loading animation while isLoading is true
      ) : (
        <>
          <h1>Accessories</h1>
          <hr className="horizontal-line" />
          <h1>Hardware Accessories</h1>
          <div className="accessories-grid">{hardwareAccessories}</div>
          <hr className="horizontal-line" />
          <h1>Network Accessories</h1>
          <div className="accessories-grid">{networkAccessories}</div>
          <hr className="horizontal-line" />
          <h1>Fiber Accessories</h1>
          <div className="accessories-grid">{fiberAccessories}</div>
          <hr className="horizontal-line" />
        </>
      )}
    </div>
  );
}
