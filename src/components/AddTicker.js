import React, {Component} from "react";

class AddTicker extends Component {
	render() {
		return (
			<div>
				<form>
					<label>
						<input type="text" value="APPL" />
					</label>
					<label>
						<input type="number" value="100%" />
					</label>
					<label>
						<input type="number" value="5%" />
					</label>
					<button type="submit">Set</button>
				</form>
			</div>
		);
	}
}

export default AddTicker;
