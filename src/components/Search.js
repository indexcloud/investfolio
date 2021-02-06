import React from "react";
import "../css/Search.css";
// import finnhubClient from "../apis/finnhubClient";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			symbol: "",
			shares: "",
			targetWeight: "",
		};
	}

	postStock() {
		this.props.handleClick(this.state.symbol, this.state.shares, this.state.targetWeight);
	}

	// componentDidMount() {
	// 	//Quote
	// 	finnhubClient.quote(symbol, (error, data, response) => {
	// 		this.setState({currentPrice: data.c});
	// 	});
	// }

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
						onChange={event => this.setState({shares: event.target.value})}
					/>
				</label>
				<label>
					Target Weight:
					<input
						type="number"
						value={this.state.targetWeight}
						onChange={event => this.setState({targetWeight: event.target.value})}
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
