import React from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";

function App() {
	
	return (
		<div className="App">
			<Nav />
			<HogTiles hogs={hogs}/>
		</div>
	);
}

export default App;
