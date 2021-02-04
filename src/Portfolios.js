import React from "react";
import "./assets/Portfolios.css";

import Portfolio from "./containers/PortfolioContainer";

import finnhubClient from "./apis/finnhubClient";

const symbol = "AAPL";

class Portfolios extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: 123,
			currency: "$",
		};
	}

	componentDidMount() {
		//Quote
		finnhubClient.quote(symbol, (error, data, response) => {
			this.setState({stocks: data.c});
		});
	}

	render() {
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
							</tr>
						</thead>
						<tbody>
							<Portfolio currentPrice={this.state.stocks} />
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Portfolios;
