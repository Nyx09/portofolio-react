import { Routes, Route } from "react-router-dom";
// import ReactGA from "react-ga4";

import Homepage from "./page/homepage";
import About from "./page/about";
import Notfound from "./page/404";
import "./app.css";

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About/>} />
				<Route path="*" element={<Notfound/>}/>
				
			</Routes>
		</div>
	);
}

export default App;
