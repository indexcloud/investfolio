import React from "react";
import "../css/Portfolio.css";

import Increment from "../containers/IncrementContainer";
import Decrement from "../containers/DecrementContainer";
// import Increment from "./Increment";
// import Decrement from "./Decrement";

import finnhubClient from "../apis/finnhubClient";
// import {updateStock} from "../actions";

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: this.props.stocks,
			currentPrice: [],
			weight: [], // calculating current weight and save in here
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.stocks !== this.props.stocks) {
			// const updatedCurrentPrice = this.props.stocks.map(stock =>
			// 	finnhubClient.quote(stock.symbol, (error, data, response) => data.c)
			// );
			// this.setState({stocks: this.props.stocks, currentPrice: updatedCurrentPrice});
			this.getQuote();
			this.setState({stocks: this.props.stocks});
		}
	}

	componentDidMount() {
		this.getQuote();
	}

	getQuote() {
		this.props.stocks.map(stock =>
			finnhubClient.quote(stock.symbol, (error, data, response) => {
				this.setState({currentPrice: [...this.state.currentPrice, data.c]});
			})
		);
	}

	render() {
		let tableDataDOM = "";

		// @dom: show all values in the table. Still need to fix currentWeight
		tableDataDOM = this.state.stocks.map((stock, index) => {
			return (
				<tr key={index}>
					<th scope="row">{stock.symbol}</th>
					<td style={{display: "flex", justifyContent: "space-around", margin: "0 15px"}}>
						<Decrement id={index} />
						<div style={{padding: "0 15px"}}>{stock.shares}</div>
						<Increment id={index} />
					</td>
					<td>${this.state.currentPrice[index]}</td>
					<td>${(this.state.currentPrice[index] * stock.shares).toFixed(2)}</td>
					<td>{stock.currentWeight}%</td>
					<td>{stock.targetWeight}%</td>
				</tr>
			);
		});

		return (
			<div className="card card-container table-data">
				<div className="card-body">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Symbol</th>
								<th scope="col">Shares</th>
								<th scope="col">Current Price</th>
								<th scope="col">Total Value</th>
								<th scope="col">Weight</th>
								<th scope="col">Target Weight</th>
							</tr>
						</thead>
						<tbody>{tableDataDOM}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Portfolio;
