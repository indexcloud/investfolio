import React from "react";

const Increment = props => {
	return (
		<div>
			<button onClick={props.handleClick}>+</button>
		</div>
	);
};

export default Increment;
