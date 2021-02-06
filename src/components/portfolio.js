import React from "react";
import "../css/portfolio.css";

import Increment from "../containers/incrementContainer";
import Decrement from "../containers/decrementContainer";

import finnhubClient from "../apis/finnhubClient";

const symbol = "AAPL";

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: this.props.stocks,
			currentPrice: 0,
			currency: "$",
		};
	}

	componentDidMount() {
		//Quote
		finnhubClient.quote(symbol, (error, data, response) => {
			this.setState({currentPrice: data.c});
		});
	}

	render() {
		let tableDataDOM = "";

		// @dom: show all values in the table
		tableDataDOM = this.state.stocks.map((stock, index) => {
			return (
				<tr key={index}>
					<th scope="row">{stock.symbol}</th>
					<td style={{display: "flex", justifyContent: "space-between"}}>
						<Decrement />
						{stock.shares}
						<Increment />
					</td>
					<td>${this.state.currentPrice}</td>
					<td>${this.state.currentPrice * stock.shares}</td>
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
