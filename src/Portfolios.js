import React, {Component} from "react";

import Ticker from "./components/Ticker";

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
				<ul>
					<li>
						<Ticker Price={this.state.stocks[0]} />
					</li>
					<li>
						<Ticker />
					</li>
				</ul>
				<form>
					<label>
						Ticker:
						<input type="text" value="APPL" />
					</label>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default Portfolios;
