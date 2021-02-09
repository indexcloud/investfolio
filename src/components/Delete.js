import React from "react";

const Increment = props => {
	return (
		<div>
			<button onClick={() => props.handleClick(props.symbol)}>Delete</button>
		</div>
	);
};

export default Increment;
