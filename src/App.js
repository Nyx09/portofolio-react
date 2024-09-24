import { Routes, Route } from "react-router-dom";
// import ReactGA from "react-ga4";

import Homepage from "./page/homepage";

import "./app.css";

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
