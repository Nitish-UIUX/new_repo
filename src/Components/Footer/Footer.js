import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { GitHub } from "@mui/icons-material";

import "./Footer.css"
const Footer = () => {
    return (
        <footer className="main-footter" id="footer">
            <div className="leftFooter">
                <h4>Become A coder from</h4>
                <a href="https://www.almabetter.com/" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/images/alma.png'} alt="alma better" />
                </a>
            </div>

            <div className="midFooter">
                <h1>Team Members.</h1>
                <p>Nitish Kumar</p>

                <p>Copyrights 2023 &copy; All rigth reserved</p>
            </div>

            <div className="rightFooter">
                <h4>Importants links </h4>
                <Link to="https://www.linkedin.com/in/nitish-kumar-b77197244">
                    <LinkedInIcon
                        sx={{ fontSize: "40px", paddingLeft: "15px" }}
                        color="primary"
                    />
                </Link>
                {/* <Link to="https://github.com/mekams/">
                    <GitHub
                        sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
                    />
                </Link> */}
            </div>
        </footer>
    );
};

export default Footer;