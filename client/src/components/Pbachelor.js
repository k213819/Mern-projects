import "./Pbachelor.css";
import NavBar from './NavBar';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Pbachelor() {
    const [cardsVisible, setCardsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCardsVisible(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            <NavBar />
            <div className="pContainer">
                <div className={`bachelorcard ${cardsVisible ? 'card-appear' : ''}`}>
                    <img src="bachelor1.jpg" alt="Bachelorpic"/>
                    <h1>Join us as a Bachelor</h1>
                    <ul>
                        <li><i className="fas fa-users"></i>Members: 10000</li>
                        <li><i className="fas fa-chart-line"/>Success-ratio: 89%</li>
                    </ul>
                    <Link to="/signup"><button>Register Now</button></Link>
                </div>
                <div className={`bachelorcard ${cardsVisible ? 'card-appear' : ''}`}>
                <img src="parent.jpg" alt="Parentpic"/>
                    <h1>Join us as a Parent</h1>
                    <ul>
                        <li><i className="fas fa-users"></i>Members: 5000</li>
                        <li><i className="fas fa-chart-line"/>Success-ratio: 73%</li>
                    </ul>
                    <Link to='/registration'><button>Register Now</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Pbachelor;