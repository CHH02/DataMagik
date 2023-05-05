import React from "react";
import { Link } from 'react-router-dom';
import BannerImage from '../assets/texasHoldEmLogo.jpg';
import '../styles/Home.css';

const Home = () => {
    console.log("hello there")
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Data Magik</h1>
                <p>Make All Your Data Problems... Disappear.</p>
                <Link to='/menu'>
                    <button>Download</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;