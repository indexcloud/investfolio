import React, {Component} from "react";

class AddTicker extends Component {
	render() {
		return (
			<div>
				<form>
					<label>
						Ticker:
						<input type="text" value="APPL" />
					</label>
					<label>
						Weight:
						<input type="number" value="100%" />
					</label>
					<label>
						Target Weight:
						<input type="number" value="5%" />
					</label>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default AddTicker;
