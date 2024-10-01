import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import Logo from "../components/logo";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Works from "../components/homepage/workExperience";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import "./styles/homepage.css";

// Constants for logo size
const INITIAL_LOGO_SIZE = 80;
const MIN_LOGO_SIZE = 40;

const Homepage = () => {
    const [stayLogo, setStayLogo] = useState(false);
    const [logoSize, setLogoSize] = useState(INITIAL_LOGO_SIZE);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            const scroll = Math.round(window.pageYOffset);
            const newLogoSize = Math.max(INITIAL_LOGO_SIZE - (scroll * 4) / 10, MIN_LOGO_SIZE);
            setLogoSize(newLogoSize);
            setStayLogo(newLogoSize <= MIN_LOGO_SIZE);
        };

        window.addEventListener("scroll", handleScroll);
        return () => 
            window.removeEventListener("scroll", handleScroll);
    }, []);

    const logoStyle = {
        display: "flex",
        position: stayLogo ? "fixed" : "relative",
        top: stayLogo ? "3vh" : "auto",
        zIndex: 999,
        border: stayLogo ? "1px solid white" : "none",
        borderRadius: stayLogo ? "50%" : "none",
        boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
       '@media (max-width: 400px)': { 
        width: "50px",
        height: "50px",
        padding: "50px",
    }
       };

    const handleImageError = (e) => {
        e.target.src = "logo.png"; 
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Nelvin Lee</title>
                <meta name="description" content="Homepage description" />
                <meta name="keywords" content="homepage, portfolio, projects" />
            </Helmet>

            <div className="page-content">
                <NavBar active="home" />
                <div className="content-wrapper">
                    <div className="homepage-logo-container">
                        <div style={logoStyle}>
                            <Logo width={logoSize} link={false} />
                        </div>
                    </div>

                    <div className="homepage-container">
                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title ">
                                {INFO.homepage.title}
                                </div>
                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description}
                                </div>
                            </div>

                            <div className="homepage-first-area-right-side">
                                <div className="homepage-image-container">
                                    <div className="homepage-image-wrapper">
                                        <img
                                            src="me.jpg"
                                            alt="About"
                                            className="homepage-image"
                                            onError={handleImageError}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="homepage-socials">
                            <a href="https://github.com/Nyx09" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} className="homepage-social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/nelvin-lee/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} className="homepage-social-icon" />
                            </a>
                            <a href="mailto:leenelvin9@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                                <FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon" />
                            </a>
                            <div className="homepage-btn-download">
                            <a
                                href="/resume.pdf" 
                                download="Nelvin_Lee_Resume.pdf" 
                            >
                                <button className="download-button">
                                    Download Resume
                                </button>
                            </a>
                        </div>
                        </div>
                        <div className="homepage-projects">
                            <AllProjects />
                        </div>
                        <div className="homepage-works">
                            <Works />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                   
                </div>
            </div>
        </React.Fragment>
    );
};

export default Homepage;
