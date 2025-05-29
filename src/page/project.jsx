import React, { useEffect } from "react";


import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import AllProjects from "../components/projects/allProjects";

import "./styles/projects.css";

const Projects = () => {
    document.title = `Project - Nelvin Lee`;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={30} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
                        Projects I Made While Learning React and Next.js
						</div>

						<div className="subtitle projects-subtitle">
                        Throughout my journey in web development, I have built several projects that showcase my skills in both React and Next.js. Each project reflects my dedication to learning and my passion for creating user-friendly applications. These experiences have not only strengthened my understanding of modern web technologies but also inspired me to continually improve and innovate.
                        </div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
