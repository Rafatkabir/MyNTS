import React, { useState, useEffect } from "react";
import './Laptop.css';
import { NavLink } from "react-router-dom";
import laptopData from "./laptopData";
import LaptopCards from "./LaptopCards";
import Loading from "../Loading/Loading"; 

export default function Laptop() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(""); // Initial value is ""

    useEffect(() => {
        // Simulate loading for 1-2 seconds
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, Math.random() * 3000); // Adjust the delay as needed (1000ms = 1 second)

        // Cleanup function
        return () => clearTimeout(timeout);
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

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
                    <div className="buttons-container">
                        <button onClick={() => handleCategoryChange("brandNew")}>Brand New</button>
                        <button onClick={() => handleCategoryChange("secondHand")}>Second Hand</button>
                    </div>
                    {selectedCategory !== "" && (
                        <>
                            <h1>{selectedCategory === "brandNew" ? "Brand New Laptop" : "Second Hand Laptop"}</h1>
                            <div className="laptop-grid">
                                {selectedCategory === "brandNew" ? brandNew : secondHand}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
