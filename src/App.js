import { Routes, Route } from "react-router-dom";
// import ReactGA from "react-ga4";

import Homepage from "./page/homepage";
import About from "./page/about";
import Notfound from "./page/404";
import Project from "./page/project";
import Contact from "./page/contact"
import "./app.css";

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About/>} />
				<Route path="/projects" element={<Project/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="*" element={<Notfound/>}/>
				
			</Routes>
		</div>
	);
}

export default App;
