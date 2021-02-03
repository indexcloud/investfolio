import "./App.css";
import Portfolios from "./Portfolios";
import Chart from "./components/Chart";

import {Provider} from "react-redux";
import {store} from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
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
