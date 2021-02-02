import React, {Component} from "react";
import Chart from "./components/Chart";
import AddTicker from "./components/AddTicker";
import Ticker from "./components/Ticker";
import Output from "./containers/OutputContainer";
import Increment from "./containers/IncrementContainer";
import Decrement from "./containers/DecrementContainer";

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c0bolbf48v6rgo5eb28g"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

const symbol = "AAPL";

class Portfolios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: [],
		};
	}

	componentDidMount() {
		//Quote
		finnhubClient.quote(symbol, (error, data, response) => {
			this.setState({stocks: data.c});
			console.log(this.state.stocks);
		});
	}

	render() {
		return (
			<div>
				<h1>Investfolio</h1>
				<AddTicker />
				<ul>
					<li>
						<Ticker />
						<Output />
						<Increment />
						<Decrement />
					</li>
					<li>
						<Ticker />
					</li>
				</ul>
				<Chart />
			</div>
		);
	}
}

export default Portfolios;
