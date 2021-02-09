import React from "react";
import "../css/Portfolio.css";

import Increment from "../containers/IncrementContainer";
import Decrement from "../containers/DecrementContainer";
import Delete from "../containers/DeleteContainer";

// import {updateStock} from "../actions";

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: this.props.stocks,
			totalWeight: [], // calculating current weight and save in here
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.stocks !== this.props.stocks) {
			this.setState({
				stocks: this.props.stocks,
			});
		}
	}

	render() {
		let tableDataDOM = "";

		const totalWeight = this.state.stocks.reduce((sum, stock) => sum + stock.currentPrice * stock.shares, 0);

		// @dom: show all values in the table. Still need to fix currentWeight ?? Maybe map aip call to each iteration

		tableDataDOM = this.state.stocks.map((stock, index) => {
			const totalValue = stock.currentPrice * stock.shares;
			const deviation = ((totalValue / totalWeight) * 100 - stock.targetWeight).toFixed(2);

			return (
				<tr key={index}>
					<th scope="row">{stock.symbol}</th>
					<td style={{display: "flex", justifyContent: "space-around", margin: "0 15px"}}>
						<Decrement id={index} />
						<div style={{padding: "0 15px"}}>{stock.shares}</div>
						<Increment id={index} />
					</td>
					<td>${stock.currentPrice}</td>
					<td>${totalValue.toFixed(2)}</td>
					<td>{((totalValue / totalWeight) * 100).toFixed(2)}%</td>
					<td style={{display: "flex", justifyContent: "space-around", margin: "0 15px"}}>
						{/* <Decrement id={index} /> */}
						<div style={{padding: "0 15px"}}>{stock.targetWeight}%</div>
						{/* <Increment id={index} /> */}
					</td>
					<td className={deviation >= 0 ? "green-text" : "red-text"}>{deviation}%</td>
					<td>
						<Delete symbol={stock.symbol} />
					</td>
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
								<th scope="col">Current Weight</th>
								<th scope="col">Target Weight</th>
								<th scope="col">Deviation</th>
								<th scope="col" className="th-functions">
									null
								</th>
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
