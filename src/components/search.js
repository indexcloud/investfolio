import React from "react";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: this.props.stocks,
		};
	}
	render() {
		console.log(this.props.stocks);
		return (
			<form>
				<label>
					Ticker:
					<input type="text" />
				</label>
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default Search;
