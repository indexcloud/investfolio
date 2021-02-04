import React from "react";

class Search extends React.Component {
	render() {
		return (
			<form>
				<label>
					Ticker:
					<input type="text" value="APPL" />
				</label>
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default Search;
