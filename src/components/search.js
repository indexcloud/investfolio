import React from "react";
import finnhubClient from "../apis/finnhubClient";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPrice: 0,
		};
	}

	getStocks() {
		finnhubClient.quote("TSLA", (error, data, response) => {
			console.log("Hello");
			this.setState({currentPrice: data.c});
		});
	}

	// componentDidMount() {
	// 	//Quote
	// 	finnhubClient.quote(symbol, (error, data, response) => {
	// 		this.setState({currentPrice: data.c});
	// 	});
	// }

	render() {
		return (
			<form>
				<label>
					Ticker:
					<input type="text" />
				</label>
				<label>
					Shares:
					<input type="number" />
				</label>
				<label>
					Target Weight:
					<input type="number" />
				</label>
				<button type="submit" onClick={() => this.getStocks()}>
					Add
				</button>
			</form>
		);
	}
}

export default Search;
