import "./css/App.css";
import Search from "./containers/SearchContainer";
import Portfolio from "./containers/PortfolioContainer";
import Chart from "./containers/ChartContainer";

import {Provider} from "react-redux";
import {store} from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<h1>Investfolio</h1>
					<Search />
					<Portfolio />
				</header>
				<div className="App-chart">
					<Chart />
				</div>
			</div>
		</Provider>
	);
}

export default App;
