import React, { useState, useEffect } from "react";
import "./Contact.css";
import gmail from "../../Images/Contact/gmail.png";
import whatsapp from "../../Images/Contact/whatsapp.png";
import facebook from "../../Images/Contact/facebook.png";
import Loading from "../Loading/Loading"; // Assuming you have a Loading component
// import { useScrollToTop } from '@react-navigation/native';

export default function Contact() {
  // useScrollToTop();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to generate a random delay between 1 to 6 seconds
    const getRandomDelay = () => {
      return Math.floor(Math.random() * (4000 - 1000 + 1) + 1000); // Random delay between 1000ms (1 second) and 4000ms (6 seconds)
    };

    // Set a timeout to simulate loading
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the random delay
    }, getRandomDelay());

    // Clean up the timeout when the component unmounts or when isLoading becomes false
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <section className="contact-container">
      {isLoading ? (
        <Loading /> 
      ) : (
        <>
          <p className="contact-header">Contact Us</p>
          <p className="contact-header-lower">
            Connect with <b>Net Tech System</b> for personalized support and
            expert advice. Let's work together to turn your ideas into reality
          </p>
          <ul className="contact-grid-container">
            <li className="contact-grid-container-item">
              <a href="https://wa.me/8801752790529" target="_blank">
                <img src={whatsapp} alt="WhatsApp" />
                <i className="fab fa-whatsapp"></i>
                <p>+880 175 279 0529</p>
              </a>
            </li>
            <li className="contact-grid-container-item">
              <a href="mailto:rafarkabir@gmail.com" target="_blank">
                <img src={gmail} alt="Gmail" />
                <p>nettechbd2014@gmail.com</p>
              </a>
            </li>
            <li className="contact-grid-container-item">
              <a
                href="https://www.facebook.com/share/p/yPk1goGc1mqqj36D/?mibextid=qi2Omg"
                target="_blank"
              >
                <img src={facebook} alt="Facebook" />
                <p>NTS</p>
              </a>
            </li>
          </ul>
        </>
      )}
    </section>
  );
}
