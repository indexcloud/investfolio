import "./App.css";
import Search from "./containers/searchContainer";
import Portfolio from "./containers/portfolioContainer";
import Chart from "./containers/chartContainer";

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
