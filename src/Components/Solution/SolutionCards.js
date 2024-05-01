import React from "react";
import './Solution.css'
// import logo from  '../../Images/Services/Laptop/ACER.jpg'
export default function SolutionCards(prop){
    return(
        <div className="solution-cards">
            <ul>
                <li>
                    <img className="solution-img" src={'../../Images/Services/Laptop/' + prop.img} />
                    {/* <img src={logo} /> */}
                </li>
                <div className="solution-infos">
                    <li>{prop.brand}</li>
                    <li>{prop.id}</li>
                </div>
            </ul>
            <button className="button-55" role="button">Request For Solution</button>
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