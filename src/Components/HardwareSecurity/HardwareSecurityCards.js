import React from "react";
import './HardwareSecurity.css'
import logo from  '../../Images/Services/Laptop/ACER.jpg'
export default function HardwareSecurityCards(prop){
    return(
        <div className="hardware-security-cards">
            <ul>
                <li>
                    <img className="hardware-security-img" src={'../../Images/Services/Laptop/' + prop.img} />
                    {/* <img src={logo} /> */}
                </li>
                <div className="hardware-security-infos">
                    <li>{prop.brand}</li>
                    <li>{prop.id}</li>
                </div>
            </ul>
            <button className="button-55" role="button">Request For Service</button>
            {/* <button className="my-button-1"> Button
            <span></span>
            </button> */}

            {/* <button className="my-button-2" role="button">
            Ask for Model & Price
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="4"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
            </svg>
            </button> */}
        </div>
    )
}