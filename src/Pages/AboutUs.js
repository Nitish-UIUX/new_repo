
// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import aboutCV from "../Utils/Images/Resume.jpg";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <div className="content-container">
                <div className="image-container">
                    <img src={aboutCV} alt="Company Logo" />
                    
                </div>
                <div className="text-container">
                    <p>
                        Hi, I'm Nitish, a <span className="highlight">BCA</span> graduate currently pursuing my <span className="highlight">MCA</span>. I specialize in <span className="highlight">frontend development</span> and have recently joined <span className="highlight">AlmaBetter</span> to advance my skills as a <span className="highlight">Full Stack Developer</span>. Passionate about creating user-friendly interfaces, I'm on a journey to blend creativity with technology. Excited to contribute and make a mark in the ever-evolving world of web development!
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;

