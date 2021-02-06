import React from "react";
import "../css/Search.css";
// import finnhubClient from "../apis/finnhubClient";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.postStock = this.postStock.bind(this);
		this.state = {
			symbol: "",
			shares: "",
			targetWeight: "",
		};
	}

	postStock() {
		this.props.stockClick(this.state.symbol, this.state.shares, this.state.targetWeight);
	}

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
