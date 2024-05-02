import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import "./Home.css";
import logo from "../../Images/Homepage/SlideShow/1.png";
import slideShowData from "./slideShowData";
import MyCalendar from "./MyCalendar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getRandomDelay = () => {
      return Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
    };

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, getRandomDelay());

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideShowData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="home-container">
          <div className="home-intro">
            {slideShowData.map((item, index) => (
              <img
                key={index}
                className={`slide-show-img ${
                  index === currentSlide ? "active" : ""
                }`}
                src={`../../Images/Homepage/SlideShow/${item.img}`}
                alt={`Slide ${index}`}
              />
            ))}
            <div className="calendar-container">
              <MyCalendar />
            </div>
          </div>
          <div>
            <p>jdjdjjd</p>
            <p>jdjdjjd</p>
            <p>jdjdjjd</p>
            <p>jdjdjjd</p>
          </div>
        </div>
      )}
    </div>
  );
}
