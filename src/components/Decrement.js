import React from "react";

const Decrement = props => {
	return (
		<div>
			<button onClick={() => props.handleClick(props.id)}>-</button>
		</div>
	);
};

export default Decrement;
