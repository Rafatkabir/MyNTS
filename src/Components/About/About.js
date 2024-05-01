import React, { useState, useEffect } from 'react';
import picHumayun from '../../Images/About/humayun.png';
import './About.css';
import Loading from '../Loading/Loading'; // Assuming you have a Loading component

export default function About() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 1-2 seconds
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, Math.random() * 3000); // Adjust the delay as needed (1000ms = 1 second)

        // Cleanup function
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className='about-container'>
            {isLoading ? (
                <Loading /> // Render loading animation while isLoading is true
            ) : (
                <div className='personal-info'>
                    <img className='personal-info-image' src={picHumayun} alt="humayun kabir" />
                    <ul>
                        <li className='personal-info-data-contents'>Name: MD. HUMAYUN KABIR</li>
                        <li className='personal-info-data-contents'>AGE: 40</li>
                        <li className='personal-info-data-contents'>HSC FROM: NOTRE DAME COLLEGE, DHAKA</li>
                        <li className='personal-info-data-contents'>GRADUATED FROM: SUST ON CSE</li>
                    </ul>
                    <div className='personal-experience-container'>
                        EXPERIENCE:
                        <ul className='personal-experience'>
                            <li>Accountant at Haq's Bay</li>
                            <li>Site Manager at Computer Source Ltd.</li>
                            <li>Ex-CEO of Yousuf Solution</li>
                        </ul>
                        <ul>
                            <li className='personal-info-data-contents'>Contact No. 01752790529</li>
                            <li className='personal-info-data-contents'>Email: nettechbd2014@gmail.com</li>
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
