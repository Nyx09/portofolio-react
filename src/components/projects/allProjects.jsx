import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProject.css";

const AllProjects = () => {
	
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<Project
					key={index}
					logo={project.logo}
					title={project.title}
					description={project.description}
					linkText={project.linkText}
					link={project.link}
				/>
			))}
		</div>
	);
};

export default AllProjects;
