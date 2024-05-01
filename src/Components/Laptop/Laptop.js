import React, { useState, useEffect } from "react";
import './Laptop.css';
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import laptopData from "./laptopData";
import LaptopCards from "./LaptopCards";
import Loading from "../Loading/Loading"; 

export default function Laptop() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 1-2 seconds
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, Math.random() * 3000); // Adjust the delay as needed (1000ms = 1 second)

        // Cleanup function
        return () => clearTimeout(timeout);
    }, []);

    const brandNew = laptopData
        .filter(item => item.type === 1)
        .map(item => (
            <div key={item.id}>
                <LaptopCards {...item} />
            </div>
        ));

    const secondHand = laptopData
        .filter(item => item.type === 2)
        .map(item => (
            <div key={item.id}>
                <LaptopCards {...item} />
            </div>
        ));

    return (
        <div className="laptop-container">
            {isLoading ? (
                <Loading /> // Render loading animation while isLoading is true
            ) : (
                <>
                    <h1>Brand New Laptop</h1>
                    <div className="laptop-grid">
                        {brandNew}
                    </div>
                    <hr className="horizontal-line" />
                    <h1>Second Hand Laptop</h1>
                    <div className="laptop-grid">
                        {secondHand}
                    </div>
                </>
            )}
        </div>
    );
}
