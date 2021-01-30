import React, {Component} from "react";
import Chart from "../components/Chart";
import AddTicker from "../components/AddTicker";
import Ticker from "../components/Ticker";

class Portfolios extends Component {
	render() {
		return (
			<div>
				<h1>Portfolios</h1>
				<AddTicker />
				<ul>
					<li>
						<Ticker />
					</li>
					<li>
						<Ticker />
					</li>
				</ul>
				<button>Rebalance</button>
				<Chart />
			</div>
		);
	}
}

export default Portfolios;
