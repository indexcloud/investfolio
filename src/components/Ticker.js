import React from "react";

const Ticker = props => {
	return (
		<div>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div>Ticker</div>
				<div>Current Allocation 50%</div>
				<div> Target Allocation 50%</div>
				<div>Deviation</div>
			</div>
		</div>
	);
};

export default Ticker;
