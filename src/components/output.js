import React from "react";

const Output = props => (
	<div style={{display: "flex", justifyContent: "space-around"}}>
		<div>{props.stocks.map(stock => stock.symbol)}</div>
	</div>
);

export default Output;
