import "./App.css";
import Homepage from "./containers/Homepage";
import Portfolios from "./containers/Portfolios";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Homepage />
				<Portfolios />
			</header>
		</div>
	);
}

export default App;
