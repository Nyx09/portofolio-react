import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../card";

import "./styles/workExperience.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="dana.png"
								alt="Dana"
								className="work-image"
							/>
							<div className="work-title">Dana Indonesia</div>
							<div className="work-subtitle">
								Software Engineer Development in Test
							</div>
							<div className="work-duration">2024 - 2024 </div>
						</div>

						<div className="work">
							<img
								src="muf.png"
								alt="Mandiri Utama Finance"
								className="work-image"
							/>
							<div className="work-title">Mandiri Utama Finance</div>
							<div className="work-subtitle">
								Application Tester 
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
