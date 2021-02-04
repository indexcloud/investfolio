import React from "react";
import "../assets/Portfolios.css";

import Increment from "../containers/IncrementContainer";
import Decrement from "../containers/DecrementContainer";

import Output from "../containers/PortfoliosContainer";

import finnhubClient from "../apis/finnhubClient";

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
			console.log(this.state.stocks);
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
								<th scope="col">Average Cost</th>
								<th scope="col">Total Cost</th>
								<th scope="col">Current Price</th>
								<th scope="col">Total Value</th>
								<th scope="col">Weight</th>
								<th scope="col">Target Weight</th>
								<th scope="col">Deviation</th>
							</tr>
						</thead>
						<tbody>
							{/* <div>{props.stocks[0].symbol}</div> */}
							<Output />
							<Increment />
							<Decrement />
							<div>${this.state.stocks}</div>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Portfolios;
