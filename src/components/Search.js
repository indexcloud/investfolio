import React from "react";
import "../css/Search.css";
import stock from "../apis/stock";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.postStock = this.postStock.bind(this);
		this.state = {
			symbol: "",
			shares: "",
			currentPrice: "",
			targetWeight: "",
		};
	}

	// componentDidMount() {
	// 	finnhubClient.quote(this.state.symbol, (error, data, response) => {
	// 		console.log(data.c);
	// 		this.setState({currentPrice: data.c});
	// 	});
	// }

	postStock = async () => {
		const quote = await stock.get("/quote", {
			params: {
				symbol: this.state.symbol,
				token: "bqhq9i7rh5rbubolrqd0", // c0bolbf48v6rgo5eb28g
			},
		});
		this.setState({currentPrice: quote.data.c});
		this.props.stockClick(this.state.symbol, this.state.shares, this.state.currentPrice, this.state.targetWeight);
	};

	render() {
		return (
			<div>
				<label>
					Symbol:
					<input
						type="text"
						value={this.state.symbol}
						onChange={event => this.setState({symbol: event.target.value})}
					/>
				</label>
				<label>
					Shares:
					<input
						type="number"
						value={this.state.shares}
						onChange={event => this.setState({shares: parseInt(event.target.value)})}
					/>
				</label>
				<label>
					Target Weight:
					<input
						type="number"
						value={this.state.targetWeight}
						onChange={event => this.setState({targetWeight: parseInt(event.target.value)})}
					/>
				</label>
				<button type="submit" onClick={this.postStock}>
					Add
				</button>
			</div>
		);
	}
}

export default Search;
