import Search from "../components/Search";
import {connect} from "react-redux";

import {addStock} from "../actions";

// function mapStateToProps(state) {
// 	return {
// 		stocks: state.stocks,
// 	};
// }

function mapDispatchToProps(dispatch) {
	return {
		handleClick: (symbol, shares, targetWeight) => {
			console.log("Good");
			dispatch(addStock(symbol, shares, targetWeight));
		},
	};
}

export default connect(null, mapDispatchToProps)(Search);
