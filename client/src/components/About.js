import React, { useState } from "react";
import './About.css'
import shahzaib from '../assets/shahzaib.png';
import CountryFlag from "react-country-flag";

function About() {
    const users = [
        {
            name: "Shahzaib Mirza",
            role: "Frontend Developer",
            country: "Pakistan",
            contact: "03151173672",
            email: "shazzy443@gmail.com",
            linkedin: "www.linkedin.com/in/shahzaib-mirza",
            image: shahzaib,
        },
        {
            name:"Arsal Jawaid",
            role: "Full Stack developer",
            country: "Pakistan",
            contact: "03151173672",
            email: "shazzy443@gmail.com",
            linkedin: "www.linkedin.com/in/shahzaib-mirza",
            image: shahzaib,
        },
        {
            name:"M. Murtaza",
            role: "Frontend developer",
            country: "Pakistan",
            contact: "03151173672",
            email: "shazzy443@gmail.com",
            linkedin: "www.linkedin.com/in/shahzaib-mirza",
            image: shahzaib,
        }
    ];
    return (
        <div className="about-background">
            <div className="about-title"><h2>OUR TEAM</h2></div>
            <div className="about-container">
                {users.map((user, index) => (
                    <div className="aboutuser-info" key={index}>
                        <div className="aboutuser-image">
                            <img src={user.image} alt={user.name}/>
                        </div>
                        <h3>{user.name}</h3>
                        <h2>{user.role}</h2>
                        <div className="country-info">
                            <div className="country-name">{user.country}</div>
                            <CountryFlag countryCode="pk" svg className="country-flag"/>
                        </div>
                        <div className="contact-info">
                            <p><i className="fas fa-phone"></i>:{user.contact}</p>
                        </div>
                        <div>
                            <p><i className="fas fa-envelope"></i>:{user.email}</p>
                        </div>
                        <div>
                            <p><i className="fab fa-linkedin"></i>:{user.linkedin}</p>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="footer">
                <p>&copy; 2023 AMS developers. All rights reserved</p>
            </footer>
        </div>
    );
}

export default About;