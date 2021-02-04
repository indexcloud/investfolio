import React from "react";

import Increment from "../containers/IncrementContainer";
import Decrement from "../containers/DecrementContainer";

const Portfolio = props => {
	let tableDataDOM = "";

	// @dom: show all values in the table
	tableDataDOM = props.stocks.map((stock, index) => {
		return (
			<tr key={index}>
				<th scope="row">{stock.symbol}</th>
				<td>
					{stock.shares}
					<Increment />
					<Decrement />
				</td>
				<td>${props.currentPrice}</td>
				<td>${props.currentPrice * stock.shares}</td>
				<td>{stock.currentWeight}</td>
			</tr>
		);
	});
	return tableDataDOM;
};

export default Portfolio;
