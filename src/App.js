import "./App.css";
import Search from "./Search";
import Portfolios from "./Portfolios";
import Chart from "./Chart";

import {Provider} from "react-redux";
import {store} from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<h1>Investfolio</h1>
					<Search />
					<Portfolios />
				</header>
				<div className="App-chart">
					<Chart />
				</div>
			</div>
		</Provider>
	);
}

export default App;
