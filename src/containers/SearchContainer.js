import Search from "../components/Search";
import {connect} from "react-redux";

import {addStock} from "../actions";

function mapStateToProps(state) {
	return {
		stocks: state.stocks,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		stockClick: (symbol, shares, currentPrice, targetWeight) => {
			dispatch(addStock(symbol, shares, currentPrice, targetWeight));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
