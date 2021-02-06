import React from "react";

const Decrement = props => {
	return (
		<div>
			<button onClick={props.handleClick}>-</button>
		</div>
	);
};

export default Decrement;
