import React from "react";

const Increment = props => {
	return (
		<div>
			<button onClick={() => props.handleClick(props.id)}>+</button>
		</div>
	);
};

export default Increment;
