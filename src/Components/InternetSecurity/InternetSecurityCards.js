import React from "react";
import './InternetSecurity.css'
import logo from  '../../Images/Services/Laptop/ACER.jpg'
import { NavLink } from "react-router-dom";
export default function InternetSecurityCards(prop){
    return(
        <div className="internet-security-cards">
            <ul>
                <li>
                    <img className="internet-security-img" src={'../../Images/Services/Laptop/' + prop.img} />
                    {/* <img src={logo} /> */}
                </li>
                <div className="internet-security-infos">
                    <li>{prop.brand}</li>
                    <li>{prop.id}</li>
                </div>
            </ul>
            <NavLink to="/request" className="ask-for-price">
            <button className="button-55" role="button">Request For Service</button>
            </NavLink>
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