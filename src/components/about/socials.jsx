import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";
import "./styles/socials.css";

const SocialLink = ({ href, icon, text }) => (
	<div className="social">
		<a href={href} target="_blank" rel="noreferrer">
			<div className="social-icon">
				<FontAwesomeIcon icon={icon} className="social-icon" />
			</div>
			<div className="social-text">{text}</div>
		</a>
	</div>
);

const Socials = () => {
	return (
		<>
			<SocialLink href={INFO.socials.github} icon={faGithub} text="Follow on GitHub" />
			<SocialLink href={INFO.socials.linkedin} icon={faLinkedin} text="Follow on LinkedIn" />
			<SocialLink href={INFO.socials.instagram} icon={faInstagram} text="Follow on Instagram" />
			<div className="email">
				<div className="email-wrapper">
					<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</>
	);
};

export default Socials;
