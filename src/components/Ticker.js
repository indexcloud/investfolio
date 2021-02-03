import React from "react";

import Output from "../containers/OutputContainer";
import Increment from "../containers/IncrementContainer";
import Decrement from "../containers/DecrementContainer";

const Ticker = props => {
	return (
		<div>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div>Ticker</div>
				<Output />
				<Increment />
				<Decrement />
				<div>${props.Price}</div>
				<div>Current Allocation 50%</div>
				<div> Target Allocation 50%</div>
				<div>Deviation</div>
			</div>
		</div>
	);
};

export default Ticker;
