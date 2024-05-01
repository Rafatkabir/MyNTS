import React from "react";
import './Software.css'
export default function SoftwareCards(prop){
    return(
        <div className="software-cards">
            <ul>
                <li>
                    <img className="software-img" src={'../../Images/Services/Laptop/' + prop.img} alt="photo" />
                    {/* <img src={logo} /> */}
                </li>
                <div className="software-infos">
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